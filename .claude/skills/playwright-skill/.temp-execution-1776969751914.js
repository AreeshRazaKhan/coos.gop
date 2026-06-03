const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')

const TARGET_URL = 'http://localhost:3001'

const PAGES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/events', name: 'events-list' },
  { path: '/events/stevensville-town-hall-may-2026', name: 'events-detail' },
  { path: '/volunteer', name: 'volunteer' },
  { path: '/ask', name: 'ask-russ' },
  { path: '/contact', name: 'contact' },
  { path: '/terms-and-conditions', name: 'terms' },
  { path: '/privacy-policy', name: 'privacy' },
]

const VIEWPORTS = [
  { name: 'mobile-375', width: 375, height: 667 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'tablet-900', width: 900, height: 1024 },
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'wide-1920', width: 1920, height: 1080 },
]

const OUT = '/tmp/responsive-audit'
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true })
VIEWPORTS.forEach((v) => {
  const dir = path.join(OUT, v.name)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
})

const results = []

;(async () => {
  const browser = await chromium.launch({ headless: false })

  for (const viewport of VIEWPORTS) {
    console.log(`\n=== ${viewport.name} (${viewport.width}×${viewport.height}) ===`)
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
    })
    const page = await context.newPage()

    for (const p of PAGES) {
      const url = `${TARGET_URL}${p.path}`
      const record = {
        viewport: viewport.name,
        page: p.name,
        path: p.path,
        consoleErrors: [],
        pageErrors: [],
        failedRequests: [],
        horizontalScroll: null,
        status: null,
      }

      const onConsole = (msg) => {
        if (msg.type() === 'error') {
          const text = msg.text()
          if (
            !text.includes('Failed to load resource') &&
            !text.includes('favicon')
          ) {
            record.consoleErrors.push(text)
          }
        }
      }
      const onPageError = (err) => record.pageErrors.push(err.message)
      const onRequestFailed = (req) => {
        const u = req.url()
        if (!u.includes('favicon') && !u.includes('_next/static')) {
          record.failedRequests.push({ url: u, failure: req.failure()?.errorText })
        }
      }

      page.on('console', onConsole)
      page.on('pageerror', onPageError)
      page.on('requestfailed', onRequestFailed)

      try {
        const response = await page.goto(url, {
          waitUntil: 'networkidle',
          timeout: 30000,
        })
        record.status = response?.status() ?? null
        await page.waitForTimeout(400)

        const metrics = await page.evaluate(() => ({
          docWidth: document.documentElement.scrollWidth,
          viewWidth: window.innerWidth,
          docHeight: document.documentElement.scrollHeight,
          viewHeight: window.innerHeight,
        }))
        record.horizontalScroll = metrics.docWidth > metrics.viewWidth + 1
        record.overflow = metrics.docWidth - metrics.viewWidth

        await page.screenshot({
          path: path.join(OUT, viewport.name, `${p.name}.png`),
          fullPage: true,
        })

        const icon = record.horizontalScroll
          ? '⚠️ overflow'
          : record.consoleErrors.length || record.pageErrors.length
            ? '⚠️ errors'
            : '✅'
        console.log(
          `  ${icon} ${p.name.padEnd(16)} status=${record.status} overflow=${record.overflow}px`,
        )
      } catch (err) {
        record.fatal = err.message
        console.log(`  ❌ ${p.name} crashed: ${err.message}`)
      } finally {
        page.off('console', onConsole)
        page.off('pageerror', onPageError)
        page.off('requestfailed', onRequestFailed)
      }

      results.push(record)
    }

    await context.close()
  }

  // Mobile menu interaction test
  console.log('\n=== mobile-menu interaction (375×667) ===')
  const mm = await browser.newContext({ viewport: { width: 375, height: 667 } })
  const mmPage = await mm.newPage()
  await mmPage.goto(TARGET_URL, { waitUntil: 'networkidle' })
  try {
    await mmPage.click('button[aria-label="Open menu"]', { timeout: 5000 })
    await mmPage.waitForTimeout(300)
    await mmPage.screenshot({
      path: path.join(OUT, 'mobile-375', 'home-menu-open.png'),
      fullPage: false,
    })
    console.log('  ✅ mobile menu opened')
  } catch (e) {
    console.log(`  ❌ mobile menu failed: ${e.message}`)
  }
  await mm.close()

  await browser.close()

  // Summary
  const errors = results.filter(
    (r) =>
      r.horizontalScroll ||
      r.consoleErrors.length ||
      r.pageErrors.length ||
      r.failedRequests.length ||
      r.fatal ||
      (r.status && r.status >= 400),
  )

  console.log('\n\n========== SUMMARY ==========')
  console.log(`Pages tested: ${results.length} (9 pages × 5 viewports)`)
  console.log(`Issues found: ${errors.length}`)

  if (errors.length === 0) {
    console.log('\n✅ ALL PAGES CLEAN across every viewport')
  } else {
    console.log('\nISSUE DETAIL:')
    for (const r of errors) {
      console.log(`\n[${r.viewport}] ${r.page} (${r.path})`)
      if (r.horizontalScroll) {
        console.log(`  ⚠️ horizontal overflow: ${r.overflow}px`)
      }
      if (r.status && r.status >= 400) console.log(`  ⚠️ HTTP status: ${r.status}`)
      if (r.consoleErrors.length) {
        console.log(`  ⚠️ console errors:`)
        r.consoleErrors.forEach((e) => console.log(`    - ${e}`))
      }
      if (r.pageErrors.length) {
        console.log(`  ⚠️ page errors:`)
        r.pageErrors.forEach((e) => console.log(`    - ${e}`))
      }
      if (r.failedRequests.length) {
        console.log(`  ⚠️ failed requests:`)
        r.failedRequests.forEach((f) =>
          console.log(`    - ${f.url} (${f.failure})`),
        )
      }
      if (r.fatal) console.log(`  ❌ FATAL: ${r.fatal}`)
    }
  }

  fs.writeFileSync(
    path.join(OUT, 'results.json'),
    JSON.stringify(results, null, 2),
  )
  console.log(`\n📁 Screenshots + JSON report: ${OUT}`)
})()

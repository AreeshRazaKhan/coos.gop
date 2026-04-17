import { test } from '@playwright/test'

const ROUTES = [
  { path: '/', name: 'home' },
  { path: '/about', name: 'about' },
  { path: '/events', name: 'events' },
  { path: '/events/hamilton-town-hall-may-02', name: 'event-detail' },
  { path: '/volunteer', name: 'volunteer' },
  { path: '/ask', name: 'ask' },
  { path: '/contact', name: 'contact' },
]

for (const route of ROUTES) {
  test(`capture ${route.name}`, async ({ page }, testInfo) => {
    await page.goto(route.path, { waitUntil: 'networkidle' })
    // Give hero media and webfonts a moment to settle
    await page.waitForTimeout(500)
    await page.screenshot({
      path: `screenshots/${testInfo.project.name}/${route.name}.png`,
      fullPage: true,
      animations: 'disabled',
    })
  })
}

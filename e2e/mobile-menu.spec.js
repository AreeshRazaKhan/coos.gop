import { test } from '@playwright/test'

test('mobile menu opens on home', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'desktop', 'Menu is only visible below lg')
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: /open menu/i }).click()
  await page.waitForTimeout(300)
  await page.screenshot({
    path: `screenshots/${testInfo.project.name}/menu-open-home.png`,
    fullPage: false,
  })
})

test('mobile menu opens on inner page', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'desktop', 'Menu is only visible below lg')
  await page.goto('/about', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: /open menu/i }).click()
  await page.waitForTimeout(300)
  await page.screenshot({
    path: `screenshots/${testInfo.project.name}/menu-open-about.png`,
    fullPage: false,
  })
})

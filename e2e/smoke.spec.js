import { expect, test } from '@playwright/test'

test.describe('smoke', () => {
  test('home hero renders the published rally-cry headline', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toContainText(
      'Not left versus right',
    )
  })

  test('nav routes all resolve with correct H1', async ({ page }) => {
    const routes = [
      { path: '/about', expect: /From Montana/i },
      { path: '/events', expect: /Where Russ will/i },
      { path: '/volunteer', expect: /The time is/i },
      { path: '/ask', expect: /On the/i },
      { path: '/contact', expect: /Drop a line/i },
    ]

    for (const route of routes) {
      await page.goto(route.path)
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(route.expect)
    }
  })

  test('event detail page renders for a known slug', async ({ page }) => {
    await page.goto('/events/hamilton-town-hall-may-02')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Hamilton Town Hall')
  })
})

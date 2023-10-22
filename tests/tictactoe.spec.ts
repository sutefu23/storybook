import { test, expect } from '@playwright/test'

test.describe('ビジュアルリグレッションテスト', () => {
  test('画面に変更が無いか確認', async ({ page }) => {
    await page.goto('./')
    await page.waitForLoadState('domcontentloaded')
    await expect(page).toHaveScreenshot()
  })
})

test.afterEach(async ({ page }) => {
  await page.close()
})

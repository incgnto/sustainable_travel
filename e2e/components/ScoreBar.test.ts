// tests/ScoreBar.test.ts
import { test, expect } from '@playwright/test';

test.describe('ScoreBar', () => {
  test.beforeEach(async ({ page }) => {
    // Adjust URL below
    await page.goto('http://localhost:5173/');
  });

  test('should display correct score width based on selected tips', async ({ page }) => {
  
    await page.getByText('💧').click();
    await page.getByText('🏠').click();
    await page.getByText('🚇').click();

    // Verify that the score bar has the correct width (60%)
    const bar = page.locator('.score-bar .bar');
    await expect(bar).toHaveAttribute('style', /width: 60%/);
  });

  test('should change bar color based on score', async ({ page }) => {
    // Select tips to achieve a 60% score (Yellow)
    await page.getByText('💧').click();
    await page.getByText('🏠').click();
    await page.getByText('🚇').click();

    const bar = page.locator('.score-bar .bar');
    await expect(bar).toHaveCSS('background-color', 'rgb(255, 235, 59)');

    // Select additional tips to reach 100% (Dark Green)
    await page.getByText('🛍️').click();
    await page.getByText('💡').click();

    const barGreen = page.locator('.score-bar .bar');
    await expect(barGreen).toHaveCSS('background-color', 'rgb(76, 175, 80)');
  });
});

// tests/HomeView.test.ts
import { test, expect } from '@playwright/test';

test.describe('HomeView', () => {
  test.beforeEach(async ({ page }) => {
    // Adjust if necessary
    await page.goto('http://localhost:5173/');
  });

  test('should render 5 tips, score bar, and email form', async ({ page }) => {
    const tips = page.locator('.tips-grid .tip');
    await expect(tips).toHaveCount(5);

    // Select 1 tip to make the score bar visible
    await page.getByText('💧Use reusable water bottles.').click();

    const scoreBar = page.locator('.score-bar .bar');
    await expect(scoreBar).toBeVisible();

    const emailForm = page.locator('form');
    await expect(emailForm).toBeVisible();
  });

  test('should update score bar and message based on selected tips', async ({ page }) => {
    await page.goto('http://localhost:5173');

    const tips = page.locator('.tips-grid .tip');
    const scoreBar = page.locator('.score-bar .bar');
    const scoreMessage = page.locator('.score-message');

    // Initially, score is 0 
    await expect(scoreBar).toHaveAttribute('style', /width: 0%/);
    await expect(scoreBar).toHaveCSS('background-color', 'rgb(244, 67, 54)');
    await expect(scoreMessage).toHaveText('Try choosing some of the tips!');

    // Select 1st and 2nd tips (40% - red)
    await tips.nth(0).click();
    await tips.nth(1).click();
    await expect(scoreBar).toHaveAttribute('style', /width: 40%/);
    await expect(scoreBar).toHaveCSS('background-color', 'rgb(244, 67, 54)');
    await expect(scoreMessage).toHaveText("Let's make some more changes!");

    // Select 3rd tip (60% - yellow)
    await tips.nth(2).click();
    await expect(scoreBar).toHaveAttribute('style', /width: 60%/);
    await expect(scoreBar).toHaveCSS('background-color', 'rgb(255, 235, 59)');
    await expect(scoreMessage).toHaveText('Keep it up!');

    // Select 4th tip (80% - green)
    await tips.nth(3).click();
    await expect(scoreBar).toHaveAttribute('style', /width: 80%/);
    await expect(scoreBar).toHaveCSS('background-color', 'rgb(139, 195, 74)');
    await expect(scoreMessage).toHaveText("You're doing great!");

    // Select 5th tip (100% - dark green)
    await tips.nth(4).click();
    await expect(scoreBar).toHaveAttribute('style', /width: 100%/);
    await expect(scoreBar).toHaveCSS('background-color', 'rgb(76, 175, 80)');
    await expect(scoreMessage).toHaveText("You're a climate hero!");
  });
});

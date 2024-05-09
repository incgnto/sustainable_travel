// tests/SustainabilityTip.test.ts
import { test, expect } from '@playwright/test';

test.describe('SustainabilityTip', () => {
  test.beforeEach(async ({ page }) => {
    // Adjust URL if necessary
    await page.goto('http://localhost:5173/');
  });

  test('should toggle selection state on click', async ({ page }) => {
    // Assign the first tip (💧 Use reusable water bottles)
    const firstTip = page.getByText('💧Use reusable water bottles.');

    // Initially not selected
    await expect(firstTip).not.toHaveClass(/selected/);

    // Click to select
    await firstTip.click();
    await expect(firstTip).toHaveClass(/selected/);

    // Click to deselect
    await firstTip.click();
    await expect(firstTip).not.toHaveClass(/selected/);
  });
});

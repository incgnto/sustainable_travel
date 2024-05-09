// tests/TipsGrid.test.ts
import { test, expect } from '@playwright/test';

test.describe('TipsGrid', () => {
  test.beforeEach(async ({ page }) => {
    // Update URL if necessary
    await page.goto('http://localhost:5173/');
  });

  test('should check if the tips can be located', async ({ page }) => {
    // Locate tips based on their actual texts and emojis
    const tip1 = page.getByText('💧Use reusable water bottles.');
    const tip2 = page.getByText('🏠Choose eco-friendly accommodations.');
    const tip3 = page.getByText('🚇Opt for public transportation.');
    const tip4 = page.getByText('🛍️Support local businesses.');
    const tip5 = page.getByText('💡Reduce energy consumption.');

    await expect(tip1).toBeVisible();
    await expect(tip2).toBeVisible();
    await expect(tip3).toBeVisible();
    await expect(tip4).toBeVisible();
    await expect(tip5).toBeVisible();
  });
});
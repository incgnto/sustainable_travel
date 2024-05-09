// tests/EmailForm.test.ts
import { test, expect } from '@playwright/test';

test.describe('EmailForm', () => {
  test.beforeEach(async ({ page }) => {
    // Adjust URL below
    await page.goto('http://localhost:5173/');
  });

  test('should show success message on submit', async ({ page }) => {
    await page.getByPlaceholder('your@email.com').fill('hi@gmail.com');
    await page.getByLabel('Date:').fill('2031-10-03');
    await page.getByRole('button', { name: 'Send' }).click();

    const successMessage = page.locator('.success-message');
    const expectedMessage = `This will be sent to hi@gmail.com on 2031-10-03:

Remember to:

Thank you!`;
    await expect(successMessage).toHaveText(expectedMessage);
  })
});

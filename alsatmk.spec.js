const { test, expect } = require('@playwright/test');

test('Alsat.mk homepage loads and has a visible logo', async ({ page }) => {
  await page.goto('https://alsat.mk/');

  // Check if the logo is visible
  const logo = page.locator('img[alt="Alsat-M"]'); // Adjust alt text if needed
  await expect(logo).toBeVisible();

  // Check the title
  await expect(page).toHaveTitle(/Alsat/);
});

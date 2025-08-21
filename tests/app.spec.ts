import { test, expect } from '@playwright/test';

test.describe('App Component', () => {
  test('should render the main app layout', async ({ page }) => {
    await page.goto('/');

    // Verify the main app container is visible
    const appContainer = page.locator('#app-container');
    await expect(appContainer).toBeVisible();
  });

  test('should navigate to a specific section when clicking a menu item', async ({ page }) => {
    await page.goto('/');

    // Click on a menu item
    const menuItem = page.locator('nav >> text=Section 1');
    await menuItem.click();

    // Verify the section is displayed
    const section = page.locator('#section-1');
    await expect(section).toBeVisible();
  });

  test('should display an error message for invalid input', async ({ page }) => {
    await page.goto('/');

    // Fill invalid input and submit
    const inputField = page.locator('#input-field');
    await inputField.fill('invalid input');
    const submitButton = page.locator('#submit-button');
    await submitButton.click();

    // Verify error message is displayed
    const errorMessage = page.locator('#error-message');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Invalid input, please try again.');
  });

  test('should successfully submit valid input', async ({ page }) => {
    await page.goto('/');

    // Fill valid input and submit
    const inputField = page.locator('#input-field');
    await inputField.fill('valid input');
    const submitButton = page.locator('#submit-button');
    await submitButton.click();

    // Verify success message is displayed
    const successMessage = page.locator('#success-message');
    await expect(successMessage).toBeVisible();
    await expect(successMessage).toHaveText('Submission successful!');
  });
});
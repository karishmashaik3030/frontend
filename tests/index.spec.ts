import { test, expect } from '@playwright/test';

test.describe('Index Page', () => {
  test('should load the index page and display the main elements', async ({ page }) => {
    // Navigate to the index page
    await page.goto('/');

    // Verify the page title
    await expect(page).toHaveTitle(/Index Page/i);

    // Check for the presence of the main header
    const header = page.locator('header >> text=Welcome');
    await expect(header).toBeVisible();

    // Verify the presence of a primary button
    const primaryButton = page.locator('button:has-text("Get Started")');
    await expect(primaryButton).toBeVisible();

    // Ensure the primary button is clickable
    await primaryButton.click();

    // Verify navigation or action after clicking the button
    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('should handle navigation menu interactions', async ({ page }) => {
    // Navigate to the index page
    await page.goto('/');

    // Open the navigation menu
    const menuButton = page.locator('button[aria-label="Open menu"]');
    await menuButton.click();

    // Verify the menu is visible
    const navMenu = page.locator('nav[role="navigation"]');
    await expect(navMenu).toBeVisible();

    // Click on a menu item
    const aboutLink = navMenu.locator('a:has-text("About")');
    await aboutLink.click();

    // Verify navigation to the About page
    await expect(page).toHaveURL(/.*about/);
  });
});
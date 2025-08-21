import { test, expect } from '@playwright/test';

test.describe('App Component', () => {
  test('should render the main application layout', async ({ page }) => {
    // Navigate to the application
    await page.goto('/');

    // Verify the main header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Verify the navigation menu is present
    const navMenu = page.locator('nav');
    await expect(navMenu).toBeVisible();

    // Verify the main content area is rendered
    const mainContent = page.locator('main');
    await expect(mainContent).toBeVisible();

    // Verify the footer is visible
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should navigate to a specific page via the navigation menu', async ({ page }) => {
    // Navigate to the application
    await page.goto('/');

    // Click on a navigation link
    const navLink = page.locator('nav >> text=About');
    await navLink.click();

    // Verify the URL has changed
    await expect(page).toHaveURL('/about');

    // Verify the About page content is visible
    const aboutContent = page.locator('main >> text=About Us');
    await expect(aboutContent).toBeVisible();
  });

  test('should handle user interactions correctly', async ({ page }) => {
    // Navigate to the application
    await page.goto('/');

    // Interact with a button
    const button = page.locator('button >> text=Click Me');
    await button.click();

    // Verify the result of the button click
    const resultMessage = page.locator('text=Button Clicked');
    await expect(resultMessage).toBeVisible();
  });
});
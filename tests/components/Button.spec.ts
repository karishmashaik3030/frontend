import { test, expect } from '@playwright/test';

test.describe('Button Component', () => {
  test('should render the button with correct text', async ({ page }) => {
    await page.goto('/'); // Replace with the actual URL or route where the Button component is rendered

    const button = page.locator('data-testid=button'); // Replace with the actual data-testid or selector for the button
    await expect(button).toBeVisible();
    await expect(button).toHaveText('Click Me'); // Replace 'Click Me' with the expected button text
  });

  test('should trigger the click event when clicked', async ({ page }) => {
    await page.goto('/');

    const button = page.locator('data-testid=button');
    await button.click();

    const result = page.locator('data-testid=button-click-result'); // Replace with the actual data-testid or selector for the result of the click event
    await expect(result).toBeVisible();
    await expect(result).toHaveText('Button clicked!'); // Replace 'Button clicked!' with the expected result text
  });

  test('should be disabled when the disabled prop is true', async ({ page }) => {
    await page.goto('/');

    const button = page.locator('data-testid=button-disabled'); // Replace with the actual data-testid or selector for the disabled button
    await expect(button).toBeVisible();
    await expect(button).toBeDisabled();
  });
});
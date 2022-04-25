const { test, expect } = require('@playwright/test');

test('screenshot', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    expect(await page.screenshot()).toMatchSnapshot();
});

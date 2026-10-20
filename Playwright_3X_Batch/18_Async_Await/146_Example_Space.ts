import {test, expect } from '@playwright/test'

test('has title', async ({page}) =>{
    await element = page.locator("scasc");

    await expect(page).toHaveTitle(/Playwright/);
})
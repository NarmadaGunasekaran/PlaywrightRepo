import { test, expect } from '@playwright/test';

test.only('login validation', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator('#userEmail').fill('gnarmada77@gmail.com');
    await page.locator('#userPassword').fill('Narmalavan@90');
    await page.locator('[value="Login"]').click();
    console.log(await page.title());
     await page.waitForLoadState('networkidle');
    await page.locator('.card-body b').first().waitFor();
    const firstProduct = page.locator('.card-body b').first();
    await expect(firstProduct).toHaveText('ADIDAS ORIGINAL');
    console.log(await page.locator('.card-body b').first().textContent());

  
});
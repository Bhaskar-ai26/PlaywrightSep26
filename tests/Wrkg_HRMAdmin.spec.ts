import { test, expect } from '@playwright/test';

test('Tabs and under tabs', async ({page})=>{
     await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login');

    //Login
    await page.getByRole('textbox', { name: 'Username' }).fill('testadmin');
    await page.getByRole('textbox', { name: 'Password' }).fill('Vibetestq@123#');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator("//span[text()='Admin']").click();
    await page.waitForTimeout(2000);
    expect(page.getByText("AdminUser Management")).toBeVisible()
    await page.locator(".oxd-topbar-body-nav .oxd-topbar-body-nav-tab-item").first().click()
    await page.waitForTimeout(2000)
    await page.locator(".oxd-topbar-body-nav .oxd-topbar-body-nav-tab-item").nth(1).click()
    await page.waitForTimeout(2000)
    await page.locator(".oxd-topbar-body-nav .oxd-topbar-body-nav-tab-item").nth(2).click()
    await page.waitForTimeout(2000)
    await page.locator(".oxd-topbar-body-nav .oxd-topbar-body-nav-tab-item").nth(3).click()
    await page.waitForTimeout(2000)
    await page.locator(".oxd-topbar-body-nav .oxd-topbar-body-nav-tab-item").nth(4).click()
    await page.waitForTimeout(2000)
    await page.locator(".oxd-topbar-body-nav .oxd-topbar-body-nav-tab-item").nth(5).click()
    await page.waitForTimeout(2000)
    await page.locator(".oxd-topbar-body-nav .oxd-topbar-body-nav-tab-item").nth(6).click()
    await page.waitForTimeout(2000)
    await page.locator(".oxd-topbar-body-nav .oxd-topbar-body-nav-tab-item").last().click()
    await page.waitForTimeout(2000)

    let newPromise = page.context().waitForEvent("page");
    await page.locator(".oxd-topbar-body-nav-slot button").click();
    let newPage = await newPromise;
   // console.log(newPage.locator(".article-title").textContent());
    expect(newPage.getByRole('heading', { name: 'How to change theme colors' })).toBeVisible()

});
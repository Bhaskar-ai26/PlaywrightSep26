import {test} from '@playwright/test'

test('adminOrgGenIfo', async({page})=>{
      await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login');

    //Login
    await page.getByRole('textbox', { name: 'Username' }).fill('testadmin');
    await page.getByRole('textbox', { name: 'Password' }).fill('Vibetestq@123#');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator("//span[text()='Admin']").click();
    await page.getByText('Organization').click();
    await page.getByRole('menuitem', { name: 'General Information' }).click();
    await page.waitForTimeout(3000);
    await page.locator('.oxd-switch-input').click();
    await page.locator("//label[contains(text(), 'City')]/following::input[1]").fill("Hyderabad");
    await page.locator("//label[contains(text(), 'Notes')]/following::textarea[1]").fill("New data is provided");
    await page.locator("div.oxd-select-wrapper i").click();
    await page.getByRole('option', { name: 'Angola' }).click();
    await page.pause();
    //await page.getByRole('button', { name: 'Save' }).click();
});
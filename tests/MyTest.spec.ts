import {test, expect} from '@playwright/test';

test('Welcome!', async ({page})=>{
    await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill("");
    await page.getByPlaceholder("Username").fill("bhaskar")
    await page.getByPlaceholder("Password").fill("Bhaskar@123#");
    await page.getByRole("button",{name:"Login"}).click();
    await page.pause();
    await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();


})
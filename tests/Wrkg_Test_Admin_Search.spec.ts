import { test, expect, FileChooser } from '@playwright/test';
import { FileChanges } from 'typescript/unstable/proto';

test('File Upload', async ({page})=>{
 await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login');

    //Login
    await page.getByRole('textbox', { name: 'Username' }).fill('testadmin');
    await page.getByRole('textbox', { name: 'Password' }).fill('Vibetestq@123#');
    await page.getByRole('button', { name: 'Login' }).click();

    // Navigate to PIM section and add an employee
    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();

    
    //Click on Admin tab
    await page.locator("//span[text()='Admin']").click();
 await expect( page.locator("//h5[text()='System Users']")).toBeVisible()
   
 await page.locator("div.oxd-input-field-bottom-space input.oxd-input--active").fill("test")
 await page.locator("//label[normalize-space()='User Role']/../..//i").click();

await page.locator("//div[@role='listbox']//span[text()='Admin']").click();
await page.locator("div.oxd-autocomplete-wrapper input").fill('Bhaskar');
await page.waitForTimeout(3000)
await page.locator("div.oxd-autocomplete-option").first().click();

await page.locator("//label[normalize-space()='Status']/../..//i").click();


await page.locator("//div[@role='listbox']//span[text()='Enabled']").click();
await page.locator("div.oxd-form-actions button[type='submit']").click();

 expect(await page.locator("p.oxd-text--toast-message").textContent()).toBeTruthy();
});


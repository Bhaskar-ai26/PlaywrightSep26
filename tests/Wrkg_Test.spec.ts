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

    // Unique Employee Details
    const firstName = 'test';
    const lastName = 'user'+Date.now();
    await page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);


    //FIle uploa

    let newProm = page.waitForEvent("filechooser");
     await page.locator("button.employee-image-action").click()
    let newfileChooser = await newProm;
    newfileChooser.setFiles("Path")


   let [newpp] = await Promise.all([
        page.waitForEvent("filechooser"),
          page.locator("button.employee-image-action").click()
    ]);
    newpp.setFiles


  
      await page.getByRole('button', { name: 'Save' }).click();

});


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

    await page.locator("div.orangehrm-employee-list").locator("//div[text()='0813']").click()
    await page.locator("div.orangehrm-action-header button").click();
    
    //upload the file1
    let filePromise = page.waitForEvent("filechooser");
    await page.locator("div.oxd-file-div--active i").click();
    let newFilePage = await filePromise;
    await newFilePage.setFiles("files/Upload.txt")
    
    await page.locator("//div[@class='oxd-form-actions']/following::button[@type='submit']").click()
    expect(page.getByText("Successful")).toBeVisible();
   await page.waitForTimeout(2000);
    await expect(page.locator("//div[@class='orangehrm-container']//div[text()='Upload.txt']")).toBeVisible();
    
   // await page.waitForTimeout(3000);
    await page.locator("div.orangehrm-action-header button").click();
   
  //upload the file2
      let filePromise2 = page.waitForEvent("filechooser");
    await page.locator("div.oxd-file-div--active i").click();
    let newFilePage2 = await filePromise2;
    await newFilePage2.setFiles("files/Download.txt")

    await page.locator("//div[@class='oxd-form-actions']/following::button[@type='submit']").click()
    
    expect(page.getByText("Successful")).toBeVisible();
   // await page.waitForTimeout(2000);
    //expect(page.locator("//div[@class='orangehrm-container']//div[text()='Download.txt']")).toBeVisible();

 /*    let [newPromotFileChooser] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.locator("div.oxd-file-div--active i").click()
    ]);
    await newPromotFileChooser.setFiles("files/Upload.txt")
    await page.locator("//div[@class='oxd-form-actions']/following::button[@type='submit']").click()

      let [newPromotFileChooser1] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.locator("div.oxd-file-div--active i").click()
    ]);
    await newPromotFileChooser1.setFiles("files/Download.txt") 
    
    await page.locator("//div[@class='oxd-form-actions']/following::button[@type='submit']").click()*/

    //download the file
  /*  await page.once('download', async (download)=>{
        download.saveAs("download/Download.txt")
       // await page.waitForTimeout(3000);
        console.log("File downloaded Path ::"+await download.path());
    });
        
    await page.locator("//div[@class='orangehrm-container']//div[text()='Download.txt']/following::i[contains(@class,'bi-download')]").click();
 */

    const [download] = await Promise.all([
     page.waitForEvent('download'),
     page.locator("//div[@class='orangehrm-container']//div[text()='Download.txt']/following::i[contains(@class,'bi-download')][1]").click(),
]);

await download.saveAs('download/' +download.suggestedFilename());
//console.log("File downloaded path :: " +  download.url());

    //delete the file    
     await page.locator("//div[@class='orangehrm-container']//div[text()='Download.txt']/following::i[@class='oxd-icon bi-trash']").click();
    await page.locator("//div[@role='document']//i").click(); 
    
    await page.waitForTimeout(2000);
    expect(page.getByText("Successful")).toBeVisible();
   // expect(page.locator("//div[@class='orangehrm-container']//div[text()='Download.txt']")).not.toBeVisible();
    
})

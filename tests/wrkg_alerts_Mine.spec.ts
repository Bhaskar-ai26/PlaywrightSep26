import {test, expect} from '@playwright/test';

test('working with alerts', async ({ page }) => {

 await page.goto("https://www.apsrtconline.in/");
    //search for bus tickets
    let fromSt = 'Hyderabad'
    let toSt = 'Nellore'

    //Not working
/*     let newPromise = page.context().waitForEvent('dialog');
        await page.locator("input#searchBtn").click();
    let newDailog = await newPromise;
    console.log(`Dialog Message +${newDailog.message()}`);
    await page.waitForTimeout(3000);
    newDailog.accept() */


page.once("dialog", async (dialog)=>{
    console.log(`Dialog Message:${dialog.message()}`);
    expect(dialog.message()).toContain("Please select start place")
    await page.waitForTimeout(2000)
    await dialog.dismiss()
});
    await page.locator("input#searchBtn").click();

    await page.locator("input#fromPlaceName").fill(fromSt);
    await page.locator(`//span[text() ='${fromSt.toUpperCase()}']`).click();


    page.once('dialog', async (dialog)=>{
        console.log(dialog.message())
        await dialog.accept(); });

page.once('dialog', async (dialog) =>{
    console.log(`Dialog Message: ${dialog.message()}`)
    expect(dialog.message()).toContain("Please select end place.")
    await dialog.accept();
});
        await page.locator("input#searchBtn").click();

    await page.locator("input#toPlaceName").fill(toSt);
    await page.locator(`//span[text() ='${toSt.toUpperCase()}']`).click();

    await page.locator("input#txtJourneyDate").click();
    await page.locator("//span[text()='October']").click();
    await page.locator("//div[contains(@class,'ui-datepicker-group-first')]//a[text()='30']").click()
  
    await page.locator("input#searchBtn").click();

});
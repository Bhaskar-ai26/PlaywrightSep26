import { test, expect } from '@playwright/test';
test('APSRTC flow test', async ({ page }) => {

    let fromSource = "hyderabad";
    let toDestination = "vijayawada"
    await page.goto("https://www.apsrtconline.in/");
    await page.locator("//input[@id='fromPlaceName']").fill(fromSource);
    await page.locator(`//span[text()='${fromSource.toUpperCase()}']`).click();
     //await page.locator(`//span[text()='${fromPlace.toUpperCase()}']`).click();
    await page.locator("//input[@id='toPlaceName']").fill(toDestination);
    await page.locator(`//span[text()='${toDestination.toUpperCase()}']`).click();
    
    await page.locator("//input[@id='txtJourneyDate']").click();
    await page.locator("//span[text()='October']/ancestor::div[contains(@class, 'group-first')]//a[text()=30]").click();
    
    
    await page.locator("//input[@id='searchBtn']").click();

    await page.locator("//span[text()='Bus Type']").click();
    await page.locator("//input[@name='A/C CLASS']").click();

    let totalACCnt = await page.locator("span[id='fwTotalServicesId']").textContent();
    console.log("Total::"+totalACCnt)

    let acServices = await page.locator("div .srvceNO:visible").all();
    console.log("AC Services::"+acServices.length)
    for(let index of acServices){
        let srvNo= await index.textContent();
       console.log(srvNo?.trim())
    }
   
await page.close()

});
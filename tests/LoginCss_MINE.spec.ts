import { test, expect, Page } from '@playwright/test';

test("Login test", async ({ page }) => { 
    let fromLocation ="hyderabad"
    let toLocation = "vijayawada"
    await page.goto("https://www.apsrtconline.in/oprs-web/guest/home.do?h=1");
    await page.locator("//input[@name='source']").fill(fromLocation);
    await page.locator(`//span[text()='${fromLocation.toUpperCase()}']`).click();
    await page.locator("//input[@name='destination']").fill(toLocation);
    await page.locator(`//span[text()='${toLocation.toUpperCase()}']`).click()

    await page.locator("#txtJourneyDate").click();
    await page.locator("//span[text()='October']/ancestor::div[contains(@class, 'group-first')]//a[text()='30']").click();
    await page.locator("input[id='searchBtn']").click();

    //let services = 
    //
    await page.locator("span:has-text('Bus Type')").click()
    await page.locator("//input[@name='A/C CLASS']").check();

    let acService = await page.locator("span[id='fwTotalServicesId']").textContent();
    console.log(acService)
    let allServices = await page.locator("div.srvceNO:visible").all();
    console.log(allServices.length)
    for(let ser of allServices){
        let srNo = await ser.textContent();
        console.log(srNo?.trim())
    }

});


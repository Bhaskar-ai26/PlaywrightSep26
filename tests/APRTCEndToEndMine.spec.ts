import { test, expect } from '@playwright/test';

test('APRTC End to End Test', async ({ page }) => {
    let pageURL = "https://www.apsrtconline.in/oprs-web";
    await page.goto(pageURL);

    let fromSrc= "Hyderabad";
    let toDest = "vijayawada";

    await page.locator("//input[@id='fromPlaceName']").fill(fromSrc);
    await page.locator(`//span[text()='${fromSrc.toUpperCase()}']`).click()
    await page.locator("//input[@id='toPlaceName']").fill(toDest);
    await page.locator(`//span[text()='${toDest.toUpperCase()}']`).click()

    await page.locator("//input[@id='txtJourneyDate']").click();
    await page.locator("//div[contains(@class,'ui-datepicker-group-first')]//span[text()='October']/following::a[text()=30][1]").click();

    let JDate = await page.locator("//div[contains(@class,'ui-datepicker-group-first')]//span[text()='October']/following::a[text()=30][1]").textContent();
    console.log("JDate::" + JDate);
    await page.locator("//input[@id='searchBtn']").click();

      //wait for the search results to be visible
    //await page.waitForTimeout(2000); // Wait for 2 seconds to ensure all locators are visible
     await page.waitForSelector("div.srvceNO:visible");

    let srvList = await page.locator("span[id='fwTotalServicesId']").textContent();
    console.log(`Total Services: ${srvList}`);

  let allLocators = await page.locator("div.srvceNO:visible").all();
    console.log(`Total Locators: ${allLocators.length}`);
   

  /*   for(let locator of allLocators){
        let srv = await locator.textContent();
        console.log(srv?.trim())
    } */

     let servNo= "3658"
    let boardingPt = 'KPHB CITY BUS STOP-METRO PILLER NO 742-744 - 00:01';
    let droppingPt = 'VIJAYAWADA - 06:15';
    await page.locator(`//div[text()=${servNo}]/../../..//input[@id='SrvcSelectBtnForward11']`).click();

    //select 4th boarding point
    await page.locator("#ForwardBoardId").selectOption({index: 4})
    let boardingPointDtls = await page.locator(`#ForwardBoardId option:checked`).textContent();
    ///console.log(boardingPointDtls)
    let BoardPoint = boardingPointDtls?.split(" -")[0];
    let BoardPointTime = boardingPointDtls?.split(" -")[1]?.trim();
    console.log("BoardPoint::"+BoardPoint)
    console.log("BoardPointTime::"+BoardPointTime)
    
    
    await page.locator("#ForwardDroppingId").selectOption({index: 6});
    let dropPointDtls = await page.locator("#ForwardDroppingId option:checked").textContent();
    console.log(dropPointDtls)
    let dropPoint = dropPointDtls?.split("-")[0];
    let dropPointTime = dropPointDtls?.split("-")[1];
    console.log("dropPoint::"+dropPoint)
    console.log("dropPointTime::"+dropPointTime)



//This is also working
/*     await page.selectOption("//select[@id='ForwardDroppingId']",{index: 1});
    let droppingPtSelected = await page.locator("#ForwardDroppingId  option:checked").textContent();
    console.log("Dropping Point Selected: ", droppingPtSelected); */
   
    
    //Passenger details
    let pName= "Bhaskar";
    let pAge= "30";
    let pMobil = "9123456789";
    let pEmail = "test@gmail.com";

    await page.getByRole('button',{name: 'Show layout'}).click();
    //await page.locator("//div[@class='seats']//input[@id='level_Forward1']/following-sibling::li[@class='availSeatClassS'][1]").click();
    //await page.locator("//li[@class='availSeatClassS'][1]").click();
    await page.locator("li.availSeatClassS").first().click();
    
    await page.locator("//input[@id='mobileNo']").fill(pMobil)
    await page.locator("//input[@id='email']").fill(pEmail)
    await page.locator("//select[@id='genderCodeIdForward0']").click();
    //await page.selectOption("//select[@id='genderCodeIdForward0']","MALE");
    await page.locator("#genderCodeIdForward0").selectOption({index:1});
    let genderDt =(await page.locator("#genderCodeIdForward0 Option:checked").textContent())?.trim();
    console.log("genderDt:: "+genderDt);
    await page.locator("//input[@id='passengerNameForward0']").fill(pName);
    await page.locator("//input[@id='passengerAgeForward0']").fill(pAge);
    await page.locator("//select[@id='concessionIdsForward0']",).click();
    //await page.selectOption("//select[@id='concessionIdsForward0']","GENERAL PUBLIC");
    await page.locator("#concessionIdsForward0").selectOption({index:1});
    let concesstionType =(await page.locator("#concessionIdsForward0 Option:checked").textContent())?.trim();
    console.log("concesstionType::"+concesstionType)
    await page.locator("//div[@id='BookNowBtnDivID']/input[@title='Continue']").click();

    //verification
    await expect(page.getByRole('heading',{name: 'Onward Journey Ticket Details'})).toBeVisible();
    
    let srvDts = (await page.locator("//tbody//td[normalize-space()='Service Code/Name']/following-sibling::td[1]").textContent())?.trim()
    let srv = srvDts?.split("/")[0];
    expect(srv).toBe(servNo);
    expect((await page.locator("//tbody//td[normalize-space()='From']/following-sibling::td[1]").textContent())?.trim()).toBe(BoardPoint?.trim())
    expect((await page.locator("//tbody//td[normalize-space()='From']/following-sibling::td[3]").textContent())?.trim()).toBe(dropPoint?.trim())
    let PrintJDate = (await page.locator("//tbody//td[normalize-space()='Depart On']/following-sibling::td[1]").textContent())?.trim().split(" ")[0];
    let PrintJTime = (await page.locator("//tbody//td[normalize-space()='Depart On']/following-sibling::td[1]").textContent())?.trim().split(" ")[1];
    
    expect(JDate).toBe(PrintJDate?.split("-")[0]);
    expect(BoardPointTime).toBe(PrintJTime);

    expect((await page.locator("//tbody/tr[@class='paxHeadRowCS']/following-sibling::tr/td[1]").textContent())?.trim()).toBe(pName.toUpperCase());
    expect((await page.locator("//tbody/tr[@class='paxHeadRowCS']/following-sibling::tr/td[2]").textContent())?.trim()).toBe(pAge);
    expect((await page.locator("//tbody/tr[@class='paxHeadRowCS']/following-sibling::tr/td[4]").textContent())?.trim()).toBe(genderDt);
    expect((await page.locator("//tbody/tr[@class='paxHeadRowCS']/following-sibling::tr/td[7]").textContent())?.trim()).toBe(concesstionType);
   

});
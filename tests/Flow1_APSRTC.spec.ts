import {test ,expect} from '@playwright/test'

test('Flow1', async ({page})=>{

    await page.goto("https://www.apsrtconline.in/");
    //search for bus tickets
    let fromSt = 'Hyderabad'
    let toSt = 'Nellore'
    await page.locator("input#fromPlaceName").fill(fromSt);
    await page.locator(`//span[text() ='${fromSt.toUpperCase()}']`).click();
    await page.locator("input#toPlaceName").fill(toSt);
    await page.locator(`//span[text() ='${toSt.toUpperCase()}']`).click();
    await page.locator("input#txtJourneyDate").click();
    await page.locator("//span[text()='October']").click();
    let jMonth = await page.locator("//span[text()='October']").textContent();
    let jYear = await page.locator("//span[text()='October']/following-sibling::span").textContent();
    console.log("jMonth::"+jMonth)
    console.log("jYear::"+jYear)
    
    let jy= await page.getByText("October 2").textContent();
    console.log("jMonthYear::"+jy)
    await page.locator("//div[contains(@class,'ui-datepicker-group-first')]//a[text()='30']").click()
    let jDate = await page.locator("//div[contains(@class,'ui-datepicker-group-first')]//a[text()='30']").textContent()
    console.log("jDate::"+jDate)
    await page.locator("input#searchBtn").click();

    await page.waitForTimeout(2000);
    expect(page.getByRole("heading",{name: 'HYDERABAD → NELLORE'})).toBeVisible();

    //filter functions
    await page.locator("//span[text()='Bus Type']").click()
    await page.locator("input#Bustypes201").click()
    expect(page.locator("//p[@class='fl1']/following-sibling::span")).toBeVisible();

    let bannerSrv = await page.locator("span#fwTotalServicesId").textContent();
    console.log("bannerSrv::"+bannerSrv);
    let visibleSrv = await page.locator("div.srvceNO:visible").all()
        for(let myIdex of visibleSrv){
            let serv = await myIdex.textContent();
            console.log(serv?.trim())
        }


        //select service and fill book it
        let servSelect = '5054'
        await page.locator(`//div[contains(text(),'${servSelect}')]/../../..//input[@id='SrvcSelectBtnForward2']`).click();

        await page.locator("select#ForwardBoardId").selectOption({index:1});
        let brdPt = await page.locator("select#ForwardBoardId option:checked").textContent();
        console.log("brdPt::"+brdPt?.trim())
       
        await page.locator("select#ForwardDroppingId").selectOption({index:0});
        let drpPt = await page.locator("select#ForwardDroppingId option:checked").textContent();
        console.log("drpPt::"+drpPt?.trim())

        await page.locator("input#fwLtBtn").click();

        //select aeat and Enter customer details
        let pMobil = "9123456789"
        let pEmail = "test@gmail.com"
        let pName = "Bhasakr"
        let pAge= "30"
        await page.locator("li.availSeatClassS").first().click();
        await page.locator("//td[contains(text(),'Passenger Details')]/following::input[@id='mobileNo']").fill(pMobil)
        await page.locator("//td[contains(text(),'Passenger Details')]/following::input[@id='email']").fill(pEmail)
        await page.locator("//td[contains(text(),'Passenger Details')]/following::select[@id='genderCodeIdForward0']").selectOption({index:1})
        let gender = await page.locator("//td[contains(text(),'Passenger Details')]/following::select[@id='genderCodeIdForward0']").locator("option:checked").textContent();
        console.log("gender::"+gender?.trim());
        await page.locator("//td[contains(text(),'Passenger Details')]/following::input[@id='passengerNameForward0']").fill(pName)
        await page.locator("//td[contains(text(),'Passenger Details')]/following::input[@id='passengerAgeForward0']").fill(pAge)
        
       // console.log("gender::"+gender?.trim());
        await page.locator("//td[contains(text(),'Passenger Details')]/following::select[@id='concessionIdsForward0']").selectOption({index:1})
        let concession = await page.locator("//td[contains(text(),'Passenger Details')]/following::select[@id='concessionIdsForward0']").locator("option:checked").textContent();
        console.log("concession::"+concession?.trim());
        await page.locator("input#BookNowBtn:visible").click();
       
        

    });
    
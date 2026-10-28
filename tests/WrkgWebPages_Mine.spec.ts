import { test, expect } from '@playwright/test'
test('Web Pages', async ({page})=>{
 await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");

 let newPageEven = page.context().waitForEvent("page");
 await page.locator("//a[contains(text(),'Visit Vibe')]").click();

 let newPageContext = await newPageEven;

 let newPageEvent2 = page.context().waitForEvent("page");
await newPageContext.getByRole("link", {name:"Request a Trial"}).first().click();
let newPage2 = await newPageEvent2;

 /*    let [newPage1] = await Promise.all([
        page.context().waitForEvent("page"),
        await newPageContext.getByRole("link", {name:"Request a Trial"}).first().click()
    ])

    let newPage2 = await newPage1; */
});

test("ANother web page", async({page})=>{
    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");

    let newEvent = page.context().waitForEvent("page");
    await page.getByText("Visit VibeTestQ").click();

    let newpage = await newEvent;

    let anotherEvent = page.context().waitForEvent("page");
    await newpage.locator("//a[text()='Request a Trial ']").first().click();

    let myNewPage = await anotherEvent;
   await myNewPage.locator("input#name").fill("Bhaskar");
   await myNewPage.getByText("Add team size and").click();
   await myNewPage.locator("#teamSize").selectOption({index:3})
   let myIndex = await myNewPage.locator("#teamSize option:checked").textContent();
   await myNewPage.locator("#useCase").fill(myIndex ?? "");
 });
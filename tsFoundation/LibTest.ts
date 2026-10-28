import { chromium} from "playwright";

//F
(async function(){
    let  browser =await  chromium.launch({headless: false});
    let context = await browser.newContext();
    let page = await context.newPage();

   await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app");
    console.log(await page.title());

    await browser.close();
})();
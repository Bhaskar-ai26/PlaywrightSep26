import { chromium,webkit } from 'playwright'

/* 
async function simpletTest() {

    let browser = await chromium.launch({ headless: false })
    let context = await browser.newContext();
    let page = await context.newPage();


    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");
    console.log(await page.title())
    await browser.close();
}

simpletTest(); */

//IIFE: Immediately Invoked Function Expression
/* (async function () {

    let browser = await chromium.launch({ headless: false })
    let context = await browser.newContext();
    let page = await context.newPage();


    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");
    console.log(await page.title())
    await browser.close();
})(); */



/* async function TestWebkit() {

   let browser = await webkit.launch({headless: false});
   let context = await browser.newContext();
   let page = await context.newPage();
   await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login");
   console.log(await page.title())
    await browser.close();
}
TestWebkit() */

//Immediately Invoked Funcion Expression: IIFE

(async function () {
    let browser = await webkit.launch({headless: false});
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://www.google.com/");
    console.log(await page.title())
    //awit browser.close()
}

)();


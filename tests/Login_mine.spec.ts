import { test, expect, Page } from '@playwright/test';


test("Welcome",  async ({page}) =>{
    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/")
    await page.getByPlaceholder("Username").fill("");
    await page.getByPlaceholder("Username").fill("bhaskar");
   // await page.getByPlaceholder("Passsword").fill("");
    await page.getByPlaceholder("Password").fill("Vibetestq@123#");
    await page.getByRole("button").click();
  
});


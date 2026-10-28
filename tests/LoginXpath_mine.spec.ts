import {test, expect} from '@playwright/test'

test('Welcome', async ({page})=>{
    await page.goto("https://qtpsudhakar-vibetestq-hrm.up.railway.app/");
    await page.locator("//input[@placeholder='Username']").fill("bhaskar");
    await page.locator("//input[@placeholder='Password']").fill("Bhaskar@123#");
    await page.locator("//button[normalize-space()='Login']").click();
    await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible();
    await page.locator("//a/following::span[text()='PIM']").click();
    await page.locator("//div[text()='512400821']/../..//input").check();
   // await page.locator("//div[text()='512400821']/../..//i[contains(@class,'pencil')]").click();
    //await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible();
    await page.pause();
    await page.close();
    
    });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qtpsudhakar-vibetestq-hrm.up.railway.app/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('bhaskar');
  //await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Bhaskar@123#');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('bhaskar');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('.oxd-icon.bi-check').first().click();
  await page.getByRole('row', { name: ' Username  User Role ' }).getByLabel('').check();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('listitem').filter({ hasText: /^Job Titles$/ }).click();
/*   await page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click();
  await page.getByRole('row', { name: ' Test  ' }).getByLabel('').check();
  await page.getByRole('button').nth(5).click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click(); */
  await page.getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.close()
});
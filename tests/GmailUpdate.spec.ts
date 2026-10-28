import { test, expect } from '@playwright/test';

test('Gmail update test', async ({ page }) => {
  const email = process.env.GMAIL_EMAIL;
  const password = process.env.GMAIL_PASSWORD;
  
  if (!email || !password) {
    throw new Error('GMAIL_EMAIL and GMAIL_PASSWORD environment variables must be set');
  }

  await page.goto('https://mail.google.com/');
  await page.waitForLoadState('domcontentloaded');
  
  await page.getByRole('textbox', { name: 'Email or phone' }).fill(email);
  await page.getByRole('button', { name: 'Next' }).click();
  
  await page.waitForLoadState('domcontentloaded');
  
  await page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
  await page.getByRole('button', { name: 'Next' }).click();
  
  await page.waitForLoadState('domcontentloaded');
  await expect(page).toHaveURL(/inbox/);
});
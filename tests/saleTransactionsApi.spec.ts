import { test, expect } from '@playwright/test';

// Postman {{variables}} mapped to environment variables.
const testMachine = process.env.TEST_MACHINE ?? 'localhost';
const store = process.env.STORE ?? '1';
const transactionId = process.env.TRANSACTION_ID ?? '1';
const barcode = process.env.BARCODE ?? '1';

test('GET sale transaction', async ({ request }) => {
  const url = `http://${testMachine}/RetailGateway/api/selling/v1/saletransactions/${store}/${transactionId}`;
  const response = await request.get(url);

  console.log(response.status(), await response.text());
  expect(response.ok()).toBeTruthy();
});

test('GET electronic journal receipt by barcode', async ({ request }) => {
  const url = `http://${testMachine}/RetailGateway/api/electronicjournal/v1/receipts/wow/${store}/${barcode}`;
  const response = await request.get(url);

  console.log(response.status(), await response.text());
  expect(response.ok()).toBeTruthy();
});

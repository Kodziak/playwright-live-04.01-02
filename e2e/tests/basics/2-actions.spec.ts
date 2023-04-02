import { test } from '@playwright/test';

test.beforeEach(async ({page}) => {
  await page.goto('/');
});

test.skip('TEST - type input', async ({ page }) => {
  await page.getByTestId('username-input').type('user');
});

test.skip('TEST - click', async ({page}) => {
  await page.getByTestId('login-button').click();
});

test.skip('TEST - get input value', async ({page}) => {
  await page.getByTestId('username-input').type('user');

  const inputValue = await page.getByTestId('username-input').inputValue();
  console.log({inputValue});
});

test('TEST - locator', async ({page}) => {
  // GET BY ROLE
  await page.getByRole('heading', { name: 'Welcome' }).highlight();

  // GET BY TEXT
  await page.getByText('LOGIN').click();

  // GET BY TEXT USING LOCATOR
  await page.locator('text=LOGIN').click();

  // GET BY CSS CLASS
  await page.locator('.login-button').click();

  // GET BY ID
  await page.locator('#inputgroup2').type('password');
});

import { test, expect } from '@playwright/test';
import { Users } from '../../config';
import { EventsPage, LoginPage } from '../../pages';

let loginPage: LoginPage;

test.beforeEach(async ({page}) => {
  loginPage = new LoginPage(page);
});

test.skip('A | User should be able to log in', async({page}) => {
  await page.goto('/');

  await page.getByTestId('username-input').type('user');
  await page.getByTestId('password-input').type('password');
  await page.getByTestId('login-button').click();
  
  await expect(page.getByTestId('username-info')).toHaveText('Event Manager');
});

test.skip('B | User should be able to log in', async ({page}) => {
  await loginPage.login();

  await expect(page.getByTestId('username-info')).toHaveText('Event Manager');
});

test.skip('C | Admin should be able to log in', async ({page}) => {
  const user = await loginPage.login(Users.Admin);

  await expect(page.getByTestId('username-info')).toHaveText(`${user.firstname} ${user.lastname}`);
});

// ----------------------------------------------
const users = [Users.Admin, Users.EventManager];

for (const user of users) {
  test(`${user} should be able to log in`, async ({page}) => {
    const eventsPage = new EventsPage(page);
    await page.route('**/*.{png,jpg,jpeg}', route => route.abort());
    
    const u = await loginPage.login(user);

    await expect(eventsPage.usernameInfo).toHaveText(`${u.firstname} ${u.lastname}`);
  });

  test(`${user} should be able to log in using API`, async ({page}) => {
    const user = await loginPage.loginByApi();

    console.log(user);
  })
}

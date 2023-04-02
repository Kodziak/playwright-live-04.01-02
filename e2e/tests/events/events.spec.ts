import {test, expect} from '@playwright/test';
import {LoginPage, EventsPage} from '../../pages';

let eventsPage: EventsPage;

test.beforeEach(async ({page}) => {
  const loginPage = new LoginPage(page);
  eventsPage = new EventsPage(page);

  await loginPage.login();
})

test('User should be able to search through events', async ({page}) => {
  await eventsPage.searchEvents('Salt Wave');

  const events = await eventsPage.getEvents();
  // const events = await eventsPage.getEventsByApi();

  expect(events).toContainEqual({
    tag: 'festival',
    name: 'Salt Wave 2022',
    date: '5 May 23',
    price: '$200'
  })
})

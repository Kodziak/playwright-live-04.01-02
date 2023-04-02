import { Locator, Page, APIRequestContext } from "@playwright/test";

interface Event {
  tag: string;
  name: string;
  date: string;
  price: string;
}

export class EventsPage {
  page: Page;

  usernameInfo: Locator;
  eventsSearchInput: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInfo = this.page.getByTestId('username-info');
    this.eventsSearchInput = this.page.getByTestId('events-search-input');
  }

  async searchEvents(event: string) {
    await this.eventsSearchInput.type(event);
  }

  async getEventsByApi() {
    const response = await this.page.request.get('/api/events');
    const json = await response.json();

    return json;
  }

  async getEvents(): Promise<Event[]> {
    const events: Event[] = [];
    await this.page.locator('.p-dataview-content .card').first().waitFor();

    const cards = await this.page.locator('.p-dataview-content .card').all();

    for (const card of cards) {
      const tag = await card.locator('i ~ span').textContent();
      const name = await card.locator('.text-xl.font-bold').textContent();
      const date = await card.locator('.pi-calendar ~ small').textContent();
      const price = await card.locator('.pi-money-bill ~ small').textContent();

      events.push({
        tag: tag ? tag : '', 
        name: name ? name : '', 
        date: date ? date : '', 
        price: price ? price : ''
      })
    };

    return events;
  }
}

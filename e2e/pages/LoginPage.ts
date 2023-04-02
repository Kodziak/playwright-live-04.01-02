import { Locator, Page } from "@playwright/test";
import { getUser, Users, User } from '../config';

export class LoginPage {
  page: Page;

  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = this.page.getByTestId('username-input');
    this.passwordInput = this.page.getByTestId('password-input');
    this.loginButton = this.page.getByTestId('login-button');
  }

  private async _goto() {
    await this.page.goto('/login', {
      waitUntil: 'networkidle'
    });
  }

  async loginByApi() {
    const response = await this.page.request.post('/api/auth/login', {
      data: {
        login: 'admin',
        password: 'admin'
      }
    });

    return response.json();
  }

  async login(user: Users = Users.EventManager): Promise<User> {
    const dbUser = getUser(user);

    await this._goto();

    await this.usernameInput.type(dbUser.username);
    await this.passwordInput.type(dbUser.password);

    await Promise.all([
      this.page.waitForURL('**/', {
        waitUntil: 'networkidle'
      }),
      this.loginButton.click()
    ])

    return dbUser;
  }
}

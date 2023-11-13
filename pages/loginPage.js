const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.title = page.locator("//div[@class='login_logo']");
    this.userInput = page.locator("//input[@id='user-name']");
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('div.error-message-container');
  }

  async login(username, password) {
    await this.userInput().fill(username);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }

};
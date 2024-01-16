exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = page.locator('.header_secondary_container > span.title');
    this.burgerButton = page.locator('#react-burger-menu-btn');
    this.logoutButton = page.locator('#logout_sidebar_link');
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async logout() {
    await this.burgerButton.click();
    await this.logoutButton.click();
  }
};
exports.CartPage = class CartPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.getStartedLink = page.locator('a', { hasText: 'Get started' });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
    this.tocList = page.locator('article div.markdown ul > li > a');
  }

  async pageObjectModel() {
    await this.getStartedLink.click();
    await this.pomLink.click();
  }
};
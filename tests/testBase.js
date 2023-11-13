const config = require('../playwright.config');
//const { chromium } = require('@playwright/test');
require('dotenv').config();

module.exports = async () => {
  //const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(config.use.baseURL);
  //await browser.close();  
}
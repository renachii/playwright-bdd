const { Given, When, Then } = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const config = require('../../../playwright.config');
const creds = JSON.parse(JSON.stringify(require('../../../fixtures/credentials.json')));
const { LoginPage } = require('../../../pages/loginPage');
const { HomePage } = require('../../../pages/homePage');
const { Common } = require('../../../utility/common')

let randomStr;    
let loginPage;
let homePage;
let common;

Given('the portal login page is accessed', async function () {
   // navigate to the app 
   homePage = new HomePage(this.page);
   await homePage.goto(config.use.baseURL);
});
 
Given('username {string} is entered', async function (user) {
   loginPage = new LoginPage(this.page);
   await loginPage.userInput.fill(user);
});
 
Given('password {string} is entered', async function (pass) {
   loginPage = new LoginPage(this.page);
   await loginPage.passwordInput.fill(pass);
});

Given('username is entered', async function () {
   loginPage = new LoginPage(this.page);
   common = new Common();
   randomStr = common.generateRandomString(10);
   await loginPage.userInput.fill(randomStr);
});
 
Given('password is entered', async function () {
   loginPage = new LoginPage(this.page);
   common = new Common();
   randomStr = common.generateRandomString(10);
   await loginPage.passwordInput.fill(randomStr);
});

Given('the admin credentials are entered', async function () {
   loginPage = new LoginPage(this.page);
   await loginPage.userInput.fill(creds.Username);
   await loginPage.passwordInput.fill(creds.Password);
});

When('the credentials are submitted', async function () {
   loginPage = new LoginPage(this.page);
   await loginPage.loginButton.click();
});

Then('the homepage is accessed', function (dataTable) {
   homePage = new HomePage(this.page);
   homePage.burgerButton.click();
   expect(homePage.logoutButton).toBeVisible();

   dataTable.hashes().forEach((data) => {
      expect(homePage.title.innerText).toHaveText(data.Title);
   })
});

Then('error message {string} is displayed', async function (error) {
   loginPage = new LoginPage(this.page);
   await expect(loginPage.errorMessage.innerText).toHaveText(error);
});
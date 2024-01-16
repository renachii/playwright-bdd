const {Given, When, Then} = require('@cucumber/cucumber')
const { expect } = require("@playwright/test");

const { LoginPage } = require('../../../pages/loginPage');
const { HomePage } = require('../../../pages/homePage');

let loginPage;
let homePage;

Given('the portal home page is accessed', async function () {
    loginPage = new LoginPage(this.page);
    homePage = new HomePage(this.page);
    loginPage.login(testdata.Username, testdata.Password);
    await expect(homePage.title.innerText).toHaveText('Products');
});

When('the user logout', async function () {    
    homePage = new HomePage(this.page);
    homePage.logout();
});
 
Then('the login page is accessed', async function () {
    loginPage = new LoginPage(this.page);
    await expect(loginPage.loginButton).toBeVisible();
});
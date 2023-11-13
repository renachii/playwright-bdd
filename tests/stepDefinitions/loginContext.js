const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

Given('the portal login page is accessed', async function () {
    // navigate to the app
    await page.goto(config.projects[0].use.baseURL)

 })
 
 When('the user adds {string} to the todo list using the webUI', async function (item) {
    // fill the item that was input from the feature file , to the inputText field in the UI
    await page.fill(todoInput , item)
    // click the button
    await page.click(todoButton)
 })
 
 Then('card {string} should be displayed on the webUI', async function (item) {
    // get text of the item that is visible in the UI
    const text = await page.innerText(todoItem)
    // assert that its name is similar to what we provided
    expect(text).toBe(item)
 })
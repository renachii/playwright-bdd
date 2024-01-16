# playwright-bdd
playwright cucumber bdd

- Playwright 1.39.0
- NodeJs 20.9.0

## Pre-requisites
Install:
- NodeJS
- Visual Studio Code
  
## Setup
1. Create folder and open in Visual Studio code
2. Open terminal
3. Install Playwright:
   - ```npm init playwright@latest```
     - package.json - node project management file
     - playwright.config.js - Configuration file
     - tests folder -  basic example test
     - tests-examples folder - detailed example tests
     - .gitignore - to be used during git commit and push
     - playwright.yml - to be used during ci cd pipeline (github workflows)
     - this command also installs all browsers
   - ```npm install playwright``` 
     - add "playwright" in dependencies in package.json
   - ```npm i -D playwright```
     - add "playwright" in devDependencies in package.json
4. Install Cucumber:
   - ```npm install @cucumber/cucumber```    
5. Install Cucumber html reporter:
   - ```npm install cucumber-html-reporter --save-dev```               

### Using VS Code extension 
- Step 1 - Create a new folder and open in VS Code
- Step 2 - Goto Extensions section and install Playwright extension from Microsoft
- Step 3 - Goto View - Command Palette and type playwright - select install playwright
- Step 4 - Select the browsers and click ok
- Step 5 - It will install the libraries and create the project folders

## Test Execution
For commandline execution:
- ```npm test```
or
- ```npm run test```

## Reports
To open last HTML report run:
- ```npx playwright show-report```

# Record Test
Codegen (or Test Generator) - tool in playwright to record test and generate test scripts
It opens two windows
1. Browser window that interacts with the website
2. Playwright inspector to record tests
   
- Auto generate tests with Codegen.
  - ```npx playwright codegen```

# Test Environment
- https://www.saucedemo.com/

# References
- https://playwright.dev/docs/best-practices
- https://playwright.dev/docs/test-cli
- https://playwright.dev/docs/actionability
- https://playwright.dev/docs/test-assertions
- https://playwright.dev/docs/accessibility-testing
- https://playwright.dev/docs/locators
- https://anandhik.medium.com/bdd-pom-in-playwright-using-typescript-fceff9211800
- https://dev.to/jankaritech/behavior-driven-development-bdd-using-playwright-n1o
- https://dev.to/playwright/a-better-global-setup-in-playwright-reusing-login-with-project-dependencies-14
- https://blog.karmacomputing.co.uk/playwright-tutorial-example-configuration/



# cypress-bdd
playwright cucumber bdd

- Playwright 1.39.0
- NodeJs 20.9.0

## Pre-requisites
Install:
- NodeJS
- Visual Studio Code
  
## Setup
1. Create folder and open in Visual Studio code
2. Open terminal and run command "npm init" to generate package.json file
3. Install Playwright:
   - ```npm init playwright@latest```
     - package.json - node project management file
     - playwright.config.js - Configuration file
     - tests folder -  basic example test
     - tests-examples folder - detailed example tests
     - .gitignore - to be used during git commit and push
     - playwright.yml - to be used during ci cd pipeline (github workflows)
   - ```npm i -D playwright```
     - add "playwright" in devDependencies in package.json
4. Install Cucumber:
   - ```npm i -D @cucumber/cucumber@7.3.1 @cucumber/pretty-formatter```                      

### Using VS Code extension 
- Step 1 - Create a new folder and open in VS Code
- Step 2 - Goto Extensions section and install Playwright extension from Microsoft
- Step 3 - Goto View - Command Palette and type playwright - select install playwright
- Step 4 - Select the browsers and click ok
- Step 5 - It will install the libraries and create the project folders

## Test Execution
- For commandline execution:
- Runs the end-to-end tests. (runs all tests on all browsers in headless mode)
  - ```npx playwright test```
  
- Runs with 3 workers in parallel
  - ```npx playwright test --workers 3```
    
- Runs a specific test file/s
  - ```npx playwright test onespec.js```
  - ```npx playwright test onespec.js twospec.js```
    
- Runs test with test description
  - ```npx playwright test -g "<test description>"```
    
- Starts the interactive UI mode.
  - ```npx playwright test --ui```
  
- Runs the tests only on Desktop Chrome.
  - ```npx playwright test --project=chromium```

- Runs the tests in a specific file.
  - ```npx playwright test example```

- Runs the tests in debug mode.
  - ```npx playwright test --debug```

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
- https://playwright.dev/docs/actionability
- https://playwright.dev/docs/test-assertions
- https://playwright.dev/docs/accessibility-testing
- https://playwright.dev/docs/locators


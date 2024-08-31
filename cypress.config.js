const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zyj8fh',
  defaultCommandTimeout: 60000, // Increase timeout
    responseTimeout: 60000,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
    failOnStatusCode: false,
    redirectionLimit: 100,
    "chromeWebSecurity": false,
   "experimentalSessionAndrigin": true,
  e2e: {
    baseUrl:"https://www.amazon.com",
    defaultCommandTimeout: 30000,    

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    env: {
      CYPRESS_RECORD_KEY: 'b7071857-a207-4f33-b334-aa9e819fed0b',
    }
  },
});

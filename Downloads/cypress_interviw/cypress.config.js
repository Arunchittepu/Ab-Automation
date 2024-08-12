const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    watchForFileChanges: true,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-watch-and-reload/plugins')(on, config)
      return config
    },
  }
});

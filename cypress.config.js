const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: true, // This option is enabled by default in Cypress 10 and later, but can be explicitly set
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

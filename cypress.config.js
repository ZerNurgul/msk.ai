const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    baseURL: 'https://dashboard-staging.myrecovery.ai/',
    validEmail:'nurgul.zerenturk.qa@test.mr',
    validPassword:'qaengineer',
    invalidPassword:'',
  }
});

import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  fixturesFolder: false,
  viewportWidth: 1920,
  viewportHeight: 1200,
  watchForFileChanges: false,
  video: false,
  includeShadowDom: true,
  e2e: {
    defaultCommandTimeout: 15000, // Timeout for default actions and assertions
    pageLoadTimeout: 120000, // Timeout for cy.visit, cy.go, cy.back
    requestTimeout: 5000,
    responseTimeout: 30000,
    taskTimeout: 60000,

    retries: {
      runMode: 1,
      openMode: 0
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: '*.studio.*',
    specPattern: 'cypress/integration/**/*.spec.{js,jsx,ts,tsx}'
  }
});

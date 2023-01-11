import { ENVS, evalUrl } from './cypress/utils/env.utils';
import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: 'index',
    reportDir: 'cypress/results'
  },
  chromeWebSecurity: false,
  fixturesFolder: false,
  viewportWidth: 1920,
  viewportHeight: 1200,
  watchForFileChanges: false,
  video: false,
  includeShadowDom: true,
  e2e: {
    // baseUrl is staging, but it will be reset down below
    baseUrl: ENVS.stage,

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
      // setup and validate `baseUrl` in runtime
      config.baseUrl = evalUrl(config);
      console.log(`\nBaseUrl is: ${config.baseUrl}\n`);

      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.isHeadless === true) {
          launchOptions.args.push('--window-size=1920,1200');
          return launchOptions;
        }
      });

      return config;
    },
    excludeSpecPattern: '*.studio.*',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
  }
});

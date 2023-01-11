import './commands';
import 'cypress-file-upload';
import 'cypress-localstorage-commands';
import 'cypress-xpath';
import 'cypress-iframe';
import 'cypress-real-events/support';
import { evalUrl } from '../utils/env.utils';

Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

beforeEach(() => {
  Cypress.config().baseUrl = evalUrl(Cypress.env(), true);
});

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Description of step which will describe code below.
       * @param message
       */
      stepInfo(message: string): void;
    }
  }
}

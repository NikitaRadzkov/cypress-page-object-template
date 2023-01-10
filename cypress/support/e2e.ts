import './commands';
import 'cypress-file-upload';
import 'cypress-localstorage-commands';
import 'cypress-xpath';
import 'cypress-iframe';
import 'cypress-real-events/support';

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

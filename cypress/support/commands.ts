// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// Adds a command to add steps for tests.
// If there is an error in the test, writes the last passed step to the array
//
Cypress.Commands.add('stepInfo', (message: string) => {
  let arr = Cypress.env('stepInfo') || [];
  // Add only last step
  if (arr.length >= 1) {
    arr = [];
  }
  arr.push(message);
  Cypress.log({
    displayName: 'StepInfo',
    message: `${message}`,
    consoleProps: () => {
      return {
        Step: `${message}`
      };
    }
  });
  Cypress.env('stepInfo', arr);
});

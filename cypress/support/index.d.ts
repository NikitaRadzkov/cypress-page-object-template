/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Login to application with api
     * @example
     * cy.loginByApi(url)
     */
    loginByApi(url: string): Chainable<unknown>;

    /**
     * login to application with UI
     * @example
     * cy.loginByUI(url)
     */
    loginByUI(url: string): Chainable<unknown>;

    /**
     * Login to application by method, passed to loginMethod environment variable
     * @example
     * cy.login()
     */
    login(): Chainable<unknown>;
  }
}

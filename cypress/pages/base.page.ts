/// <reference types="cypress-xpath" />

export default class BasePage {
  get logoIcon() {
    return cy.get('[title="Automation Practice Site"]');
  }

  get shopSection() {
    return cy.xpath("//*[@id='main-nav']//*[contains(text(), 'Shop')]");
  }

  get myAccountSection() {
    return cy.xpath("//*[@id='main-nav']//*[contains(text(), 'My Account')]");
  }

  get testCasesSection() {
    return cy.xpath("//*[@id='main-nav']//*[contains(text(), 'Test Cases')]");
  }
}

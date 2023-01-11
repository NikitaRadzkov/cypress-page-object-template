import BasePage from './base.page';

class LoginPage extends BasePage {
  get usernameInput() {
    return cy.get('#username');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.xpath("//*[@name='login']");
  }
}

export default new LoginPage();

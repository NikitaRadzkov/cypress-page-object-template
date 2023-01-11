import loginPage from '../../pages/login.page';
import BaseUIActions from '../base/base.ui.actions';

class LoginAction extends BaseUIActions<typeof loginPage> {
  clickLoginButton(): this {
    this.page.loginButton.click();
    return this;
  }

  enterUsername(username: string): this {
    this.page.usernameInput.type(username).should('have.value', username);
    return this;
  }

  enterPassword(password: string): this {
    this.page.passwordInput.type(password).should('have.value', password);
    return this;
  }

  login(username: string = Cypress.env('USERNAME'), password = Cypress.env('PASSWORD')): this {
    cy.visit('/');
    this.navigateToLoginPage().enterUsername(username).enterPassword(password).clickLoginButton();
    cy.contains(username.split('@')[0]).should('be.visible');
    return this;
  }
}

export default new LoginAction(loginPage);

import uiEndpoints from '../../enums/ui-endpoints.enum';
import BasePage from '../../pages/base.page';
import TemplateTypes from '../../types/index';

export default class BaseUIActions<T extends BasePage> {
  page: T;

  constructor(page: T) {
    this.page = page;
  }

  waitForUrl(route: TemplateTypes.UIEndpoints) {
    cy.url().should('include', route);
    return this;
  }

  navigateToLoginPage(): this {
    this.page.myAccountSection.click();
    this.waitForUrl(uiEndpoints.myAccount);
    return this;
  }

  navigateToShopPage(): this {
    this.page.shopSection.click();
    this.waitForUrl(uiEndpoints.shop);
    return this;
  }

  navigateToTestCasesPage(): this {
    this.page.testCasesSection.click();
    this.waitForUrl(uiEndpoints.testCases);
    return this;
  }
}

import loginActions from '../../actions/ui/login.actions';
import shopActions from '../../actions/ui/shop.actions';

describe('Verify filter by price functionality', () => {
  beforeEach(() => {
    cy.stepInfo('Precondition: Login to account and navigate to shop page');
    loginActions.login().navigateToShopPage();
  });

  it('Should filter by price', () => {
    cy.stepInfo('1. Change filter');
    shopActions.changeFilter().clickFilterButton();

    cy.stepInfo('2. Verify filtered prices');
    shopActions.verifyFilterPrices();
  });
});

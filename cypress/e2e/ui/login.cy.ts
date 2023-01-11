import loginActions from '../../actions/ui/login.actions';

describe('Login to App', () => {
  it('Verify login by UI', () => {
    cy.stepInfo('Login by UI and verify Dashboard opened');
    loginActions.login();
  });
});

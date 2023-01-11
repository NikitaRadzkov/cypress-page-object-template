import BasePage from './base.page';

class ShopPage extends BasePage {
  filterButton(index = 0) {
    return cy.get('.price_slider_amount > button').eq(index);
  }

  get priceSlider() {
    return cy.get('.price_slider > span').last();
  }

  get allPrices() {
    return cy.get('.price > span');
  }

  get allSalePrices() {
    return cy.get('ins > .woocommerce-Price-amount');
  }
}

export default new ShopPage();

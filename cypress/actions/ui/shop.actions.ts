import shopPage from '../../pages/shop.page';
import BaseUIActions from '../base/base.ui.actions';

class ShopActions extends BaseUIActions<typeof shopPage> {
  clickFilterButton(index = 0): this {
    this.page.filterButton(index).click();
    return this;
  }

  changeFilter(): this {
    this.page.priceSlider.click({ multiple: true, force: true });
    for (let i = 0; i < 50; i++) {
      this.page.priceSlider.type('{leftarrow}');
    }
    return this;
  }

  verifyFilterPrices(): this {
    this.page.allPrices.then(el => {
      const pricesWithoutSale = Array.from(el);
      this.page.allSalePrices.then(el => {
        const pricesWithSale = Array.from(el);
        const allPrices = pricesWithoutSale
          .concat(pricesWithSale)
          .map(el => el.textContent)
          .map(elText => elText.replace(/[^0-9.]/g, ''))
          .map(elPrice => Number(elPrice));

        allPrices.forEach(item => {
          if (item > 450) {
            throw new Error('Filter not working');
          }
        });
      });
    });
    return this;
  }
}

export default new ShopActions(shopPage);

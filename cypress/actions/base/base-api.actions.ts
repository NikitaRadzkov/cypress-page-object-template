import Methods from '../../enums/methods.enum';
import TemplateTypes from '../../types/index';

const baseUrl = 'https://jsonplaceholder.typicode.com';

abstract class BaseApiActions {
  protected urlCreator(endpoint: TemplateTypes.ApiEndpoints, index: string | number): string {
    return `${baseUrl}${endpoint}/${index}`;
  }

  protected getAllElements(endpoint: TemplateTypes.ApiEndpoints, countElements: number, status = 200): this {
    cy.request(this.urlCreator(endpoint, '')).then(res => {
      expect(res.status).to.eq(status);
      expect(res.body.length).to.eq(countElements);
    });
    return this;
  }

  protected getOneElementByIndex(endpoint: TemplateTypes.ApiEndpoints, index: string | number, status = 200): this {
    cy.request(this.urlCreator(endpoint, index)).then(res => {
      expect(res.status).to.eq(status);
    });
    return this;
  }

  protected deleteElementByIndex(endpoint: TemplateTypes.ApiEndpoints, index: string | number, status = 200): this {
    cy.request(Methods.DELETE, this.urlCreator(endpoint, index)).then(res => {
      expect(res.status).to.eq(status);
    });
    return this;
  }
}

export default BaseApiActions;

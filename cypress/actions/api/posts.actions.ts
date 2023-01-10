import apiEndpoints from '../../enums/api-endpoints.enum';
import Methods from '../../enums/methods.enum';
import BaseApiActions from '../base/base-api.actions';

const endpoint = apiEndpoints.posts;

interface IBody {
  title: string;
  body: string;
  userId: number;
}

class PostsActions extends BaseApiActions {
  getAllPosts(countElements: number, status = 200): this {
    this.getAllElements(endpoint, countElements, status);
    return this;
  }

  getOnePostByIndex(index: string | number, status = 200): this {
    this.getOneElementByIndex(endpoint, index, status);
    return this;
  }

  createNewPost(body: IBody, status = 201): this {
    cy.request(Methods.POST, this.urlCreator(endpoint, ''), body).then(res => {
      expect(res.status).to.eq(status);
      expect(body).contain(body);
    });
    return this;
  }

  updatePostByIndex(index: string | number, body: IBody, status = 200): this {
    cy.request(Methods.PUT, this.urlCreator(endpoint, index), body).then(res => {
      expect(res.status).to.eq(status);
      expect(res.body).contain(body);
    });
    return this;
  }

  deletePostByIndex(index: string | number, status = 200): this {
    this.deleteElementByIndex(endpoint, index, status);
    return this;
  }
}

export default new PostsActions();

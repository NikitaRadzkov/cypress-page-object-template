import apiEndpoints from '../../enums/api-endpoints.enum';
import Methods from '../../enums/methods.enum';
import BaseApiActions from '../base/base-api.actions';

const endpoint = apiEndpoints.todos;

interface IBody {
  userId: number;
  title: string;
  completed: boolean;
}

class TodosActions extends BaseApiActions {
  getAllTodos(countElements: number, status = 200): this {
    this.getAllElements(endpoint, countElements, status);
    return this;
  }

  getOneTodoByIndex(index: string | number, status = 200): this {
    this.getOneElementByIndex(endpoint, index, status);
    return this;
  }

  createNewTodo(body: IBody, status = 201): this {
    cy.request(Methods.POST, this.urlCreator(endpoint, ''), body).then(res => {
      expect(res.status).to.eq(status);
      expect(body).contain(body);
    });
    return this;
  }

  updateTodoByIndex(index: string | number, body: IBody, status = 200): this {
    cy.request(Methods.PUT, this.urlCreator(endpoint, index), body).then(res => {
      expect(res.status).to.eq(status);
      expect(res.body).contain(body);
    });
    return this;
  }

  deleteTodoByIndex(index: string | number, status = 200): this {
    this.deleteElementByIndex(endpoint, index, status);
    return this;
  }
}

export default new TodosActions();

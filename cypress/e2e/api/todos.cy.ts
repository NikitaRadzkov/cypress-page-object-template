import todosActions from '../../actions/api/todos.actions';
import testData from '../../fixtures/api/todos.fixture';

describe('JSON Placeholder todos tests', () => {
  it('GET /todos', () => {
    cy.stepInfo('Get all todos');
    todosActions.getAllTodos(testData.allTodos.countPosts);
  });

  it('GET /todos/1', () => {
    cy.stepInfo('Get first todo');
    todosActions.getOneTodoByIndex(testData.oneTodo.index);
  });

  it('POST /todos', () => {
    cy.stepInfo('Create new todo');
    todosActions.createNewTodo(testData.createData);
  });

  it('PUT /todos/2', () => {
    cy.stepInfo('Update todo by index');
    todosActions.updateTodoByIndex(testData.updateData.body.userId, testData.updateData.body);
  });

  it('DELETE /todos/1', () => {
    cy.stepInfo('Delete post by index');
    todosActions.deleteTodoByIndex(testData.deleteTodo.index);
  });
});

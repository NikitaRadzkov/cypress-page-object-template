import postsActions from '../../actions/api/posts.actions';
import testData from '../../fixtures/api/posts.fixture';

describe('JSON Placeholder posts tests', () => {
  it('GET /posts', () => {
    cy.stepInfo('Get all posts');
    postsActions.getAllPosts(testData.allPosts.countPosts);
  });

  it('GET /posts/1', () => {
    cy.stepInfo('Get first post');
    postsActions.getOnePostByIndex(testData.onePost.index);
  });

  it('POST /posts', () => {
    cy.stepInfo('Create new post');
    postsActions.createNewPost(testData.createData);
  });

  it('PUT /posts/2', () => {
    cy.stepInfo('Update post by index');
    postsActions.updatePostByIndex(testData.updateData.body.userId, testData.updateData.body);
  });

  it('DELETE /post/1', () => {
    cy.stepInfo('Delete post by index');
    postsActions.deletePostByIndex(testData.deletePost.index);
  });
});

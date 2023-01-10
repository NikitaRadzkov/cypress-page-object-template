const allPosts = {
  countPosts: 100
};

const onePost = {
  index: 1
};

const createData = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

const updateData = {
  body: {
    title: 'updated title',
    body: 'updated body',
    userId: 2
  }
};

const deletePost = {
  index: 1
};

export default {
  allPosts,
  onePost,
  createData,
  updateData,
  deletePost
};

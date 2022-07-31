import * as postController from './modules/posts/post.controller.js';

export default (route) => {
  // Post Operations
  route.get('/', postController.index);
  route.post('/', postController.createPost);
  route.get('/:id', postController.findById);
  route.post('/:id', postController.updatePost);
  route.delete('/:id', postController.deletePost);
};

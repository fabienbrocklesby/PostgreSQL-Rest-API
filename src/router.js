import * as postController from './modules/posts/post.controller.js';

export default (route) => {
  // Post Operations
  route.get('/', postController.index);
};

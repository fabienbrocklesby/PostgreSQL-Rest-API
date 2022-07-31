import * as postController from './modules/posts/post.controller';

export default (route) => {
  // Post Operations
  route.get('/', postController.index);
  route.post('/', postController.createPost);
};

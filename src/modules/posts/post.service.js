import * as postModel from './post.model.js';
import validator from '../../validators/post.validator.js';

export const index = () => postModel.index();

export const createPost = async ({ title, body }) => {
  await validator({ title, body }, ['title', 'body']);
  return postModel.createPost({ title, body });
};

export const findById = async (id) => postModel.findById(id);

export const updatePost = async (id, { title, body }) => {
  await validator({ title, body }, ['title', 'body']);
  return postModel.updatePost(id, { title, body });
};

export const deletePost = async (id) => postModel.deletePost(id);

import * as postModel from './post.model.js';

export const index = () => postModel.index();

export const createPost = async ({ title, body }) => postModel.createPost({ title, body });

export const findById = async (id) => postModel.findById(id);

export const updatePost = async (id, { title, body }) => postModel.updatePost(id, { title, body });

export const deletePost = async (id) => postModel.deletePost(id);

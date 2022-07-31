import * as postModel from './post.model';

export const index = () => postModel.index();

export const createPost = async ({ title, body }) => postModel.createPost({ title, body });

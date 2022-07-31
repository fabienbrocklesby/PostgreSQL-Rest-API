import * as postModel from './post.model.js';
import postValidator from '../../validators/post.validator.js';

export const index = () => postModel.index();

export const createPost = async ({ title, body }) => {
    return postModel.createPost({ title, body });
};

import * as postService from './post.service.js';

export const index = async (request, response, next) => {
  try {
    response.json(await postService.index());
  } catch (error) {
    next(error);
  }
};

export const createPost = async (request, response, next) => {
  try {
    const data = await postService.createPost(request.body);
    response.json(data);
  } catch (error) {
    next(error);
  }
};

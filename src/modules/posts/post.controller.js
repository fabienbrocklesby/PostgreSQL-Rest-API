import * as postService from './post.service.js';

export const index = async (request, response, next) => {
  try {
    response.json(await postService.index());
  } catch (error) {
    next(error);
  }
};

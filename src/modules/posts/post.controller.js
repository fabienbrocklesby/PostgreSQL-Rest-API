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

export const findById = async (request, response, next) => {
  try {
    const data = await postService.findById(request.params.id);
    response.json(data);
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (request, response, next) => {
  try {
    const data = await postService.updatePost(request.params.id, request.body);
    response.json(data);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (request, response, next) => {
  try {
    const data = await postService.deletePost(request.params.id);
    response.json(data);
  } catch (error) {
    next(error);
  }
};

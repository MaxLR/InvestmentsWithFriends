import * as APIUtil from '../util/post_api_util';

export const CREATE_POST = "CREATE_POST";
export const FETCH_NEWS_FEED = "FETCH_NEWS_FEED";
export const FETCH_USER_POSTS = "FETCH_USER_POSTS";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});

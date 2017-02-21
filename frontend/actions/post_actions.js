import * as APIUtil from '../util/post_api_util';

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

export const createPost = (post) => {
  return (dispatch) => {
    return APIUtil.createPost(post)
      .then((newPost) => dispatch(receivePost(newPost)),
      (errors) => dispatch(receiveErrors(errors)));
  };
};

export const fetchUserPosts = (userId) => {
  return (dispatch) => {
    return APIUtil.fetchUserPosts(userId)
      .then((posts) => dispatch(receivePosts(posts)),
      (errors) => dispatch(receiveErrors(errors)));
  };
};

export const fetchNewsfeedPosts = () => {
  return (dispatch) => {
    return APIUtil.fetchNewsfeedPosts()
      .then((posts) => dispatch(receivePosts(posts)),
      (errors) => dispatch(receiveErrors(errors)));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return APIUtil.deletePost(postId)
      .then((post) => dispatch(receivePost(post)),
      (errors) => dispatch(receiveErrors(errors)));
  };
};

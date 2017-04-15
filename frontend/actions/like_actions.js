import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_POST_LIKE = "REMOVE_POST_LIKE";
export const ADD_POST_LIKE = "ADD_POST_LIKE";
export const ADD_COMMENT_LIKE = "ADD_COMMENT_LIKE";
export const REMOVE_COMMENT_LIKE = "REMOVE_COMMENT_LIKE";

export const removePostLike = (like) => ({
  type: REMOVE_POST_LIKE,
  like
});

export const removeCommentLike = (like) => ({
  type: REMOVE_COMMENT_LIKE,
  like
});

export const addPostLike = (like) => ({
  type: ADD_POST_LIKE,
  like
});

export const addCommentLike = (like) => ({
  type: ADD_COMMENT_LIKE,
  like
});

export const createPostLike = (like) => {
  return (dispatch) => {
    return APIUtil.createLike(like)
      .then((newLike) => dispatch(addPostLike(newLike)));
  };
};

export const deletePostLike = (likeId) => {
  return (dispatch) => {
    return APIUtil.deleteLike(likeId)
      .then((like) => dispatch(removePostLike(like)));
  };
};

export const createCommentLike = (like) => {
  return (dispatch) => {
    return APIUtil.createLike(like)
      .then((newLike) => dispatch(addCommentLike(newLike)));
  };
};

export const deleteCommentLike = (likeId) => {
  return (dispatch) => {
    return APIUtil.deleteLike(likeId)
      .then((like) => dispatch(removeCommentLike(like)));
  };
};

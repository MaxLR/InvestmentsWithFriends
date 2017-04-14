import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";
export const ADD_POST_LIKE = "ADD_POST_LIKE";

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  likeId: like.id
});

export const addPostLike = (like) => ({
  type: ADD_POST_LIKE,
  like
});

export const createPostLike = (like) => {
  return (dispatch) => {
    return APIUtil.createLike(like)
      .then((newLike) => dispatch(addPostLike(newLike)));
  };
};

export const deleteLike = (likeId) => {
  return (dispatch) => {
    return APIUtil.deleteLike(likeId)
      .then((like) => dispatch(removeLike(like)));
  };
};

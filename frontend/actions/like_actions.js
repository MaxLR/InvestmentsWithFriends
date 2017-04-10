import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like
});

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
  likeId: like.id
});

export const createLike = (like) => {
  return (dispatch) => {
    return APIUtil.createLike(like)
      .then((newLike) => dispatch(receiveLike(newLike)));
  };
};

export const deleteLike = (likeId) => {
  return (dispatch) => {
    return APIUtil.deleteLike(likeId)
      .then((like) => dispatch(removeLike(like)));
  };
};

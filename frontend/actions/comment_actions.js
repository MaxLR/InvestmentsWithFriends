import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});

export const removeComment = (comment) => ({
  type: REMOVE_COMMENT,
  commentId: comment.id
});

export const createComment = (comment) => {
  return (dispatch) => {
    return APIUtil.createComment(comment)
      .then((newComment) => dispatch(receiveComment(newComment)),
      (errors) => dispatch(receiveErrors(errors)));
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    return APIUtil.fetchComments()
      .then((comments) => dispatch(receiveComments(comments)),
      (errors) => dispatch(receiveErrors(errors)));
  };
};

export const deleteComment = (commentId) => {
  return (dispatch) => {
    return APIUtil.deleteComment(commentId)
      .then((comment) => dispatch(removeComment(comment)),
      (errors) => dispatch(receiveErrors(errors)));
  };
};

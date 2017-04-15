import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  RECEIVE_ERRORS,
  RESET_ERRORS,
  REMOVE_COMMENT,
  ADD_NESTED_COMMENT,
} from '../actions/comment_actions';
import {   ADD_COMMENT_LIKE, REMOVE_COMMENT_LIKE } from '../actions/like_actions';
import { merge } from 'lodash';

const defaultState = {
  comments: {}
};

const CommentReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case RECEIVE_COMMENTS:
      newState = action.comments;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.commentId];
      return newState;
    case ADD_NESTED_COMMENT:
      newState[action.parentId].commentIds.push(action.commentId);
      return newState;
    case ADD_COMMENT_LIKE:
      newState[action.like.likeableId].likes.push(action.like);
      return newState;
    case REMOVE_COMMENT_LIKE:
      newState[action.like.likeable_id].likes.forEach((like, idx) => {
        if (like.id === action.like.id) {
          newState[action.like.likeable_id].likes.splice(idx, 1);
        }
      });
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case RESET_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return newState;
  }
};

export default CommentReducer;

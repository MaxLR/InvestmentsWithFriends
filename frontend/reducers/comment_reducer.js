import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/comment_actions';
import { merge } from 'lodash';

const defaultState = {
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

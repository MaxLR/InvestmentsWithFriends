import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/post_actions';

import { merge } from 'lodash';

const defaultState = {
  posts: {},
  errors: []
};

const PostReducer = (state = defaultState, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_POST:
      newState.posts[action.post.id] = action.post;
      return newState;
    case RECEIVE_POSTS:
      newState.posts = action.posts;
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

export default PostReducer;

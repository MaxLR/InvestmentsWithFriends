import {
  RECEIVE_LIKE,
  REMOVE_LIKE
} from '../actions/like_actions';
import { merge } from 'lodash';

const defaultState = {
  likes: {}
};

const LikeReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch (action.type) {
    case REMOVE_LIKE:
      return newState;
    default:
    return newState;
  }
};

export default LikeReducer;

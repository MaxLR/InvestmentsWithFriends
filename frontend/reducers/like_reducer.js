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
    case RECEIVE_LIKE:
      debugger
      break;
    default:

  }
};

export default LikeReducer;

import {
  RECEIVE_FRIENDSHIP,
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/friendship_actions';

import { merge } from 'lodash';

const defaultState = {
  friends: [],
  errors: []
};

const FriendshipReducer = (state = defaultState, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_FRIENDSHIP:
      newState.friends.push(action.friendship);
      return newState;
    default:
      return newState;
  }
};

import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  RESET_ERRORS
} from '../actions/user_actions';
import { merge } from 'lodash';

const defaultState = {
  profileOwner: null,
  errors: []
};

const UserReducer = (state = defaultState, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState.profileOwner = action.user;
      newState.errors = [];
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

export default UserReducer;

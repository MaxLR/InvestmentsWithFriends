import * as APIUtil from '../util/friendship_api_util';
import { receiveCurrentUser } from './session_actions';

export const CREATE_FRIENDSHIP = "CREATE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";

export const receiveFriendship = (friendship) => ({
  type: RECEIVE_FRIENDSHIP,
  friendship
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});

export const createFriendship = (friendeeId) => {
  return (dispatch) => {
    return APIUtil.createFriendship(friendeeId)
      .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors))
      );
  };
};

export const updateFriendship = (friendshipId, status) => {
  return(dispatch) => {
    return APIUtil.updateFriendship(friendshipId, status)
      .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors)));
  };
};

export const deleteFriendship = (friendshipId) => {
  return (dispatch) => {
    return APIUtil.deleteFriendship(friendshipId)
      .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
      (errors) => dispatch(receiveErrors(errors)));
  };
};

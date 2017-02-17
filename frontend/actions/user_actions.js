import * as APIUtil from '../util/user_api_util';

export const FETCH_USER = "FETCH_USER";
export const UPDATE_USER = "UPDATE_USER";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RESET_ERRORS = "RESET_ERRORS";

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const resetErrors = () => ({
  type: RESET_ERRORS
});

export const fetchUser = (userId) => {
  return (dispatch) => {
    return APIUtil.fetchUser(userId)
      .then((user) => {
        return dispatch(receiveUser(user));
      },
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const updateUser = (user) => {
  return (dispatch) => {
    return APIUtil.updateUser(user)
      .then((updatedUser) => dispatch(updateUser(updatedUser)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)));
  };
};

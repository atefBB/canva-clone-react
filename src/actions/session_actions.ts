import * as ApiUtil from '../util/session_api_util';
import { updateMode } from './mode_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


const receiveCurrentUser = (currentUser: any) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors: any) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const signup = (user: any) => (dispatch: any) => ApiUtil.signup(user)
  .then((responseUser: any) => dispatch(receiveCurrentUser(responseUser)),
    (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const login = (user: any) => (dispatch: any) => ApiUtil.login(user)
  .then((responseUser: any) => {
    dispatch(receiveCurrentUser(responseUser));
    // dispatch(updateMode('browse'));
  },
  (res: any) => dispatch(receiveErrors(res.responseJSON)));

export const logout = () => (dispatch: any) => ApiUtil.logout()
  .then(() => {
    dispatch(logoutCurrentUser());
    // dispatch(updateMode('splash'));
  });

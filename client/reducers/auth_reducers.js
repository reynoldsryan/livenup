import { SIGNUP_USER, LOGIN_USER } from '../actions/auth_actions';

export function signupReducer(state = { token: null, isAuthorized: false }, action) {
  switch(action.type) {
  case SIGNUP_USER:
    return { token: action.payload.data.token, isAuthorized: true };
  }
  return state;
}

export function loginReducer(state = { token: null, isAuthorized: false }, action) {
  switch(action.type) {
  case LOGIN_USER:
    return { token: action.payload.data.token, isAuthorized: true };
  }
  return state;
}

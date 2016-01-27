import { SIGNUP_USER, LOGIN_USER } from '../actions/auth_actions';

export function signupReducer(state = { token: null }, action) {
  switch(action.type) {
  case SIGNUP_USER:
    return { token: action.payload.headers.token };
  }
  return state;
}

export function loginReducer(state = { token: null }, action) {
  switch(action.type) {
  case LOGIN_USER:
    return { token: action.payload.headers.token };
  }
  return state;
}

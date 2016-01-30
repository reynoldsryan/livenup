import { SIGNUP_USER, LOGIN_USER, LOGOUT_USER } from '../actions/auth_actions';

export function authReducer(state = { token: localStorage.getItem('token'), name: null, email: null }, action) {
  switch(action.type) {
  case SIGNUP_USER:
    localStorage.setItem('token', action.payload.headers.token);
    return Object.assign({}, state,
      { token: localStorage.getItem('token'),
        name: action.payload.data.name,
        email: action.payload.data.email });
  case LOGIN_USER:
    localStorage.setItem('token', action.payload.headers.token);
    return Object.assign({}, state,
      { token: localStorage.getItem('token'),
        name: action.payload.data[0].name,
        email: action.payload.data[0].email });
  case LOGOUT_USER:
    localStorage.removeItem('token');
    return Object.assign({}, state,
      { token: localStorage.getItem('token'),
        name: null,
        email: null });
  default:
    return state;
  }
}

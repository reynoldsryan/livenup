import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/login_actions';

export default function loginReducer(state={
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false
}, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.userInfo
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetch: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    default:
    console.log(state);
      return state;
  }

  return state;
}

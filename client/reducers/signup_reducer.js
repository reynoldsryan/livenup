import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/signup_actions';

export default function signupReducer(action, state={
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false
}) {
  switch(action.type) {
    case SIGNUP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.userInfo
      });
    case SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      });
    case SIGNUP_FAILURE:
      return Object.assign({}, state, {
        isFetch: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    default:
      return state;
  }
}

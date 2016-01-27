export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function logoutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(logoutSuccess());
  };
}

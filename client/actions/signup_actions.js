export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

function requestSignup(userInfo) {
  return {
    type: SIGNUP_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    userInfo
  };
}

function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  };
}

function signupError(message) {
  return {
    type: SIGNUP_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function signupUser(userInfo) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${userInfo.username}&password=${userInfo.password}`
  };

  return dispatch => {

    dispatch(requestSignup(userInfo));

    return fetch('http://localhost:8080/signup', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
      ).then(({ user, response }) => {
        if (!response.ok) {
          dispatch(signupError(user.message));
          return Promise.reject(user);
        } else {
          localStorage.setItem('id_token', user.id_token);
          dispatch(signupSuccess(user));
        }
      }).catch(err => console.error(err));
  };
}

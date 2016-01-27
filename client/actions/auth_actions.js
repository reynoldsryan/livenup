import axios from 'axios';

export const SIGNUP_USER = 'SIGNUP_USER';
export const LOGIN_USER = 'LOGIN_USER';

export function signupUser(username, email, password) {
  const request = axios.post('/signup', {
    username: username,
    email: email,
    password: password
  });

  return {
    type: SIGNUP_USER,
    payload: request
  };
}

export function loginUser(username, password) {
  const request = axios.post('/login', {
    username: username,
    password: password
  });

  return {
    type: LOGIN_USER,
    payload: request
  };
}

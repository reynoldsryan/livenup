import axios from 'axios';

export function signupUser(email, password) {
  const request = axios.post('/signup', {
    email: email,
    password: password
  });

  return {
    type: SIGNUP_USER,
    payload: request
  };
}

export function loginUser(email, password) {
  const request = axios.post('/login', {
    email: email,
    password: password
  });

  return {
    type: LOGIN_USER,
    payload: request
  };
}

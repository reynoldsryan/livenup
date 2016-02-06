import axios from 'axios';

export const FETCH_BLOUHM_DATA = "FETCH_BLOUHM_DATA";

export const fetchBlouhmData = () => {
  let token = windows.localStorage.getItem('token');
  let ax = axios.create({headers: {'token': token}});
  const request = ax.get('/user/hardware')
    .then(response) => {
      //return plant hardware data
    }
};

  return {
    type: FETCH_BLOUHM_DATA,
    payload: request
  }
}

import axios from 'axios';

export const CREATE_SPACE = "CREATE_SPACE";
export const UPDATED_USERSPACE = "UPDATED_USERSPACE";
//export const UPDATE_USERSPACE

export function createSpace(newSpace) {
  if(!newSpace){
    return console.error('ERROR newSpace is falsey:',newSpace);
  }
  var token =  window.localStorage.getItem('token');
  let ax = axios.create({headers: {'token': token}})
  const request = ax.post('/spaces', {
    space: newSpace
  }).catch((response) => {
    if(response  instanceof Error) {
      console.error('GET | Error sending reponse',response);
    }else {
      console.log('GET | error from server', response);
    }
  });

  return {
    type: CREATE_SPACE,
    payload: request
  }
}

export function updateUserSpace(updatedSpace) {
  if(!updatedSpace){
    return console.error('ERROR updatedSpace is falsey:',updatedSpace);
  }

  var token =  window.localStorage.getItem('token');
  let ax = axios.create({headers: {'token': token}})
  const request = ax.put('/spaces', {
    space: updatedSpace
  }).catch((response) => {
    if(response  instanceof Error) {
      console.error('GET | Error sending reponse',response);
    }else {
      console.log('GET | error from server', response);
    }
  });

  return {
    type: UPDATED_USERSPACE,
    payload: request
  }
}

import CREATE_SPACE from '../actions/creator_actions';
import UPDATED_USERSPACE from '../actions/creator_actions';
import FETCH_USER_SPACES from '../actions/spaces_actions';

export default function(state = [], action) {
  console.log('action '+FETCH_USER_SPACES, action);
  switch(action.type) {
    case UPDATED_USERSPACE:
    console.log('UPDATED_SPACE Action, ',action);
      return state.slice();
    case CREATE_SPACE:
    console.log('CREATE_SPACE Action, ',action);
      if(action.payload === undefined) {
        //basic error handling
        console.error('++++Payload in reducer_userSpaces for action CREATE_SPACE is undefined');
        return state.slice();
      }

      return [...state, action.payload.data];
    case "FETCH_USER_SPACES":
    console.log(FETCH_USER_SPACES, action);
      if(action.payload === undefined) {
        //basic error handling
        console.error('++++Payload in reducer_userSpaces for action CREATE_SPACE is undefined');
        return state.slice();
      }

      return action.payload.data;

    default: return state;
  }
  return state;
}

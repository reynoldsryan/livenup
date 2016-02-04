import CREATE_SPACE from '../actions/creator_actions';
import UPDATED_USERSPACE from '../actions/creator_actions';

export default function(state = [], action) {
  switch(action.type) {
    case UPDATED_USERSPACE:
    case CREATE_SPACE:
      if(action.payload === undefined) {
        //basic error handling
        console.error('++++Payload in reducer_userSpaces for action CREATE_SPACE is undefined');
        return state.slice();
      }
      return action.payload.data.spaces;

    default: return state;
  }
}

import { FETCH_SPACE_INSPIRATIONS } from '../actions/inspiration_actions';

export default function(state=[], action) {
  switch(action.type) {
    case FETCH_SPACE_INSPIRATIONS:
      if(!action.payload) {
        console.error('Payload not defined in reducer_inspirations');
        return state
      }
      return action.payload.data
    default: return state;
  }
}

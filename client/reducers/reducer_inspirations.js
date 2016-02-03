import { FETCH_SPACE_INSPIRATIONS } from '../actions/inspiration_actions';

export default function(state=[], action) {
  console.log('+++ inside reducer_inspirations.js value of action', action);
  switch(action.type) {
    case FETCH_SPACE_INSPIRATIONS:
      console.log('+++ line 7 value of action.payload =>', action.payload);
      if(!action.payload) {
        console.error('Payload not defined in reducer_inspirations');
        return state
      }
      return action.payload.data
    default: return state;
  }
}

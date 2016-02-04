import { SELECT_SPACE_INSPIRATION } from '../actions/inspiration_actions';

export default function(state = null, action) {
  switch(action.type) {
    case SELECT_SPACE_INSPIRATION:
      return action.payload;
  }
  return state;
}

import { SELECT_SPACE } from '../actions/index';

export default function(state = null, action) {
  console.log(action);
  switch(action.type) {
    case SELECT_SPACE:
      return action.payload;
  }
  return state;
}

import { PLANT_SEARCH } from '../actions/index';

export default function(state = [], action) {

  switch(action.type) {
    case PLANT_SEARCH:
    console.log('Payload in plant reducer',action.payload);
      return action.payload;
  }
  return state;
}

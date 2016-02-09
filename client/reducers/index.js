import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import AuthReducer from './reducer_auth';
import ListOfSpaces from './reducer_listOfSpaces';
import SelectedSpace from './reducer_selectSpace';
import InspirationsReducer from './reducer_inspirations';
import UserSpacesReducer from './reducer_userSpaces.js';
import InspirationSelectionReducer from './reducer_selectedInspiration';

const rootReducer = combineReducers({
  routing: routeReducer,
  isAuthorized: AuthReducer,
  listOfSpaces: ListOfSpaces,
  selectedSpace: SelectedSpace,
  inspirations: InspirationsReducer,
  userSpaces: UserSpacesReducer,
  selectedInspiration: InspirationSelectionReducer
});

export default rootReducer;

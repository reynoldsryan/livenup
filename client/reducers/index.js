import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import PlotsReducer from './reducer_plots';
import AuthReducer from './reducer_auth';
import PlantsReducer from './reducer_plants';
import ListOfSpaces from './reducer_listOfSpaces';
import SelectedSpace from './reducer_selectSpace';

const rootReducer = combineReducers({
  routing: routeReducer,
  userPlots: PlotsReducer,
  plants: PlantsReducer,
  isAuthorized: AuthReducer,
  listOfSpaces: ListOfSpaces,
  selectedSpace: SelectedSpace
});

export default rootReducer;

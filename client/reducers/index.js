import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import PlotsReducer from './reducer_plots';
import { authReducer } from './auth_reducers';
import PlantsReducer from './reducer_plants';

const rootReducer = combineReducers({
  routing: routeReducer,
  userPlots: PlotsReducer,
  plants: PlantsReducer,
  isAuthorized: authReducer
});

export default rootReducer;

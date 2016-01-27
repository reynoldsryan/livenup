import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import PlotsReducer from './reducer_plots';

const rootReducer = combineReducers({
  routing: routeReducer,
  userPlots: PlotsReducer
});

export default rootReducer;

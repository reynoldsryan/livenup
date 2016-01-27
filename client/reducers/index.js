import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import PlotsReducer from './reducer_plots';
import loginReducer from './login_reducer';
import signupReducer from './signup_reducer';

const rootReducer = combineReducers({
  routing: routeReducer,
  userPlots: PlotsReducer,
  login: loginReducer,
  signup: signupReducer
});

export default rootReducer;

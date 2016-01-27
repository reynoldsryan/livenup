import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import loginReducer from './login_reducer';
import signupReducer from './signup_reducer';

const rootReducer = combineReducers({
  routing: routeReducer,
  login: loginReducer,
  signup: signupReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import PlotsReducer from './reducer_plots';
<<<<<<< Updated upstream
import { loginReducer, signupReducer } from './auth_reducers';
=======
import { authReducer } from './auth_reducers';
import PlantsReducer from './reducer_plants';
>>>>>>> Stashed changes

const rootReducer = combineReducers({
  routing: routeReducer,
  userPlots: PlotsReducer,
<<<<<<< Updated upstream
  login: loginReducer,
  signup: signupReducer
=======
  plants: PlantsReducer,
  isAuthorized: authReducer
>>>>>>> Stashed changes
});

export default rootReducer;

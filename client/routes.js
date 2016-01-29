import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MyPlants from './components/myplants';
<<<<<<< Updated upstream
import Profile from './components/profile';
import Login from './components/login';
import Signup from './components/signup';
=======
import Profile from './containers/profile';
import Login from './containers/login';
import Signup from './containers/signup';
>>>>>>> Stashed changes

export default (
<Route path='/' component={App}>
  <Route path='myplants' component={MyPlants} />
  <Route path='profile' component={Profile} />
  <Route path='login' component={Login} />
  <Route path='signup' component={Signup} />
</Route>
);

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/index';
import MyPlants from './components/myplants';
import Profile from './components/profile';
import Login from './containers/login';
import Signup from './containers/signup';

export default (
<Route path='/' component={App}>
  <IndexRoute component={Index} />
  <Route path='myplants' component={MyPlants} />
  <Route path='profile' component={Profile} />
  <Route path='login' component={Login} />
  <Route path='signup' component={Signup} />
</Route>
);

//TODO: add onEnter to verify token exists when trying to access views requiring authentication

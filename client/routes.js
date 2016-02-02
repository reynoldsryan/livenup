import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/index';
import MySpaces from './components/myspaces';
import Login from './containers/login';
import Signup from './containers/signup';

const checkAuth = (nextState, replace) => {
  if(!localStorage.getItem('token')) {
    replace({ pathname: '/login' });
  }
};

export default (
<Route path='/' component={App}>
  <IndexRoute component={Index} />
  <Route path='myspaces' onEnter={checkAuth} component={MySpaces} />
  <Route path='login' component={Login} />
  <Route path='signup' component={Signup} />
</Route>
);

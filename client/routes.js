import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/index';
import MySpaces from './components/myspaces';
import Login from './containers/login';
import Signup from './containers/signup';

export default (
<Route path='/' component={App}>
  <IndexRoute component={Index} />
  <Route path='myspaces' component={MySpaces} />
  <Route path='login' component={Login} />
  <Route path='signup' component={Signup} />
</Route>
);

//TODO: add onEnter to verify token exists when trying to access views requiring authentication

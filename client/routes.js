import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Index from './components/index';
import MySpaces from './components/myspaces';
<<<<<<< 067d60766df211b433ebcba251dfacea048e56d4
=======
import Login from './containers/login';
import Signup from './containers/signup';
>>>>>>> [refactor] adds inspirations to routes.js
import Inspirations from './containers/inspirations';

const checkAuth = (nextState, replace) => {
  if(!localStorage.getItem('token')) {
    replace({ pathname: '/' });
  }
};

export default (
<Route path='/' component={App}>
  <IndexRoute component={Index} />
  <Route path='inspirations' component={Inspirations} />
  <Route path='mygreenspace' onEnter={checkAuth} component={MySpaces} />
<<<<<<< 067d60766df211b433ebcba251dfacea048e56d4
=======
  <Route path='login' component={Login} />
  <Route path='signup' component={Signup} />
  <Route path='inspirations' component={Inspirations} />
>>>>>>> [refactor] adds inspirations to routes.js
</Route>
);

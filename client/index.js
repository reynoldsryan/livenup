import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route } from 'react-router';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import Profile from './components/profile';
import MyPlants from './components/myplants';
import reducers from './reducers';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxPromise), window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Router>
        <Route path='/' component={App}>
          <Route path='/myplants' component={MyPlants}>
            <Route path='/profile' component={Profile} />
          </Route>
        </Route>
      </Router>
    </div>
  </Provider>, document.querySelector('.container-fluid'));

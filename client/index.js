import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import Profile from './components/profile';
import MyPlants from './components/myplants';
import reducers from './reducers';

const history = browserHistory;
const middleware = syncHistory(history);
const createStoreWithMiddleware = compose(applyMiddleware(middleware, ReduxPromise), window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path='/' component={App}>
          <Route path='myplants' component={MyPlants} />
          <Route path='profile' component={Profile} />
        </Route>
      </Router>
    </div>
  </Provider>, document.querySelector('.container-fluid'));

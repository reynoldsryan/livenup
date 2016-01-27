import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import routes from './routes';

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = compose(applyMiddleware(thunk, ReduxPromise, reduxRouterMiddleware), window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.querySelector('.container-fluid'));

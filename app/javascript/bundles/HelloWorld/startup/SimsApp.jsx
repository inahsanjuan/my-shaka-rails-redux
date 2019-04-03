import React from 'react';

import configureStore, { history } from '../store/simsStore';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import Dashboard from '../components/Dashboard';
import Menu from '../components/Menu';

const store = configureStore(/* provide initial state if any */);

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const SimsApp = (props) => (
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <Menu />

    <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/hello" render={() => (<div>Moshi moshi</div>)} />
    </Switch>
  </ConnectedRouter>
  </Provider>
);

console.log("Welcome to the Sims App");

export default SimsApp;

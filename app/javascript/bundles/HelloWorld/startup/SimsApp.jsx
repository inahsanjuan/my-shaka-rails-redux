import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from '../store/simsStore';
import SimsContainer from '../containers/SimsContainer';

import Dashboard from '../components/Dashboard';

const store = configureStore(/* provide initial state if any */);

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const SimsApp = (props) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/hello" render={() => (<div>Something for hello</div>)} />
      </Switch>
    </ConnectedRouter>

    {/*<SimsContainer />*/}
  </Provider>
);

console.log("This is the sims app");

export default SimsApp;

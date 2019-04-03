import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import simsReducer from '../reducers/simsReducer';

export const history = createBrowserHistory();

// const configureStore = (initialState) => (
//   createStore(simsReducer, initialState)
// );

export default function configureStore(preloadedState) {
  const store = createStore(
    simsReducer(history),
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), 
      )
    )
  );

  return store;
}

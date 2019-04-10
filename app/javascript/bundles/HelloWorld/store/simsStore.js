import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/simsReducer';

export const history = createBrowserHistory();

const middleware = [routerMiddleware(history), thunk];

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(...middleware)
    )
  );

  return store;
}

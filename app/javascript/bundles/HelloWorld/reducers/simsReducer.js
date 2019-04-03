import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import { HELLO_WORLD_NAME_UPDATE } from '../constants/helloWorldConstants';

const name = (state = '', action) => {
  switch (action.type) {
    case HELLO_WORLD_NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

// const simsReducer = combineReducers({ name });

// export default simsReducer;

export default (history) => combineReducers({
  router: connectRouter(history),
  // name
})

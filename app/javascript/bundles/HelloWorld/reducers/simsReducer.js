import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import { FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILED } from '../constants';

// const initialState = {
//   todos: [],
//   loading: true,
//   errorMessage: ""
// }

const todos = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return [ ...state, action.payload ]
      //   return { ...state, loading: action.payload }
      // case FETCH_TODOS_SUCCESS:
      //   return { ...state, todos: action.payload, loading: action.loading}
      // case FETCH_TODOS_FAILED:
      //   return { ..state, errorMessage: action.payload, loading: action.loading}
    default:
      return state;
  }
};

export default (history) => combineReducers({
  router: connectRouter(history),
  todos
});

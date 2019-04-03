import { createStore } from 'redux';
import simsReducer from '../reducers/simsReducer';

const configureStore = (initialState) => (
  createStore(simsReducer, initialState)
);

export default configureStore;

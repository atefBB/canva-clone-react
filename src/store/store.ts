import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'redu... Remove this comment to see the full error message
import logger from 'redux-logger';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    rootReducer,
    preloadedState,
    // applyMiddleware(thunk, logger),
    applyMiddleware(thunk),
  )
);

export default configureStore;

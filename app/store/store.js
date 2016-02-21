import {
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/root';
import createLogger from 'redux-logger';

export default createStore(
  reducer,
  applyMiddleware(
    thunk,
    createLogger()
  )
);

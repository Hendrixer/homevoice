import app from './app';
import devices from './devices';
import voices from './voices';
import { combineReducers } from 'redux'
export default combineReducers({
  app,
  devices,
  voices
});

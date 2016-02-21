import * as actions from './actions';
import { AsyncStorage } from 'react-native';
import * as constants from '../utils/constants';

export const load_jwt = () => dispatch =>{
  dispatch(actions.toggle_fetch(true, 'Authenticating'));
  return AsyncStorage.getItem(constants.JWT_KEY)
  .then(jwt => {
    dispatch(actions.receive_jwt(jwt));
    dispatch(actions.toggle_fetch(false));
    return jwt;
  })
  .catch(error => {
    console.error('JS ERROR', error);
    dispatch(actions.toggle_fetch(false));
  });
};

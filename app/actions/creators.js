import * as actions from './actions';
import { AsyncStorage } from 'react-native';
import * as constants from '../utils/constants';

export const load_jwt = () => {
  return async function(dispatch) {
    dispatch(actions.is_fetching(true, 'Authenticating'));
    try {
      const jwt = await AsyncStorage.getItem(constants.JWT_KEY);
      dispatch(actions.receive_jwt(jwt));
    } catch(e) {
      console.error(e);
    } finally {
      dispatch(actions.is_fetching(false));
    }
  }
};

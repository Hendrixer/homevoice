import {
  RECEIVE_JWT,
  TOGGLE_FETCH
} from '../actions/types';

export default function(state={
  is_fetching: false
}, action) {
  switch(action.type) {
    case RECEIVE_JWT:
      return {
        ...state,
        jwt: action.jwt
      };
    case TOGGLE_FETCH:
      return {
        ...state,
        is_fetching: action.is_fetching,
        message: action.message
      };
    default:
      return state;
  }
};

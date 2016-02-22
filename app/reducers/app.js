import {
  RECEIVE_JWT,
  TOGGLE_FETCH,
  UPDATE_FORM
} from '../actions/types';

export default function(state={
  is_fetching: false,
  forms: {
    sign_in: {},
    sign_up: {}
  }
}, action) {
  switch(action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        forms: {
          ...state.forms,
          [action.form_name]: {
            ...state.forms[action.form_name],
            ...action.inputs
          }
        }
      };
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

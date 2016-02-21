import {
  RECEIVE_DEVICES,
  TOGGLE_FETCH,
  UPDATE_DEVICE,
  RECEIVE_JWT,
  RECEIVE_USER_CONFIG,
  RECEIVE_BOX_ID
} from './types';

// export const http_error = (resp) => {
//   return {

//   };
// };

export const receive_devices = (devices) => {
  return {
    type: RECEIVE_DEVICES,
    devices
  };
};

export const toggle_fetch = (is_fetching, message='') => {
  return {
    type: TOGGLE_FETCH,
    is_fetching,
    message
  };
};

export const update_device = (device) => {
  return {
    type: UPDATE_DEVICE,
    device
  };
};

export const receive_user_config = (config) => {
  return {
    type: RECEIVE_USER_CONFIG,
    config
  };
};

export const receive_jwt = (jwt) => {
  return {
    type: RECEIVE_JWT,
    jwt
  }
};

export const receive_box_id = (box_id) => {
  return {
    type: RECEIVE_BOX_ID,
    box_id
  };
};

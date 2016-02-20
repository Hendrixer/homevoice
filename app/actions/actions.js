import * as types from './types';

export const http_error = (resp) => {
  return {

  };
};

export const receive_devices = (devices) => {
  return {
    type: types.RECEIVE_DEVICES,
    devices
  };
};

export const toggle_fetch = (is_fetching, message='') => {
  return {
    type: types.FETCH,
    is_fetching,
    message
  };
};

export const update_device = (device) => {
  return {
    type: types.UPDATE_DEVICE,
    device
  };
};

export const receive_user_config = (config) => {
  return {
    type: types.RECEIVE_USER_CONFIG,
    config
  };
};

export const receive_jwt = (jwt) => {
  return {
    type: types.RECEIVE_JWT,
    jwt
  }
};

export const receive_box_id = (box_id) => {
  return {
    type: types.RECEIVE_BOX_ID,
    box_id
  };
};

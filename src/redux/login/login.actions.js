import { LoginActionTypes } from './login.types';

export const login = (inputs) => ({
  type: LoginActionTypes.LOGIN,
  payload: inputs,
});

export const updateHeader = () => ({
  type: LoginActionTypes.UPDATE_HEADER,
});

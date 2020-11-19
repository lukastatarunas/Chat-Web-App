import { LoginActionTypes } from './login.types';

const INITIAL_STATE = {
  inputs: {
    email: '',
    password: '',
  },
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN:
      return {
        ...state,
        inputs: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;

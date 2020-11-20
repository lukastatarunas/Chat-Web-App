import { LoginActionTypes } from './login.types';

const INITIAL_STATE = {
  inputs: {
    email: '',
    password: '',
  },
  updateHeader: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN:
      return {
        ...state,
        inputs: action.payload,
      };
    case LoginActionTypes.UPDATE_HEADER:
      return {
        ...state,
        updateHeader: !state.updateHeader,
      };
    default:
      return state;
  }
};

export default loginReducer;

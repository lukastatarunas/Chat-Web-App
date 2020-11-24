import { MessagesActionTypes } from './messages.types';

const INITIAL_STATE = {
  isPending: false,
  messages: [],
  error: '',
};

const messagesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case MessagesActionTypes.REQUEST_MESSAGES_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case MessagesActionTypes.REQUEST_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        isPending: false,
      };
    case MessagesActionTypes.REQUEST_MESSAGES_FAILED:
      return {
        ...state,
        error: action.payload,
        isPending: false,
      };
    default:
      return state;
  }
};

export default messagesReducer;

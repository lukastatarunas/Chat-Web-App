import { combineReducers } from 'redux';

import loginReducer from './login/login.reducers';
import messagesReducer from './messages/messages.reducers';

export default combineReducers({
  login: loginReducer,
  messages: messagesReducer,
});

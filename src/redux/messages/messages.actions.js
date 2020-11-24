import { MessagesActionTypes } from './messages.types';

export const requestMessages = () => (dispatch) => {
  dispatch({ type: MessagesActionTypes.REQUEST_MESSAGES_PENDING });
  fetch('https://api.jsonbin.io/b/5fbc987090e7c66167f627ef')
    .then((response) => response.json())
    .then((data) => dispatch({ type: MessagesActionTypes.REQUEST_MESSAGES_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: MessagesActionTypes.REQUEST_MESSAGES_FAILED, payload: error }),
    );
};

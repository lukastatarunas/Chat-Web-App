import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Talk from 'talkjs';

import { updateHeader } from '../../redux/login/login.actions';

const talkjsContainer = React.createRef();

const Chat = ({ updateHeader, inputs }) => {
  useEffect(() => {
    Talk.ready.then(() => {
      const me = new Talk.User({
        id: '12345231',
        name: 'George Looney',
        email: 'george@looney.net',
        photoUrl: 'https://talkjs.com/docs/img/george.jpg',
        welcomeMessage: 'Hey there! How are you? :-)',
      });

      if (!window.talkSession) {
        window.talkSession = new Talk.Session({
          appId: process.env.REACT_APP_CHAT_ID,
          me: me,
        });
      }

      const other = new Talk.User({
        id: '654321',
        name: 'Sebastian',
        email: 'Sebastian@example.com',
        photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
        welcomeMessage: 'Hey, how can I help?',
      });

      const conversation = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));

      conversation.setParticipant(me);
      conversation.setParticipant(other);

      const inbox = window.talkSession.createInbox({ selected: conversation });
      inbox.mount(talkjsContainer.current);
    });
    return () => {
      updateHeader();
    };
  }, [updateHeader]);
  return <div ref={talkjsContainer}></div>;
};

Chat.propTypes = {
  updateHeader: PropTypes.func,
  inputs: PropTypes.object,
};

const mapStateToProps = (state) => ({
  inputs: state.login.inputs,
});

const mapDispatchToProps = (dispatch) => ({
  updateHeader: () => dispatch(updateHeader()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

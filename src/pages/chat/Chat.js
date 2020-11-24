import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client';

import { updateHeader } from '../../redux/login/login.actions';
import { requestMessages } from '../../redux/messages/messages.actions';

import {
  MainContainer,
  Sidebar,
  ConversationList,
  Conversation,
  Avatar,
  ChatContainer,
  ConversationHeader,
  MessageList,
  MessageSeparator,
  Message,
  MessageInput,
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

const api = 'http://127.0.0.1:4000';

const Chat = () => {
  const [socketResponse, setSocketResponse] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMessages());
  }, [dispatch]);

  useEffect(() => {
    const socket = io(api);
    socket.on('FromAPI', (data) => {
      setSocketResponse(data);
    });

    return () => {
      dispatch(updateHeader());
      socket.disconnect();
    };
  }, [dispatch]);

  const handleKeyPress = (event) => {
    const keyCode = event.keyCode;
    const enterKeyCode = 13;
    if (keyCode === enterKeyCode) {
      console.log(messageInputValue);
      setMessageInputValue('');
    }
  };

  return (
    <div
      style={{
        height: '600px',
        position: 'relative',
      }}
    >
      <MainContainer responsive>
        <Sidebar position="left" scrollable={false}>
          <ConversationList>
            {/* {messages.messages.map((message) => (
              <Conversation
                key={message.id}
                name={message.from}
                lastSenderName={message.from}
                info={message.messages}
              >
                <Avatar
                  src={'https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg'}
                  name={message.from}
                  status="available"
                />
              </Conversation>
            ))} */}
            <Conversation name="Lilly" lastSenderName="Lilly" info="Yes i can do it for you">
              <Avatar
                src={'https://chatscope.io/storybook/react/static/media/lilly.62d4acff.svg'}
                name="Lilly"
                status="available"
              />
            </Conversation>

            <Conversation name="Joe" lastSenderName="Joe" info="Yes i can do it for you">
              <Avatar
                src={'https://chatscope.io/storybook/react/static/media/joe.641da105.svg'}
                name="Joe"
                status="dnd"
              />
            </Conversation>

            <Conversation name="Emily" lastSenderName="Emily" info="Yes i can do it for you">
              <Avatar
                src={'https://chatscope.io/storybook/react/static/media/emily.d34aecd9.svg'}
                name="Emily"
                status="available"
              />
            </Conversation>

            <Conversation name="Kai" lastSenderName="Kai" info="Yes i can do it for you">
              <Avatar
                src={'https://chatscope.io/storybook/react/static/media/kai.b62f69dc.svg'}
                name="Kai"
                status="unavailable"
              />
            </Conversation>

            <Conversation name="Akane" lastSenderName="Akane" info="Yes i can do it for you">
              <Avatar
                src={'https://chatscope.io/storybook/react/static/media/akane.b135c3e3.svg'}
                name="Akane"
                status="eager"
              />
            </Conversation>

            <Conversation name="Eliot" lastSenderName="Eliot" info="Yes i can do it for you">
              <Avatar
                src={'https://chatscope.io/storybook/react/static/media/eliot.d7038eac.svg'}
                name="Eliot"
                status="away"
              />
            </Conversation>

            <Conversation name="Zoe" lastSenderName="Zoe" info="Yes i can do it for you">
              <Avatar
                src={'https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg'}
                name="Zoe"
                status="dnd"
              />
            </Conversation>

            <Conversation name="Patrik" lastSenderName="Patrik" info="Yes i can do it for you">
              <Avatar
                src={'https://chatscope.io/storybook/react/static/media/patrik.d89db575.svg'}
                name="Patrik"
                status="invisible"
              />
            </Conversation>
          </ConversationList>
        </Sidebar>

        <ChatContainer>
          <ConversationHeader>
            <ConversationHeader.Back />
            <Avatar
              src={'https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg'}
              name="Zoe"
            />
            <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
            <ConversationHeader.Actions></ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList>
            <MessageSeparator content="Saturday, 30 November 2019" />
            <Message
              model={{
                message: socketResponse,
                sentTime: '15 mins ago',
                sender: 'Zoe',
                direction: 'incoming',
                position: 'single',
              }}
            >
              <Avatar
                src={'https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg'}
                name="Zoe"
              />
            </Message>
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            value={messageInputValue}
            attachButton={false}
            sendButton={false}
            onChange={(messageInputValue) => setMessageInputValue(messageInputValue)}
            onKeyUp={handleKeyPress}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chat;

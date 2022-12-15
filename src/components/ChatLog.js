import React from 'react';
import PropTypes from 'prop-types';

import ChatEntry from './ChatEntry';

function ChatLog({ entries }) {
  const messageComponents = [];

  for (const message of entries) {
    messageComponents.push(
      // sender
      <ChatEntry
        // id={message.chatId}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
      />
    );
  }

  // TODO: separate messages
  // - useState
  // - add these conditionals to ChatEntry
  // - update return body for chatEntry to add css changes
  let align = '';

  // separate messages
  for (const message of messageComponents) {
    if (message.sender === 'Vladimir') {
      // className=left
      align = 'left';
    } else if (message.sender === 'Vladimir') {
      // className=right
      align = 'left';
    }
  }

  // return <div>{messageComponents}</div>;
  return <div className={align}>{messageComponents}</div>;
}

ChatEntry.propTypes = {
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatLog;

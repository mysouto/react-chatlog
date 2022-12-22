import React from 'react';
import PropTypes from 'prop-types';

import ChatEntry from './ChatEntry';

const ChatLog = ({
  entries,
  onUpdateMessages,
  incrementCount,
  decreaseCount,
}) => {
  const messageComponents = [];

  for (const message of entries) {
    messageComponents.push(
      <ChatEntry
        key={message.id}
        id={message.id}
        sender={message.sender}
        body={message.body}
        timeStamp={message.timeStamp}
        liked={message.liked}
        onUpdateMessages={onUpdateMessages}
        incrementCount={incrementCount}
        decreaseCount={decreaseCount}
      />
    );
  }

  return <div>{messageComponents}</div>;
};

ChatEntry.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onUpdateMessages: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
};

export default ChatLog;

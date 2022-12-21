import React from 'react';
import PropTypes from 'prop-types';
// import { useState } from 'react';

import './ChatEntry.css';

import TimeStamp from './TimeStamp';

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  onUpdateMessages,
}) => {
  const entryTime = TimeStamp(timeStamp);
  // const entryTime = TimeStamp(props.testMessage);

  let align = '';
  if (id % 2 === 0) {
    align = 'chat-entry remote';
    // right
  } else {
    align = 'chat-entry local';
    // left
  }

  const updateEmojiOnClick = () => {
    console.log('Calling updateEmojiOnClick');
    const newMessage = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    };
    console.log('Updating message');

    onUpdateMessages(newMessage);
  };

  // TODO
  // Add behavior to heart button
  // toggle
  // event: clicked
  // if empty heart, className=❤️
  // if ❤️, className=unlike

  // const updatedEmoji = liked ? ❤️ : 🤍;
  // const updatedEmoji = liked ? 'red' : 'white';

  return (
    <div key={id} className={align}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time">{entryTime}</p>

        {/* {chatLike} */}
        <button className="like" onClick={updateEmojiOnClick}>
          {/* className{updatedEmoji} */}🤍
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;

import React from 'react';
import PropTypes from 'prop-types';

import './ChatEntry.css';
import TimeStamp from './TimeStamp';

// We will now need to update the ChatEntry component to use the liked field.
// When we click a heart, the state of the entries will need to update in our App so that it can report the number of likes (❤️s).
// Consider implementing a helper function to calculate the number of likes (❤️s).

const ChatEntry = ({
  id,
  sender,
  body,
  timeStamp,
  liked,
  onUpdateMessages,
  incrementCount,
  decreaseCount,
}) => {
  const entryTime = TimeStamp(timeStamp);

  let align = '';
  if (id % 2 === 0) {
    align = 'chat-entry remote';
  } else {
    align = 'chat-entry local';
  }

  const updateEmojiOnClick = () => {
    const newMessage = {
      id: id,
      sender: sender,
      body: body,
      timeStamp: timeStamp,
      liked: !liked,
    };

    // if liked is true, add 1 to count state in App
    // using incrementCount function in App
    if (newMessage.liked) {
      incrementCount();
    } else {
      decreaseCount();
    }

    onUpdateMessages(newMessage);
    // countLikes(newMessage);
  };

  const updatedEmoji = liked ? '❤️' : '🤍';

  return (
    <div key={id} className={align}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time">{entryTime}</p>

        <button className="like" onClick={updateEmojiOnClick}>
          {updatedEmoji}
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
  onUpdateMessages: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired,
};

export default ChatEntry;

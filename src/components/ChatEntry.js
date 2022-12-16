import React from 'react';
import PropTypes from 'prop-types';

import './ChatEntry.css';

import TimeStamp from './TimeStamp';

// const ChatEntry = ({ body, sender, timeStamp }) => {
const ChatEntry = (props) => {
  const id = props.id;
  const sender = props.sender;
  const body = props.body;
  const timeStamp = props.timeStamp;
  const liked = props.liked;

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

  return (
    <div key={id} className={align}>
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        <p>{body}</p>

        <p className="entry-time">{entryTime}</p>

        {/* {chatLike} */}
        <button className="like">🤍</button>
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

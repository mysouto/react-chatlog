import React from 'react';
import PropTypes from 'prop-types';

import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ body, sender, timeStamp }) => {
// const ChatEntry = (props) => {
  // const sender = props.testMessage.sender;
  // const body = props.testMessage.body;
  // const timeStamp = props.testMessage.timeStamp;
  // const id = props.testMessage.id;
  // const liked = props.testMessage.liked;

  const entryTime = TimeStamp(timeStamp);
  // const entryTime = TimeStamp(props.testMessage);

  return (
    <div className="chat-entry local">
      {/* <h2 className="entry-name">Replace with name of sender</h2> */}
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
  //Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default ChatEntry;

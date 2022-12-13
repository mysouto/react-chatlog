import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const chatSender = props.sender;
  const chatBody = props.body;
  const chatTime = props.timeStamp;

  const chatId = props.id;
  const chatLike = props.liked;

  return (
    <div className="chat-entry local">
      {/* <h2 className="entry-name">Replace with name of sender</h2> */}
      <h2 className="entry-name">{chatSender}</h2>

      <section className="entry-bubble">
        {/* <p>Replace with body of ChatEntry</p> */}
        {chatBody}

        {/* <p className="entry-time">Replace with TimeStamp component</p> */}
        <p className="entry-time">{chatTime}</p>

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

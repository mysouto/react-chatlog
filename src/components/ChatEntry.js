import React from 'react';
import PropTypes from 'prop-types';

import './ChatEntry.css';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ body, sender, timeStamp }) => {
  // TODO: calculate years ('years ago')
  const entryTime = TimeStamp(timeStamp);
  // TimeStamp expecting (props)

  // my code for getting get values from TIMESTAMP and JS current time
  // const currentTimeStamp = new Date();
  // const currentYear = currentTimeStamp.getFullYear();
  // const entryTimeStamp = timeStamp;
  // const newEntryTimeStamp = entryTimeStamp.split(/[- :]/);
  // const entryYear = newEntryTimeStamp[0];
  // const difference = currentYear - entryYear;

  return (
    <div className="chat-entry local">
      {/* <h2 className="entry-name">Replace with name of sender</h2> */}
      <h2 className="entry-name">{sender}</h2>

      <section className="entry-bubble">
        {/* <p>Replace with body of ChatEntry</p> */}
        {body}

        <p className="entry-time">{entryTime}</p>
        {/* <p className="entry-time">Replace with TimeStamp component</p> */}
        {/* <p className="entry-time">{difference}</p> */}

        {/* {chatLike} */}
        <button className="like">🤍</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
  // id: PropTypes.number.isRequired,
  // sender: PropTypes.string.isRequired,
  // body: PropTypes.string.isRequired,
  // timeStamp: PropTypes.string.isRequired,
  // liked: PropTypes.bool.isRequired,
};

export default ChatEntry;

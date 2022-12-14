import React from "react";
import PropTypes from "prop-types";

import "./ChatEntry.css";

const ChatEntry = ({ body, sender, timeStamp }) => {
	return (
		<div className="chat-entry local">
			{/* <h2 className="entry-name">Replace with name of sender</h2> */}
			<h2 className="entry-name">{sender}</h2>

			<section className="entry-bubble">
				{/* <p>Replace with body of ChatEntry</p> */}
				{body}

				{/* <p className="entry-time">Replace with TimeStamp component</p> */}
				<p className="entry-time">{timeStamp}</p>

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

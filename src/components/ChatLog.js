import PropTypes from "prop-types";

import ChatEntry from "./ChatEntry";

function ChatLog ({ messagesList }) {
    const messageComponents = [];
        for (const message of messagesList) {
    messageComponents.push(
      // sender
        <ChatEntry key={message.chatId} />
        );
    }   
    //   console.log(messageComponents);
    return <div>{messageComponents}</div>;
};

ChatEntry.propTypes = {
  //Fill with correct proptypes
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
};

export default ChatLog;
import React from 'react';
import './App.css';
import { useState } from 'react';

import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

// Wave 3
// Add behavior to heart button - toggle
// Manage click event and state of chat entries
// App reports messages liked count

const App = () => {
  // add state here
  const [messagesList, setMessageList] = useState(chatMessages);

  const updateMessages = (messageToUpdate) => {
    console.log('updateMessages called');

    const newMessageList = messagesList.map((message) => {
      if (messageToUpdate.id === message.id) {
        return messageToUpdate;
      } else {
        return message;
      }
    });
    setMessageList(newMessageList);
  };

  return (
    <div id="App">
      <header>
        {/* TODO: add names instead of hardcoding */}
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        {/* <ChatEntry
          body={testMessage.body}
          sender={testMessage.sender}
          timeStamp={testMessage.timeStamp}
         /> */}

        {/* Wave 02: Render ChatLog component  */}
        {/* <ChatLog entries={initialCopy} /> */}
        <ChatLog entries={messagesList} onUpdateMessages={updateMessages} />
      </main>
    </div>
  );
};

export default App;

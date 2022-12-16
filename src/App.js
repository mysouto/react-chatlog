import React from 'react';
import './App.css';
import { useState } from 'react';

import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // TODO: make a copy of chatMessage
  // const initialCopy = chatMessages.map((message) => {
  //   return { ...message };
  // });

  // add state here
  // const [messagesList, setMessageList] = useState(initialCopy);

  // function updateMessages(sender) {
  //   console.log('updateMessages called');

  //   const newMessageList = [];

  //   const messages = chatMessages.map((message) => {
  //   for (const message in messagesList) {
  //     if () {
  //       // className=left

  //     } else if () {
  //       ...props,

  //     }
  //     newMessageList.push(newMessage);
  //   }
  //   setMessageList(newMessageList)
  // }

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
        <ChatLog entries={chatMessages} />
      </main>
    </div>
  );
};

export default App;

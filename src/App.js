import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';

import ChatEntry from './components/ChatEntry';

const testMessage = {
  id: 1,
  sender: 'Vladimir',
  body: 'why are you arguing with me',
  timeStamp: '2018-05-29T22:49:06+00:00',
  liked: false,
};

// const messagesList = [
//   {
//     id: 1,
//     sender: 'Vladimir',
//     body: 'why are you arguing with me',
//     timeStamp: '2018-05-29T22:49:06+00:00',
//     liked: false,
//   },
//   {
//     id: 2,
//     sender: 'Estragon',
//     body: 'Because you are wrong.',
//     timeStamp: '2018-05-29T22:49:33+00:00',
//     liked: false,
//   },
// ];

// const messages = chatMessages;

const App = () => {
  return (
    <div id="App">
      <header>
        {/* TODO: add names instead of hardcoding */}
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        <ChatEntry
          body={testMessage.body}
          sender={testMessage.sender}
          timeStamp={testMessage.timeStamp}
        />

        {/* Wave 02: Render ChatLog component  */}
        {/* <ChatEntry messagesList={messagesList} /> */}
      </main>
    </div>
  );
};

export default App;

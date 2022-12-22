import React from 'react';
import './App.css';
import { useState } from 'react';

import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

// Wave 3 REQS
// App reports messages liked count
// Manage the click event and state of the chat entries such that when the like status of a chat message changes by clicking the heart button, it is tracked by the App and the App reports the number of total messages that have been liked.

// helper function to calculate number of likes here?
// loop through messageComponents
// if liked = True, add to count
// count based on "liked" boolean values?

// need state for like count?

const App = () => {
  // add state here
  const [messagesList, setMessageList] = useState(chatMessages);

  const [likesCount, setLikesCount] = useState(0);

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

  function incrementCount() {
    console.log('Calling incrementCount');
    let currentCount = likesCount + 1;
    setLikesCount(currentCount);
  }

  const decreaseCount = () => {
    console.log('Calling decreaseCount');
    let currentCount = likesCount - 1;
    setLikesCount(currentCount);
  };

  return (
    <div id="App">
      <header>
        {/* TODO: add names instead of hardcoding */}
        <h1>Chat between Vladimir and Estragon</h1>
        <section>{likesCount} ❤️s</section>
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
        <ChatLog
          entries={messagesList}
          onUpdateMessages={updateMessages}
          // countLikes={countLikes}
          incrementCount={incrementCount}
          decreaseCount={decreaseCount}
        />
      </main>
    </div>
  );
};

export default App;

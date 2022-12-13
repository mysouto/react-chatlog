import React from 'react';
import './App.css';
import chatMessages from './data/messages.json';

import ChatEntry from './components/ChatEntry';

const App = () => {
  return (
    <div id="App">
      <header>
        {/* TODO: add names instead of hardcoding */}
        <h1>Chat between Vladimir and Estragon</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component */}
        <ChatEntry messages={chatMessages} />

        {/* Wave 02: Render ChatLog component  */}
      </main>
    </div>
  );
};

export default App;

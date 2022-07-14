
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    //BEM naming conventions

    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
       </div>
    </div>
  );
}

export default App;


import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser]= useState(null);
  return (
    //BEM naming conventions

    <div className="app">
        {!user ? (
          <h1>Login</h1>
        ):(
          
          
          <div className="app_body">
        
        <Router>
          <Sidebar />
        
          <Routes>
            <Route path="/rooms/:roomId" element={<Chat />} />
            <Route path="/" element={<Chat />} />


          </Routes>
        </Router>
      </div>
        )}

    </div>
  );
}

export default App;

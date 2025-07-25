import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <h1>Chat App Connected</h1>;
}

export default App;

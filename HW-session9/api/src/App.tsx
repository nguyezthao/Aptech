import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './api/login'
import New from './api/newUser'

function App() {
  return (
    <div className="App">
      <Login />
      <hr />
      <New />

    </div>
  );
}

export default App;

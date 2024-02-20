import React from 'react';
import logo from './logo.svg';
import './App.css';
import Session from './session'
import Container2 from './container2'
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Container3 from './container3'
import Container4 from './container4'

import { FaEllipsisH } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Session iconRight={<FaEllipsisH />} />
      <Container2 icon={<BiDotsHorizontalRounded />} />
      <Container3 />
      <Container4 icon={<BiDotsHorizontalRounded />} />
    </div>
  );
}

export default App;

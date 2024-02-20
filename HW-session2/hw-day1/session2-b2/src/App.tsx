import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search'
import { GrSearch } from 'react-icons/gr';
import { CgMenuRound } from 'react-icons/cg';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <Search iconLeft={<GrSearch />} />
      <Search iconLeft={<GrSearch />} text='Search' />
      <Search iconLeft={<GrSearch />} text='Textfield' />
      <Search iconLeft={<GrSearch />} text='Search' iconRight={<CgMenuRound />} />
      <Search iconLeft={<GrSearch />} text='Search crypto' iconRight={<AiOutlineMenu />} />
      <Search text='Phone number' iconRight={<AiOutlinePhone />} color1='#7ae899' />
      <Search iconLeft={<GrSearch />} text='Search in web' iconRight={<AiOutlinePhone />} color1='#c0da1a' />
    </div>
  );
}

export default App;

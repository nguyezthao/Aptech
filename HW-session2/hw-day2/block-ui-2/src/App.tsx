import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './block'
import { GiVintageRobot } from 'react-icons/gi';
import { AiOutlineApple } from 'react-icons/ai';
import { BiLogoPhp } from 'react-icons/bi';
import { BsFiletypeJava } from 'react-icons/bs';
import { AiFillAlert } from 'react-icons/ai';


function App() {
  return (
    <div >
      <Block text='HTML' icon={<GiVintageRobot />} color='#12e354' width1={200} />
      <Block text='CSS' icon={<AiOutlineApple />} color='#e31212' width1={180} />
      <Block text='PHP' icon={<BiLogoPhp />} color='#001eff' width1={50} />
      <Block text='JAVA' icon={<BsFiletypeJava />} color='#cdf100' width1={230} />
      <Block text='.NET' icon={<AiFillAlert />} color='#c902f6' width1={100} />
    </div>
  );
}

export default App;

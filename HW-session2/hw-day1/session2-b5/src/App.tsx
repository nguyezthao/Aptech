import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './container1'
import Container2 from './container2'
import { BsThreeDots } from 'react-icons/bs';
import Container3 from './container3'
import Container4 from './container4'
import Container5 from './container5'

function App() {
  return (
    <div className="App">

      <Container title1='Landescape' title2='423Km' imgUrl1='/a.png' icon1={<BsThreeDots />} />
      <Container title1='Falset Mountains' title2='423Km, 3 Week' imgUrl2='/cloudy-sun-rays-svgrepo-com 1.png' imgUrl1='/heroicons-outline_switch-vertical.png' color1='#4A5A63' />
      <Container title1='Great  schedule' title2='Lorem  sitamet.' imgUrl2='/b.png' imgUrl1='/sun.png' color2='#da00f7' radius={50} width1={380} color3='#abe2e9' />
      <Container2 color1='#dcf0ef' />
      <Container3 />
      <Container4 />
      <Container5 />


    </div>
  );
}

export default App;

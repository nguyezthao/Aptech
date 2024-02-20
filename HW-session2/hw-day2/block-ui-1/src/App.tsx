import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './block'

function App() {
  return (
    <div >
      <Block title='BANDWIDTH' subTitle={20} colorDark='#e54d4c' colorHight='#f75354' />
      <Block title='STORAGE' subTitle={50} colorDark='#2db8cd' colorHight='#31c8dd' />
      <Block title='USERS' subTitle={70} colorDark='#4ac25e' colorHight='#51d567' />
      <Block title='VISITORS' subTitle={30} colorDark='#e9c318' colorHight='#fcd518' />
      <Block title='EMAILS' subTitle={45} colorDark='#bb70d5' colorHight='#cb79e7' />
      <Block title='BASIC' subTitle={80} colorDark='#eb59d6' colorHight='#fe60e8' />
      <Block title='OTHERS' subTitle={37} colorDark='#5890da' colorHight='#619cec' />

    </div>
  );
}

export default App;

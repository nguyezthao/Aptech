import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './block'

function App() {
  return (
    <div >
      <Block title='TODAY VISITORS' subTitle='24,599' />
      <Block title='YESTERDAY VISITORS' subTitle='15,699' />
      <Block title='TOTAL DOWNLOADS' subTitle='1,24,599' />
      <Block title='CURRENT INCOME' subTitle='$54,599' />

    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fill from './fill'

function App() {

  return (
    <div className="App">
      <Fill questionContent='Hãy điền tên quốc gia ___  ___vô địch World Cup.' correctAnswers={['Brazil', '5']} />
    </div>
  );
}

export default App;

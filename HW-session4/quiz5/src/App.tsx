import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz5 from './quiz5'

function App() {
  return (
    <div className="App">
      <Quiz5 questionContent='Sắp xếp các mùa (xuân , hạ ,đông , thu) theo thứ tự các màu trong năm ___  ' correctAnswer={'xuân hạ thu đông'} />

    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Onechoice from './onceChoice'

function App() {
  return (
    <div>
      <Onechoice questionContent='Chiến thắng Điện Biên Phủ vào năm nào?' answers={['1945', '1954', '1968', '1975', '1980']} correctAnswer='1954' />
      <Onechoice questionContent='Argentina vô địch World Cup năm 2022?' answers={['Đúng', 'Sai']} correctAnswer='Đúng' />

    </div>
  );
}

export default App;

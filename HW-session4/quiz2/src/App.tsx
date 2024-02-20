import React from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './checkbox'

function App() {
  return (
    <div>
      <Checkbox questionContent='Những quốc gia nào ở Đông Nam á?' answers={['Anh', 'Pháp', 'Nhật', 'Việt Nam', 'lào']} correctAnswers={['Anh', 'Pháp']} />

    </div>
  );
}

export default App;

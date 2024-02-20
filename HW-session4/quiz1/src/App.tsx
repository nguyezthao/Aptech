import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz1 from './quiz1'

function App() {
  return (
    <Quiz1
      question='Đáp án nào sau đây không phải là ngôn ngữ lập trình?'
      answers={['c/c++', 'java', 'PHP', 'Python', 'html']}
      correctAnswer='html'
    />

  );
}

export default App;

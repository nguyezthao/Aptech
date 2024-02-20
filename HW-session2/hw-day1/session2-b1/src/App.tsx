import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button'
import { AiFillApple, AiFillFacebook, AiFillGoogleCircle, AiOutlineArrowRight, } from 'react-icons/ai';

function App() {

  return (
    <div className="App">
      <Button text='Get Started' iconRight={<AiOutlineArrowRight size={24} />} color2='#ffffff' />
      <Button text='Continue with Apple' iconLeft={<AiFillApple size={24} />} color2='#ffffff' />
      <Button text='Continue with Google' iconLeft={<AiFillGoogleCircle size={24} />} color1='#fff5f5' color2='#000000' />
      <Button text='Continue with Facebook' iconLeft={<AiFillFacebook size={24} />} color1='#fff5f5' color2='#000000' />
    </div>



  );
}

export default App;

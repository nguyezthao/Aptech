import React from 'react';
import logo from './logo.svg';
import './App.css';
import Block from './block'
import { SlSocialFacebook } from 'react-icons/sl';
function App() {
  return (
    <div>
      <Block title='Facebook' subTitle='5,00,000 Likes' color='#619BEC' />
      <Block imgUrl='/124021-removebg-preview (1).png' title='Twitter' subTitle='40,000 Tweets' color='#31C8DD' />
      <Block imgUrl='/images-removebg-preview.png' title='Google+' subTitle='4,60,000 Plus' color='#F78153' />
      <Block imgUrl='/58e9199beb97430e819064fc-removebg-preview.png' title='Pinterest' subTitle='34,000 Pins' color='#F75354' />
    </div>
  );
}

export default App;

import React from 'react';
import avatar from '../assets/avatar.png';
import background from '../assets/background.jpg';

import TypingCarousel from './TypingCarousel';

const GreetingCard = () => {

  const phrases = [
    'This is the first phrase in the TypingCarousel',
    'This is the second phrase in the TypingCarousel',
    'This is the third phrase in the TypingCarousel'
  ]

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center">
          <img
            className="rounded-full w-32 h-32 mb-4 mx-auto"
            src={avatar}
            alt="Avatar"
          />
          <h1 className="text-3xl text-white mb-4">Hello, how are you today?</h1>
          <TypingCarousel phrases={phrases} />
        </div>

      </div>
    </div>
  );
};

export default GreetingCard;

import React from 'react';
import avatar from '../assets/avatar.png';
import background from '../assets/background.jpg';

import TypingCarousel from './TypingCarousel';
import ScrollDownIndicator from './ScrollDownIndicator';

const GreetingCard = ({ greeting, phraseRotation, scrollDownTarget }) => {

  return (
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center">
          <img
            className="rounded-full w-32 h-32 mb-4 mx-auto"
            src={avatar}
            alt="Avatar"
          />
          <h1 className="text-3xl text-white mb-4">{greeting}</h1>
          <TypingCarousel phrases={phraseRotation} />
          <ScrollDownIndicator targetRef={scrollDownTarget} />
        </div>

      </div>
    </div>
  );
};

export default GreetingCard;

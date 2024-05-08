import React, { useRef } from 'react';
import Navbar from '../components/NavigationBar';

import GreetingCard from '../components/GreetingCard';

const HomePage = () => {
  const otherPages = [
    { navtext: 'Home', navpath: '/' },
    { navtext: 'About', navpath: '/about' },
    { navtext: 'Info', navpath: '/information' },
  ];
  const targetRef = useRef(null);

  const greeting = 'Welcome to my website!';
  const captions = [
    'This is a simple website created using React.',
    'It is styled using Tailwind CSS.'
  ]

  return (
    <div className="bg-gray-800 text-gray-200">
      <Navbar title="Homepage" navigationLinks={otherPages} />
      <GreetingCard greeting={greeting} phraseRotation={captions} scrollDownTarget={targetRef} />
      <div ref={targetRef} className='text-center text-2xl mt-4'>
        <p>This is the next component</p>
      </div>
    </div>
  );
};

export default HomePage;

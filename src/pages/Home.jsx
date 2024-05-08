import React from 'react';
import Navbar from '../components/NavigationBar';

import GreetingCard from '../components/GreetingCard';

const HomePage = () => {
  const otherPages = [
    { navtext: 'Home', navpath: '/' },
    { navtext: 'About', navpath: '/about' },
    { navtext: 'Info', navpath: '/information' },
  ];

  const greeting = 'Welcome to my website!';
  const captions = [
    'This is a simple website created using React.',
    'It is styled using Tailwind CSS.'
  ]

  return (
    <div className="bg-gray-800 text-gray-200">
      <Navbar title="Homepage" navigationLinks={otherPages} />
      <GreetingCard greeting={greeting} captions={captions} />
    </div>
  );
};

export default HomePage;

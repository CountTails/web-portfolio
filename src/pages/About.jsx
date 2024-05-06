import React from 'react';
import Navbar from '../components/NavigationBar';

const AboutPage = () => {

  const otherPages = [
    { navtext: 'Home', navpath: '/' },
    { navtext: 'About', navpath: '/about' },
    { navtext: 'Info', navpath: '/information' },
  ];

  return (
    <div className="bg-gray-800 text-gray-200">
      <Navbar title="About" navigationLinks={otherPages} />
    </div>
  );
};

export default AboutPage;

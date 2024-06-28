import React from 'react';
import Navbar from '../layouts/NavigationBar';

const InformationPage = () => {

  const otherPages = [
    { navtext: 'Home', navpath: '/' },
    { navtext: 'About', navpath: '/about' },
    { navtext: 'Info', navpath: '/information' },
  ];

  return (
    <div className="bg-gray-800 text-gray-200">
      <Navbar title="Info Page" navigationLinks={otherPages} />
    </div>
  );
};

export default InformationPage;

import React from 'react';

import Navbar from '../layouts//NavigationBar';
import AlternatingBackground from '../layouts/AlternatingBackground';

const HomePage = () => {
  const otherPages = [
    { navtext: 'Home', navpath: '/' },
    { navtext: 'About', navpath: '/about' },
    { navtext: 'Info', navpath: '/information' },
  ];

  return (
    <div className="bg-gray-800 text-gray-200">
      <Navbar title="Homepage" navigationLinks={otherPages} />
      <AlternatingBackground>
        <section>Section 1</section>
        <section>Section 2</section>
        <section>Section 3</section>
      </AlternatingBackground>

    </div>
  );
};

export default HomePage;

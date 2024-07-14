import React from 'react';

import Navbar from '@/layouts//NavigationBar';
import AlternatingBackground from '@/layouts/AlternatingBackground';

import InfoCard from '@/content/about/InfoCard';
import SkillsToolbox from '@/content/skills/SkillsToolbox';


const HomePage = () => {
  const otherPages = [
    { navtext: 'Home', navpath: '/' },
    { navtext: 'About', navpath: '/about' },
    { navtext: 'Info', navpath: '/information' },
  ];

  return (
    <div className="text-white">
      <Navbar title="Homepage" navigationLinks={otherPages} />
      <AlternatingBackground>
        <InfoCard />
        <SkillsToolbox />
        <section>Section 3</section>
      </AlternatingBackground>

    </div>
  );
};

export default HomePage;

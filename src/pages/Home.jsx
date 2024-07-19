import React from 'react';
import { useState } from 'react';

import Navbar from '@/layouts//NavigationBar';
import AlternatingBackground from '@/layouts/AlternatingBackground';

import InfoCard from '@/content/about/InfoCard';
import SkillsToolbox from '@/content/skills/SkillsToolbox';
import EducationHistory from '@/content/education/EducationHistory';
import ProjectList from '@/content/projects/ProjectList';
import JobHistory from '@/content/jobs/JobHistory';


const HomePage = () => {
  const [currentSectionTitle, setCurrentSectionTitle] = useState(''); 
  const otherPages = [
    { navtext: 'Home', navpath: '/' },
    { navtext: 'About', navpath: '/about' },
    { navtext: 'Info', navpath: '/information' },
  ];

  return (
    <div className="text-white">
      <Navbar title={currentSectionTitle} navigationLinks={otherPages} />
      <AlternatingBackground setCurrentSectionTitle={setCurrentSectionTitle}>
        <InfoCard title="Info"/>
        <SkillsToolbox title="Skills"/>
        <EducationHistory title="Education" />
        <ProjectList title="Projects"/>
        <JobHistory title="Experience"/>
      </AlternatingBackground>

    </div>
  );
};

export default HomePage;

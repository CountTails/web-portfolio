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
    { navtext: 'About', navpath: '#aboutme' },
    { navtext: 'Skills', navpath: '#keyskills' },
    { navtext: 'Education', navpath: '#schools' },
    { navtext: 'Projects', navpath: '#projects'},
    { navtext: 'Experience', navpath: '#jobs'}
  ];

  return (
    <div className="text-white">
      <Navbar title={currentSectionTitle} navigationLinks={otherPages} />
      <AlternatingBackground setCurrentSectionTitle={setCurrentSectionTitle}>
        <InfoCard id='aboutme' title="Info"/>
        <SkillsToolbox id='keyskills' title="Skills"/>
        <EducationHistory id='schools' title="Education" />
        <ProjectList id='projects' title="Projects"/>
        <JobHistory id='jobs' title="Experience"/>
      </AlternatingBackground>

    </div>
  );
};

export default HomePage;

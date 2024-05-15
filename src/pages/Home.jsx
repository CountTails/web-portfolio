import React, { useRef } from 'react';

import Navbar from '../components/NavigationBar';
import GreetingCard from '../components/GreetingCard';
import SkillBadge from '../components/SkillBadge';
import ExpandableSummary from '../components/ExpandableSummary';
import ImageDetails from '../components/ImageDetails';

import CardDisplay from '../layouts/CardDisplay';
import Card from '../layouts/ItemCard';
import SummaryCollection from '../layouts/SummaryCollection';

import logo from '../assets/react.svg';
import bg from '../assets/background.jpg';

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

  const summaries = [
    { summary: 'Summary 1', details: 'Details 1' },
    { summary: 'Summary 2', details: 'Details 2' }
  ]

  return (
    <div className="bg-gray-800 text-gray-200">
      <Navbar title="Homepage" navigationLinks={otherPages} />
      <GreetingCard greeting={greeting} phraseRotation={captions} scrollDownTarget={targetRef} />
      <div ref={targetRef} className='text-center text-2xl mt-4'>
        <CardDisplay>
          <Card logo={logo} title="ReactJS" text="ReactJS is a library for creating web components" button="Learn More" buttonLink="https://react.dev" />
          <Card logo={logo} title="ReactJS" text="ReactJS is a library for creating web components" button="Learn More" buttonLink="https://react.dev" />
          <Card logo={logo} title="ReactJS" text="ReactJS is a library for creating web components" button="Learn More" buttonLink="https://react.dev" />
          <Card logo={logo} title="ReactJS" text="ReactJS is a library for creating web components" button="Learn More" buttonLink="https://react.dev" />
          <Card logo={logo} title="ReactJS" text="ReactJS is a library for creating web components" button="Learn More" buttonLink="https://react.dev" />
          <Card logo={logo} title="ReactJS" text="ReactJS is a library for creating web components" button="Learn More" buttonLink="https://react.dev" />
          <Card logo={logo} title="ReactJS" text="ReactJS is a library for creating web components" button="Learn More" buttonLink="https://react.dev" />
          {/* Add more items here */}
        </CardDisplay>
      </div>
      <div>
        <CardDisplay>
          <SkillBadge label="ReactJS" percentage={45} color="#0000ff" />
          <SkillBadge label="ReactJS" percentage={78} color="#00ff00" />
          <SkillBadge label="ReactJS" percentage={90} color="#ff0000" />
        </CardDisplay>
      </div>
      <div>
        <SummaryCollection>
          {summaries.map((summary, index) => {
            return (
              <ExpandableSummary key={index} summary={summary.summary} details={summary.details} />
            )
          })}
        </SummaryCollection>
      </div>
    </div>
  );
};

export default HomePage;

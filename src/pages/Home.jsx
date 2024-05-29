import React, { useRef } from 'react';
import logo from '../assets/react.svg';

import Navbar from '../components/NavigationBar';
import GreetingCard from '../components/GreetingCard';

import Container from '../layouts/CardDisplay';
import { Card, CardLogo, CardTitle, CardImage, CardText, CardButton } from '../layouts/ItemCard';
import AlternatingBackground from '../layouts/AlternatingBackground';

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
      <AlternatingBackground>
        <section ref={targetRef}>
          <Container>
            <Card>
              <CardTitle> Learn React! </CardTitle>
              <CardLogo src={logo} alt="React Logo" />
              <CardText> React is a JavaScript library for developing web components </CardText>
              <CardButton href="https://react.dev"> Learn More </CardButton>
            </Card>
            <Card>
              <CardLogo src={logo} alt="React Logo" />
              <CardTitle> Learn React! </CardTitle>
              <CardText> React is a JavaScript library for developing web components </CardText>
            </Card>
            <Card>
              <CardLogo src={logo} alt="React Logo" />
              <CardTitle> Learn React! </CardTitle>
              <CardText> React is a JavaScript library for developing web components </CardText>
              <CardButton href="https://react.dev"> Learn More </CardButton>
            </Card>
            <Card>
              <CardLogo src={logo} alt="React Logo" />
              <CardTitle> Learn React! </CardTitle>
              <CardText> React is a JavaScript library for developing web components </CardText>
              <CardButton href="https://react.dev"> Learn More </CardButton>
            </Card>
            <Card>
              <CardLogo src={logo} alt="React Logo" />
              <CardTitle> Learn React! </CardTitle>
              <CardText> React is a JavaScript library for developing web components </CardText>
              <CardButton href="https://react.dev"> Learn More </CardButton>
            </Card>
          </Container>
        </section>
        <section>Section 2</section>
        <section>Section 3</section>
      </AlternatingBackground>

    </div>
  );
};

export default HomePage;

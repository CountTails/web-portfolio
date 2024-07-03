import React from 'react';
import logo from '@/assets/react.svg';

import Navbar from '@/layouts//NavigationBar';
import AlternatingBackground from '@/layouts/AlternatingBackground';
import FlexStage from '@/layouts/FlexStage';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


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
        <section>
          <FlexStage>
            <Card className='bg-cyan-600 w-full'>
              <CardHeader>
                <CardTitle className='text-center'>How's it going? I'm Nathan</CardTitle>
                <CardDescription className='text-center'>Here's a little bit about me!</CardDescription>
              </CardHeader>
              <CardContent>
                <FlexStage>
                  <img src={logo} />
                </FlexStage>
              </CardContent>
              <CardFooter>
                <FlexStage>
                  <p className='text-left'>Here is my resume</p>
                  <p className='text-right'>Here are my sorcial profiles</p>
                </FlexStage>
              </CardFooter>
            </Card>
          </FlexStage>
        </section>
        <section>Section 2</section>
        <section>Section 3</section>
      </AlternatingBackground>

    </div>
  );
};

export default HomePage;

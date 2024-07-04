import React from 'react';
import avatar from '@/assets/avatar.png';

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
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';


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
                  <img src={avatar} className='border-4 border-zinc-800 rounded-full scale-75' />
                </FlexStage>
              </CardContent>
              <CardFooter>
                <FlexStage>
                  <Button className='text-white hover:text-black bg-zinc-800 hover:bg-slate-200' variant='outline'>My Resume</Button>
                  <FlexStage>
                    <Badge className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black my-2'> <FaEnvelope /></Badge>
                    <Badge className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black my-2'> <FaGithub /></Badge>
                    <Badge className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black my-2'> <FaLinkedin /></Badge>
                  </FlexStage>
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

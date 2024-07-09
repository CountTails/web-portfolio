import React from 'react';

import Avatar from '@/content/about/_Avatar';
import ProfessionalSummary from '@/content/about/_ProfessionalSummary';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const InfoCard = () => {
    return (
        <section className='container flex justify-center'>
            <Card className='bg-cyan-600 w-full m-4 md:m-8 lg:m-12'>
              <CardHeader>
                <CardTitle className='text-center'>How's it going? I'm Nathan</CardTitle>
                <CardDescription className='text-center'>Here's a little bit about me!</CardDescription>
              </CardHeader>
              <CardContent>
                <Avatar />
              </CardContent>
              <CardFooter className='container flex flex-wrap justify-center'>
                <ProfessionalSummary />
              </CardFooter>
            </Card>
        </section>
    )
}

export default InfoCard;
import React from 'react';

import Avatar from '@/content/about/_Avatar';
import ProfessionalSummary from '@/content/about/_ProfessionalSummary';

import AboutConfig from '@/data/about.config';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const InfoCard = ({id}) => {
    return (
        <section id={id} className='container flex justify-center'>
            <Card className='bg-cyan-600 w-full m-4 md:m-8 lg:m-12'>
              <CardHeader>
                <CardTitle className='text-center'>{AboutConfig.infocard.header.title}</CardTitle>
                <CardDescription className='text-center'>{AboutConfig.infocard.header.description}</CardDescription>
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
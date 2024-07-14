import React from 'react';

import logo from '@/assets/react.svg'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import SkillDrawer from '@/content/skills/SkillDrawer';


const SkillCategory = () => {
    return (
        <Card className='bg-cyan-500 my-4'>
            <CardHeader>
                <CardTitle className='text-center'>
                    <span>Skill Name</span>
                </CardTitle>
            </CardHeader>
            <CardContent className='container flex flex-wrap justify-center'>
                    <img src={logo}/>
            </CardContent>
            <CardFooter>
                <SkillDrawer />
            </CardFooter>
            
        </Card>
    )
}


export default SkillCategory;
import React from 'react';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

import SkillDrawer from '@/content/skills/SkillDrawer';

import SiteConfig from '@/data/site.config';
import skillConfig from '@/data/skills.config';


const SkillCategory = ({name}) => {
    const skill = skillConfig.skillSets.filter((skill) => skill.name === name)[0];
    return (
        <Card className='bg-cyan-500 my-4'>
            <CardHeader>
                <CardTitle className='text-center'>
                    <span>{skill.name}</span>
                </CardTitle>
            </CardHeader>
            <CardContent className='container flex flex-wrap justify-center'>
                    <img src={`${SiteConfig.url}/images/${skill.image}`}/>
            </CardContent>
            <CardFooter>
                <SkillDrawer subskills={skill.subSkills}/>
            </CardFooter>
        </Card>
    )
}


export default SkillCategory;
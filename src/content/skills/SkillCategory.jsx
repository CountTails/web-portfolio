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


const SkillCategory = ({skillCategoryName, categoryImage, categorySkills}) => {
    return (
        <Card className='bg-cyan-500 my-4'>
            <CardHeader>
                <CardTitle className='text-center'>
                    {skillCategoryName}
                </CardTitle>
            </CardHeader>
            <CardContent className='container flex flex-wrap justify-center'>
                    <img src={`${SiteConfig.url}/images/${categoryImage}`}/>
            </CardContent>
            <CardFooter>
                <SkillDrawer skills={categorySkills}/>
            </CardFooter>
        </Card>
    )
}


export default SkillCategory;
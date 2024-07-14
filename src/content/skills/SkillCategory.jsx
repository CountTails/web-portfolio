import React from 'react';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";


const SkillCategory = () => {
    return (
        <Card className='bg-cyan-500 my-4'>
            <CardHeader>
                <CardTitle>Skill name</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Skill Description</p>
            </CardContent>
            <CardFooter>
                <p>Skill details</p>
            </CardFooter>
            
        </Card>
    )
}


export default SkillCategory;
import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button";

import CourseList from "@/content/education/CourseList";

const SchoolDetails = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-center'>School Name</CardTitle>
                <CardDescription className='grid grid-cols-2'>
                    <p className='justify-self-start'>Degree: awarded</p>
                    <p className='justify-self-end'>Years attended: 2000-2004</p>
                    <p className='justify-self-start'>Standing: Graduated</p>
                    <p className='justify-self-end'>Cumulative GPA: 3.500 out of 4.000</p>
                </CardDescription>
                <CardContent>
                <Button 
                    className='text-white hover:text-black bg-zinc-800 hover:bg-slate-200'
                    variant='outline'
                    asChild>
                        <a href="https://www.example.com">Unofficial Transcript</a>
                </Button>
                    <CourseList />
                </CardContent>
            </CardHeader>
        </Card>
    )
};

export default SchoolDetails;
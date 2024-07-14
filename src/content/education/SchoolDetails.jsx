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
        <Card className='bg-cyan-800'>
            <CardHeader>
                <CardTitle className='text-center'>School Name</CardTitle>
                <CardDescription className='grid grid-cols-1 justify-items-center md:grid-cols-2'>
                    <p className='md:justify-self-start'>Degree: awarded</p>
                    <p className='md:justify-self-end'>Years attended: 2000-2004</p>
                    <p className='md:justify-self-start'>Standing: Graduated</p>
                    <p className='md:justify-self-end'>Cumulative GPA: 3.500 out of 4.000</p>
                </CardDescription>
                <CardContent>
                    <div className="grid grid-cols-1 justify-items-center md:grid-cols-2">
                        <p className='md:justify-self-start'>Courses Taken @ School Name</p>
                        <Button 
                            className='md:justify-self-end text-white hover:text-black bg-zinc-800 hover:bg-slate-200'
                            variant='outline'
                            aschild>
                            <a href="https://www.example.com">Unofficial Transcript</a>
                        </Button>
                    </div>
                
                    <CourseList />
                </CardContent>
            </CardHeader>
        </Card>
    )
};

export default SchoolDetails;
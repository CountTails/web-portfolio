import React from "react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
    return (
        <Card className='bg-cyan-500 my-4 text-center'>
            <CardHeader>
                <CardTitle>Project name</CardTitle>
                <CardDescription className='grid justify-items-center grid-cols-2'>
                    <p className='md:justify-self-start'>Role:</p>
                    <p className='md:justify-self-end'>Contributor</p>
                    <p className='md:justify-self-start'>Active time:</p>
                    <p className='md:justify-self-end'>2 months</p>
                    <p className='md:justify-self-start'>Last contributed:</p>
                    <p className='md:justify-self-end'>January 2020</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec massa sapien.</p>
            </CardContent>
            <CardFooter className='grid justify-items-center grid-cols-2'>
                <Button 
                    className='text-white hover:text-black bg-zinc-800 hover:bg-slate-200'
                    variant='outline'
                    aschild>
                    <a href='https://www.example.com'>Repository</a>
                </Button>
                <Button 
                    className='text-white hover:text-black bg-zinc-800 hover:bg-slate-200'
                    variant='outline'
                    aschild>
                    <a href='https://www.example.com'>Live Demo</a>
                </Button>
            </CardFooter>
        </Card>
    )
};

export default ProjectDetails;
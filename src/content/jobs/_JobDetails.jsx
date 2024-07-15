import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const JobDetails = () => {
    return (
        <Card className='bg-cyan-500 my-4 text-center'>
            <CardHeader>
                <CardTitle>Job Title @ Company Name</CardTitle>
                <CardDescription className='grid justify-items-center grid-cols-2'>
                    <p className='md:justify-self-start'>Role:</p>
                    <p className='md:justify-self-end'>Contributor</p>
                    <p className='md:justify-self-start'>Tenure:</p>
                    <p className='md:justify-self-end'>June 2000 - December 2002</p>
                </CardDescription>
            </CardHeader>
            <CardContent className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
                <div className='border border-solid rounded-md p-4'>
                    <p>What I accomplished</p>
                    <p>Details of accomplishments</p>
                                                
                </div>
                <div className='border border-solid rounded-md p-4'>
                    <p>Accomplishment Route</p>
                    <p>Details on how accomplishment was accomplished</p>
                </div>
                <div className='border border-solid rounded-md p-4'>
                    <p>Results of accomplishment</p>
                    <p>Details on results of work</p>
                </div>
            </CardContent>
        </Card>
    )
};

export default JobDetails;
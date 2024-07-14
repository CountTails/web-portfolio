import React from "react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

const ProjectDetails = () => {
    return (
        <Card className='bg-cyan-500 my-4'>
            <CardHeader>
                <CardTitle>Project name</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Project Description</p>
            </CardContent>
            <CardFooter>
                <p>Project details</p>
            </CardFooter>
            
        </Card>
    )
};

export default ProjectDetails;
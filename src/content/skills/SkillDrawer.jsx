import React from "react";

import logo from '@/assets/react.svg'

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

import SiteConfig from "@/data/site.config";

const SkillDrawer = ({subskills}) => {
    console.log(subskills);
    subskills.sort((skillA, skillB) => skillA.priority - skillA.priority);
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" className='text-white hover:text-black bg-zinc-800 hover:bg-slate-200'>Related Skills</Button>
            </DrawerTrigger>
            <DrawerContent className='bg-cyan-600'>
                <DrawerHeader>
                    <DrawerTitle className='text-center'>Related Skills</DrawerTitle>
                </DrawerHeader>
                    <ScrollArea className='h-[50vh]'>
                        {
                            subskills.map((s) => {
                                return (
                                    <Card className='my-8 mx-6 bg-cyan-800'>
                                        <CardHeader className='text-center'>
                                            <CardTitle>{s.name}</CardTitle>
                                            <CardDescription className='container flex flex-wrap justify-center'>
                                                <img src={`${SiteConfig.url}/images/${s.image}`} />
                                                <Separator className='my-4'/>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
                                            <div className='border border-solid rounded-md p-4'>
                                                <p>{`Skill ${s.name} acquirement`}</p>
                                                <p>{`Description of how skill ${s.name} was acquired`}</p>
                                                
                                            </div>
                                            <div className='border border-solid rounded-md p-4'>
                                                <p>{`Skill ${s.name} usage`}</p>
                                                <p>{`Description of how skill ${s.name} has been used`}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })
                        }
                    </ScrollArea>   
                
            </DrawerContent>
        </Drawer>
    )
};

export default SkillDrawer;
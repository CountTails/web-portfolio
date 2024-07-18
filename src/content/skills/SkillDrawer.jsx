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

const SkillDrawer = ({skills}) => {
    console.log(skills);
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
                            skills.map((s) => {
                                return (
                                    <Card className='my-8 mx-6 bg-cyan-800'>
                                        <CardHeader className='text-center'>
                                            <CardTitle>{s.skillName}</CardTitle>
                                            <CardDescription className='container flex flex-wrap justify-center'>
                                                <img src={`${SiteConfig.url}/images/${s.skillImage}`} />
                                                <Separator className='my-4'/>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
                                            <div className='border border-solid rounded-md p-4 w-full'>
                                                <span className="text-xl text-bold">{`Skill ${s.skillName} acquirement`}</span>
                                                <Separator className='my-4'/>
                                                <ol className="list-inside list-decimal">
                                                    {
                                                        s.acquirement.map((step) => {
                                                            return (
                                                                <li>{step}</li>
                                                            );
                                                        })
                                                    }
                                                </ol>                                
                                            </div>
                                            <div className='border border-solid rounded-md p-4 w-full'>
                                            <span className="text-xl text-bold">{`Skill ${s.skillName} utilization`}</span>
                                                <Separator className='my-4'/>
                                                <ol className="list-inside list-decimal">
                                                    {
                                                        s.utilization.map((step) => {
                                                            return (
                                                                <li>{step}</li>
                                                            );
                                                        })
                                                    }
                                                </ol> 
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
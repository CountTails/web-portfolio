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



const SkillDrawer = () => {
    const arr = [1, 2, 3, 4, 5]
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" className='text-white hover:text-black bg-zinc-800 hover:bg-slate-200'>Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent className='bg-cyan-600'>
                <DrawerHeader>
                    <DrawerTitle className='text-center'>Related Skills</DrawerTitle>
                </DrawerHeader>
                    <ScrollArea className='h-[50vh]'>
                        {
                            arr.map((i) => {
                                return (
                                    <Card className='my-8 mx-6 bg-cyan-800'>
                                        <CardHeader className='text-center'>
                                            <CardTitle>{`Skill ${i}`}</CardTitle>
                                            <CardDescription className='container flex flex-wrap justify-center'>
                                                <img src={logo} />
                                                <Separator className='my-4'/>
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>
                                            <div className='border border-solid rounded-md p-4'>
                                                <p>{`Skill ${i} acquirement`}</p>
                                                <p>{`Description of how skill ${i} was acquired`}</p>
                                                
                                            </div>
                                            <div className='border border-solid rounded-md p-4'>
                                                <p>{`Skill ${i} usage`}</p>
                                                <p>{`Description of how skill ${i} has been used`}</p>
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
import React from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import JobDetails from '@/content/jobs/_JobDetails';

const JobHistory = ({id}) => {
    const schools = [
        'job 1',
        'job 2',
        'job 3'
    ];

    return (
        <section id={id}>
            <div className='mx-12 py-16'>
                <Accordion type='single' collapsible className='w-full'>
                    {
                        schools.map((s) => {
                            return (
                                <AccordionItem value={s}>
                                    <AccordionTrigger>{`Summary of ${s}`}</AccordionTrigger>
                                    <AccordionContent>
                                        <JobDetails />
                                    </AccordionContent>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </section>
    )

};

export default JobHistory;
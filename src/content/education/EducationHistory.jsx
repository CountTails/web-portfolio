import React from 'react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import SchoolDetails from '@/content/education/SchoolDetails';

const EducationHistory = () => {
    const schools = [
        'school 1',
        'school 2',
        'school 3'
    ];

    return (
        <section>
            <div className='mx-12 py-16'>
                <Accordion type='single' collapsible className='w-full'>
                    {
                        schools.map((s) => {
                            return (
                                <AccordionItem value={s}>
                                    <AccordionTrigger>{`Summary of ${s}`}</AccordionTrigger>
                                    <AccordionContent>
                                        <SchoolDetails />
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

export default EducationHistory;
import React from 'react';

import { Button } from "@/components/ui/button";

import AboutConfig from '@/data/about.config';

const ResumeLink = () => {
    return <Button 
        className='text-white hover:text-black bg-zinc-800 hover:bg-slate-200'
        variant='outline'
        asChild>
            <a href={AboutConfig.infocard.footer.resumeFile}>My Resume</a>
        </Button>
}

export default ResumeLink;
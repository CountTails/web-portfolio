import React from 'react';

import { Button } from "@/components/ui/button";

import AboutConfig from '@/data/about.config';
import SiteConfig from '@/data/site.config';

const ResumeLink = () => {
    const resumePath = AboutConfig.infocard.footer.resumeFile;
    const domain = SiteConfig.url;
    return <Button 
        className='text-white hover:text-black bg-zinc-800 hover:bg-slate-200'
        variant='outline'
        asChild>
            <a href={`${domain}/${resumePath}`}>My Resume</a>
        </Button>
}

export default ResumeLink;
import React from 'react';

import { Badge} from "@/components/ui/badge";

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import AboutConfig from '@/data/about.config';

const SocialLinks = () => {
    const email = AboutConfig.infocard.footer.socialLinks.email;
    const github = AboutConfig.infocard.footer.socialLinks.github;
    const linkedin = AboutConfig.infocard.footer.socialLinks.linkedin;
    return (
        <div className='grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-row-1 justify-items-center'>
            <Badge 
                className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black sm:my-0 my-2'
                asChild
            >
                <a href={`mailto:${email}`} ><FaEnvelope /></a>
            </Badge>
            <Badge 
                className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black sm:my-0 my-2'
                asChild
            > <a href={`https://github.com/${github}`} target='_blank'><FaGithub /></a>
            </Badge>
            <Badge
                className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black sm:my-0 my-2'
                asChild
            > <a href={`https://linkedin.com/in/${linkedin}`} target='_blank' ><FaLinkedin /></a>
            </Badge>
        </div>
    )
}

export default SocialLinks;
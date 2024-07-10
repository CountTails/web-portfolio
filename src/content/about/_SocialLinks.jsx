import React from 'react';
import { Link } from 'react-router-dom';

import { Badge, badgeVariants } from "@/components/ui/badge";

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import AboutConfig from '@/data/about.config';

const SocialLinks = () => {
    return (
        <div className='grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-row-1 justify-items-center'>
            <Badge 
                className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black sm:my-0 my-2'
                asChild
            >
                <a href={AboutConfig.infocard.footer.socialLinks.email} ><FaEnvelope /></a>
            </Badge>
            <Badge 
                className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black sm:my-0 my-2'
                asChild
            > <a href={AboutConfig.infocard.footer.socialLinks.github} ><FaGithub /></a>
            </Badge>
            <Badge
                className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black sm:my-0 my-2'
                asChild
            > <a href={AboutConfig.infocard.footer.socialLinks.linkedin} ><FaLinkedin /></a>
            </Badge>
        </div>
    )
}

export default SocialLinks;
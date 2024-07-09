import React from 'react';

import { Badge } from "@/components/ui/badge";

import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialLinks = () => {
    return (
        <div className='grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-row-1 justify-items-center'>
            <Badge className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black sm:my-0 my-2'> <FaEnvelope /></Badge>
            <Badge className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black sm:my-0 my-2'> <FaGithub /></Badge>
            <Badge className='bg-zinc-800 mx-2 hover:bg-slate-200 hover:text-black sm:my-0 my-2'> <FaLinkedin /></Badge>
        </div>
    )
}

export default SocialLinks;
import React from 'react';

import SocialLinks from '@/content/about/_SocialLinks';
import ResumeLink from '@/content/about/_ResumeLink';

const ProfessionalSummary = () => {
    return (
        <div className='grid gap-4 grid-cols-1 grid-rows-2'>
            <ResumeLink />
            <SocialLinks />
        </div>
    ) 
}

export default ProfessionalSummary;
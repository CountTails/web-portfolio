import React from 'react';

import AboutConfig from '@/data/about.config';
import SiteConfig from '@/data/site.config';

const Avatar = () => {
    const domain = SiteConfig.url;
    const avatarPath = AboutConfig.infocard.content.photo;
    return (
        <div className='container flex justify-center'>
            <img src={`${domain}/images/${avatarPath}`} className='border-4 border-zinc-800 rounded-full scale-75' />
        </div>
    )
}

export default Avatar;
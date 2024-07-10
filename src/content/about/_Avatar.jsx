import React from 'react';

import AboutConfig from '@/data/about.config';

const Avatar = () => {
    return (
        <div className='container flex justify-center'>
            <img src={AboutConfig.infocard.content.photo} className='border-4 border-zinc-800 rounded-full scale-75' />
        </div>
    )
}

export default Avatar;
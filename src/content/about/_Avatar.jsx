import React from 'react';

import avatar from '@/assets/avatar.png';

const Avatar = () => {
    return (
        <div className='container flex justify-center'>
            <img src={avatar} className='border-4 border-zinc-800 rounded-full scale-75' />
        </div>
    )
}

export default Avatar;
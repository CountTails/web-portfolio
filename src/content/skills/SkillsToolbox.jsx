import React from 'react';

import SkillCategory from '@/content/skills/SkillCategory';

const SkillsToolbox = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return (
        <section>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-16'>
                {arr.map((i) => {
                    return (
                        <SkillCategory />
                    )
                })}
            </div>
        </section>
    )
};

export default SkillsToolbox;
import React from 'react';

import SkillCategory from '@/content/skills/SkillCategory';

import skillConfig from '@/data/skills.config';

const SkillsToolbox = ({id}) => {
    return (
        <section id={id}>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-16'>
                {skillConfig.skillSets.map((skill) => {
                    return (
                        <SkillCategory {...skill}/>
                    )
                })}
            </div>
        </section>
    )
};

export default SkillsToolbox;
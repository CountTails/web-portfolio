import React from "react";

import ProjectDetails from "@/content/projects/_ProjectDetails";

const ProjectList = ({id}) => {
    const projectArr = [1, 2, 3, 4, 5, 6];
    return (
        <section id={id}>
            <div className='container grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center py-16'>
                {projectArr.map((i) => {
                    return (
                        <ProjectDetails />
                    )
                })}
            </div>
        </section>
    )
};

export default ProjectList;
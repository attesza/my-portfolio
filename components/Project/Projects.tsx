import React from 'react';
import ProjectCard from "@/components/Project/ProjectCard";
import {spans} from "next/dist/build/webpack/plugins/profiling-plugin";
import {Trans, useTranslation} from "react-i18next";
import {projects} from "@/utils/datas";


function Projects() {
    const {t, i18n} = useTranslation();
    return (
        <div className='border-b-2 border-gray-500'>
            <div className='mb-10'>
                <h1 className='mb-2 text-4xl font-extrabold leading-tight capitalize '><Trans t={t}>projects</Trans></h1>
            </div>
            <div
                className='pt-20 mb-20 grid grid-cols-2 gap-5 '>
                {projects.map(({id, title, description, url,img}) => {
                    return <ProjectCard key={id} id={id} url={url} alt={description} title={title} img={img}/>
                })}

            </div>
        </div>

    );
}

export default Projects;

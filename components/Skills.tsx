import React from 'react';
import ProgressBar from "@/components/ProgressBar";
import {Trans, useTranslation} from "react-i18next";
import {skills} from "@/utils/datas";



function Skills() {
    const {t, i18n} = useTranslation();
    return (
        <div
            className='pb-40 text-center md:text-left md:flex-row max-w-7xl justify-evenly border-b-2 border-gray-500 '>
            <div className='mb-10'>
                <h1 className='mb-2 text-4xl font-extrabold leading-tight  capitalize'> {t('skills')}</h1>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {skills.map(({id, title, value}) => (
                    <ProgressBar key={id} title={title} value={value}/>
                ))}
            </div>
            <div className='mt-20 mb-10'>
                <h1 className='mb-2 text-4xl font-extrabold leading-tight capitalize '> {t('lang_skills')}</h1>
            </div>
            <ProgressBar  title={t('english')} value={3}/>
        </div>
    );
}

export default Skills;

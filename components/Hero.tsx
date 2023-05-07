import React from 'react';
import Image from "next/image";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import {useTranslation} from "react-i18next";

function Hero() {
    const {t, i18n} = useTranslation();
    const [text, count] = useTypewriter({
        words: [`${t('hi_hero')} `,
            "Alcsuti Attila"]
        , loop: true, delaySpeed: 2000
    })


    return (
        <div className='pb-20 border-b-2 border-gray-500 '>
            <div
                className='relative h-64 right-0 md:right-64 p-14 bg-white dark:bg-[rgb(18,24,40)] rounded-bl-full rounded-tl-full'>
                <div className='table  align-middle'>
                    <h1 className='text-black dark:text-white font-bold text-6xl leading-tight'><span
                        className="mr-3 ">{text}</span>
                        <Cursor cursorColor="#F7AB0A"/></h1>
                </div>
            </div>
            <div>
                {t('motivation')}
            </div>
        </div>
    );
}

export default Hero;

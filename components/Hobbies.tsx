import React from 'react';
import {Trans, useTranslation} from "react-i18next";

function Hobbies() {
    const {t, i18n} = useTranslation();
    return (
        <div>
            <h1 className='mb-40 text-4xl font-extrabold leading-tight capitalize '><Trans t={t}>hobbies</Trans>
            </h1>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-28 xl:gap-4'>
                <div
                    className="bg-white w-[300px] inline-block m-auto rounded-lg  relative text-center hover:skew-y-12 transition-all duration-300">
                    <div
                        className="relative h-[220px] mb-6 rounded-t-lg bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg')]">
                        <img
                            className='absolute w-max h-[330px] -top-2/4 -left-6 hover:scale-125 hover:-skew-y-12 duration-300 transition-all'
                            src={'../assets/photos.png'} alt="archer"/>
                    </div>
                    <div className="uppercase text-xl text-black mb-10 font-semibold"><Trans t={t}>photography</Trans></div>
                </div>
                <div
                    className="bg-white w-[300px] inline-block m-auto rounded-lg  relative text-center hover:skew-y-12 transition-all duration-300">
                    <div
                        className="relative h-[220px] mb-6 rounded-t-lg bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/giant-bg.jpg')]">
                        <img
                            className='absolute w-max h-[330px] -top-2/4 right-12 hover:scale-125 hover:-skew-y-12 duration-300 transition-all'
                            src={'../assets/reading.png'} alt="archer"/>
                    </div>
                    <div className="uppercase text-xl text-black mb-10 font-semibold"><Trans t={t}>reading</Trans></div>
                </div>
            </div>
        </div>
    );
}

export default Hobbies;

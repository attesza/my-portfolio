import React, {Fragment, useEffect, useState} from 'react';
import {StopCircleIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import {motion} from "framer-motion";
import {Trans, useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {languageChange} from "@/redux/langActions";
import {RootState} from "@/store/store";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

function Header() {
    const {t, i18n} = useTranslation();
    const {language} = useSelector((state: RootState) => state.lang)
    const [educationModal, setEducationModal] = useState(false);
    const [experienceModal, setExperienceModal] = useState(false);
    useEffect(() => {
        if (language) {
            i18n.changeLanguage(language)
        }
    }, [i18n, language])
    const dispatch = useDispatch<any>();
    const changeLanguage = (e: any) => {
        dispatch(languageChange(e.target.value))
        i18n.changeLanguage(e.target.value);
    }
    let [isOpen, setIsOpen] = useState(false);

    const closeModalEducation = () => {
        setEducationModal(false);
    }

    const openModalEducation = () => {
        setEducationModal(true);
    }
    const closeModalExperience = () => {
        setExperienceModal(false);
    }

    const openModalExperience = () => {
        setExperienceModal(true);
    }
    return (
        <>
            <header
                className="sticky top-0 p-5 flex items-center bg-white dark:bg-[rgb(18,24,40)] justify-between  mx-auto z-20 xl:items-center">

                <div className="h-full items-center hidden md:flex ">
                    <StopCircleIcon className='w-9 h-9 mr-4'/>
                    <span className='capitalize'><Trans t={t}>portfolio</Trans><br/><Trans t={t}>page</Trans></span>
                </div>
                <div
                    className='w-full justify-items-center grid grid-cols-3 sm:grid-cols-4 gap-4 md:flex flex-row sm:space-x-2 xl:space-x-12 flex-wrap md:space-y-4 md:justify-end'>
                    <select value={i18n.language} onChange={changeLanguage} id="underline_select"
                            className="text-xs text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 px-6 py-2  dark:text-gray-500 dark:border-gray-700 focus:outline-none ">
                        <option value="hu">HU</option>
                        <option value="en">EN</option>
                    </select>
                    <Link href="#about">
                        <button className="heroButton"><Trans t={t}>about</Trans></button>
                    </Link>
                    <button onClick={openModalEducation} className="heroButton"><Trans
                        t={t}>education</Trans></button>
                    <button onClick={openModalExperience} className="heroButton"><Trans
                        t={t}>experience</Trans></button>
                    <Link href="#skills">
                        <button className="heroButton"><Trans t={t}>skills</Trans></button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton"><Trans t={t}>projects</Trans></button>
                    </Link>
                    <Link href="#contact">
                        <motion.div
                            initial={{
                                x: 500,
                                opacity: 0,
                                scale: 0.5,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{duration: 1}}
                            className="heroButton"
                        >
                            <Trans t={t}>contact</Trans>
                        </motion.div>
                    </Link>
                </div>
            </header>
            <Education isOpen={educationModal} closeModal={closeModalEducation}/>
            <Experience isOpen={experienceModal} closeModal={closeModalExperience}/>
        </>
    );
}

export default Header;

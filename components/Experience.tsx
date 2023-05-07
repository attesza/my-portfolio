import React, {Fragment, useEffect, useState} from 'react';
import {Trans, useTranslation} from "react-i18next";
import {Dialog, Transition} from "@headlessui/react";
import {Chrono} from "react-chrono";
import {chronosTheme, items, itemsEn, itemsEnExperience, itemsExperience} from "@/utils/datas";
type Props = {
    isOpen: boolean,
    closeModal: any
}
function Experience({isOpen, closeModal}: Props) {
    const {t, i18n} = useTranslation();
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
        }
    }, [])
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed  inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
            >
                <div className=" px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0"/>
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
              &#8203;
            </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div
                            className="inline-block  dark:bg-[rgb(18,24,40)]  p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 dark:text-white"
                            >
                                <Trans
                                    t={t}>education</Trans>
                            </Dialog.Title>
                            <div className="mt-2 w-[50vw] h-[50vh]">
                                <Chrono
                                    disableNavOnKey
                                    scrollable
                                    theme={chronosTheme(isDark)}
                                    hideControls={true}
                                    items={i18n.language == 'hu' ? itemsExperience : itemsEnExperience}
                                    mode="VERTICAL"/>
                            </div>

                            <div className="mt-4 text-center">
                                <button
                                    type="button"
                                    className="bg-[#F7AB0A]  px-10 rounded-md text-black font-bold text-lg"
                                    onClick={closeModal}
                                >
                                    <Trans
                                        t={t}>close</Trans>
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>

    );
}

export default Experience;

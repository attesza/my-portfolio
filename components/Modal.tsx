import React, {Fragment, ReactNode} from 'react';
import {Dialog, Transition} from "@headlessui/react";
import {useTranslation} from "react-i18next";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

function Modal(props: ModalType) {
    const {t, i18n} = useTranslation();
    return (
        <Transition appear show={props.isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={props.toggle}
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
                            className="inline-block  dark:bg-[#1F2737] w-full max-w-xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">

                            <div className="mt-2">
                                {props.children}
                            </div>

                            <div className="mt-4 text-center">
                                <button
                                    type="button"
                                    className="bg-[#F7AB0A]  px-10 rounded-md text-black font-bold text-lg"
                                    onClick={props.toggle}
                                >
                                    {t('close')}
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

export default Modal;

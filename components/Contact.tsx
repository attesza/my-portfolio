import React from 'react';
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/20/solid";
import {SubmitHandler, useForm} from "react-hook-form";
import {Trans, useTranslation} from "react-i18next";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}
type Props = {}


function Contact({}: Props) {
    const {t, i18n} = useTranslation();
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<Inputs>({defaultValues: {name: '', email: '', subject: '', message: ''}, mode: 'onTouched'});
    const {name, email, subject, message} = watch();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:alcsutia@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    };

    console.log(errors)
    return (
        <>
            <div className="flex flex-col space-y-10 border-b-2 border-gray-500  pb-40">
                <h1 className='mb-2 text-4xl font-extrabold leading-tight  capitalize'><Trans t={t}>contact</Trans></h1>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">06202686853</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">alcsutia@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                        <p className="text-2xl">9022 Győr, Teszt utca 12.</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-wrap space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input required {...register('name', {required: t('required')})} placeholder={t("name")}
                               type="text"
                               className="contactInput"/>
                        <input required {...register('email', {
                            required: t('required'), pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: t('valid_email'),
                            },
                        })} placeholder={t("email")} type="email"
                               className="contactInput"/>
                    </div>
                    <input required {...register('subject', {required: t('required')})} placeholder={t("subject")}
                           className="contactInput" type="text"/>
                    <textarea required {...register('message', {required: t('required')})} placeholder={t("message")}
                              className="contactInput"/>
                    {errors && errors.email && <span>{errors.email.message}</span>}
                    {!name.length || !email.length || !message.length || !subject.length &&
                        <div
                            className="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 "
                            role="alert">
                            <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor"
                                 viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Info</span>
                            <span>{t('required')}</span></div>}
                    <button type="submit"
                            disabled={errors.email?.message != null || errors.name?.message != null || errors.email?.message != null || errors.subject?.message != null}
                            className="bg-[#F7AB0A] sm:px-0 md:px-2 xl:px-14 rounded-md text-black font-bold text-lg disabled:bg-gray-400">
                        <Trans t={t}>submit</Trans>
                    </button>
                </form>
            </div>
        </>
    );
}

export default Contact;

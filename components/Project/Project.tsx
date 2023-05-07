import React from 'react';
import {useRouter} from "next/router";
import { projects} from "@/utils/datas";
import {Trans, useTranslation} from "react-i18next";

type Props = {
    id: number
}

function Project({id}: Props) {
    const {t, i18n} = useTranslation();
    const data = projects.find(element => element.id === id)
    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="dark:grayscale"
                 src={data?.img}
                 alt={data?.alt_description}/>
            <div className='flex text-center p-10 dark:text-white'>
                {i18n.t(data?.description as string) as string}
            </div>
        </>
    );
}

export default Project;

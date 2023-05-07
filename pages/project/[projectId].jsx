import React from 'react';
import {useRouter} from "next/router";
import Project from "../../components/Project/Project";
import Link from "next/link";

const Index = () => {
    const router = useRouter()
    const {projectId} = router.query

    return <div
        className="container mx-auto justify-center align-items flex flex-col p-40 dark:text-white absolute inset-0  dark:bg-[#1F2737]">
        <Link href={'/'}>
            <BackIcon className='w-10 h-10'/>
        </Link>
        <div className="flex items-center justify-center ">
            <Project id={Number(projectId)} pathname={router.pathname}/>
        </div>
    </div>
}
export default Index;

function BackIcon(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            {...props}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
        </svg>
    );
}

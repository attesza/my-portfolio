import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import {useRouter} from "next/router";
import Project from "@/components/Project/Project";

type Props = {
    id: number;
    title: string;
    alt: string;
    img: string;
    url: string | undefined;
}

function ProjectCard({title, alt, url, id, img}: Props) {
    const router = useRouter();

    const handleClick = (event: any) => {
        event.preventDefault();

        if (event.ctrlKey || event.button === 1) {
            window.open(url, "_blank")
        } else if (event.type === 'click') {
            router.push(`/?projectId=${id}`).then(r => r)
        }
    }

    return (
        <>
            <Modal  isOpen={!!router.query.projectId} toggle={() => router.push('/')}>
                <Project id={Number(router.query.projectId)}/>
            </Modal>
            <Link onClick={handleClick} href={`/?projectId=${id}`} as={`/project/${id}`}>
                <div className='text-center'>
                    <div className="rounded-xl relative pt-[100%] bg-[#F7AB0A] dark:bg-[#1F2737] ">
                        <Image
                            src={img}
                            alt={alt}
                            fill
                            className="p-6 top-0 left-0 object-cover rounded-2xl"
                        />
                    </div>
                    <span className=''>{title}</span>
                </div>
            </Link>
        </>
    );
}

export default ProjectCard;

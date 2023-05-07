import Image from 'next/image'
import {Inter} from 'next/font/google'
import Head from "next/head";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Project/Projects";
import Hobbies from "@/components/Hobbies";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <div
            className="bg-white dark:bg-[rgb(18,24,40)] dark:text-white  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-scroll-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
            <Head>
                <title>Portfolio</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>

            <div className='flex flex-row '>
                <div className='w-1/2 h-screen hidden md:flex'>
                    <div className='fixed w-1/2 h-full flex '>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="h-full w-full mx-auto object-cover dark:grayscale  "
                             src={'../assets/_DSC1249_01.jpg'}
                             alt=""/>
                    </div>

                </div>

                <div className='flex md:w-1/2 h-screen pt-20'>
                    <div className='flex flex-col '>
                        <section className='m-20' id="about">
                            <Hero/>
                        </section>

                        <section className='m-20' id="skills">
                            <Skills/>
                        </section>
                        <section className='m-20' id="projects">
                            <Projects/>
                        </section>
                        <section className='m-20' id="hobbies">
                            <Hobbies/>
                        </section>
                        <section className='m-20' id="contact">
                            <Contact/>
                        </section>
                    </div>
                </div>

            </div>

        </div>
    )
}

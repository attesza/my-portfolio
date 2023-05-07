import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div
          className="bg-white dark:bg-[rgb(18,24,40)] dark:text-white  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-scroll-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        <Head>
          <title>Portfolio</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
          <Header/>
      </div>
  )
}

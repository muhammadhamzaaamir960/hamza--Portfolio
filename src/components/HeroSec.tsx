import React from 'react'
import { Montserrat , Lato ,Roboto } from "next/font/google";
import Image from 'next/image';
import Picture from "@/assets/Picture.png"

const roboto = Roboto({
  weight: "700",
  subsets: ["greek"],
  style: "normal",
});


const lato = Lato({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

function HeroSec() {
  return (
    <header className='min-w-full bg-gray-100 min-h-[800px] md:min-h-screen flex flex-wrap-reverse justify-center md:justify-evenly  items-center ' >

      <div className='flex flex-col after:hidden justify-center items-center sm:mx-10 my-4 lg:mt-24'>
        <h1 className={`${lato.className} text-2xl sm:text-3xl md:text-4xl max-w-lg self-center text-center leading-normal tracking-normal my-4  `}>Greetings, I am Hamza “Modern Web Application Developer”!</h1>
        <p className={`self-center text-center text-xl font-medium text-gray-700 max-w-xl leading-normal my-4`}>Develop websites using modern technologies | Typescript | Next.js | Tailwind CSS</p>
        <div className='flex flex-wrap gap-5 justify-center mt-4'>
        <button className=' px-2 py-1 shrink-0 text-lg sm:px-4 sm:py-2 sm:text-xl font-medium text-white bg-indigo-500 hover:bg-indigo-700 hover:delay-75 hover:duration-300 rounded hover:font-medium'>Hire me</button>
        <button className=' px-2 py-1 shrink-0 text-md sm:px-6  sm:py-2 sm:text-xl  sm:font-medium text-black border border-indigo-500 hover:font-bold hover:delay-100 hover:duration-500 rounded hover:text-md'>Download CV</button>
        </div>
      </div>

      <div className='shrink-0 mt-28'>
        <Image src={Picture} alt='Picture' height={1000} width={1000}
         className=' bg-gray-200 rounded-full border-4 border-indigo-500 h-[12rem] w-[12rem] sm:h-[17rem] sm:w-[17rem] md:h-[22rem] md:w-[22rem] '
        />
      </div>
  
    </header>
  )
}

export default HeroSec

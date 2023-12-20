import React from 'react'
import { Montserrat , Lato ,Roboto } from "next/font/google";
import Link from 'next/link';

const lato = Lato({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

const mont = Lato({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

function About() {
  return (
    <section className='w-full bg-white min-h-[300px] flex flex-col items-center'>

      <div className='flex justify-center  items-center '>
        <h2 className={`${lato.className} border-b-4  border-indigo-500 text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-2 sm:pb-4 mt-4`}>About Me</h2>
      </div>

      <div className=' w-[80%] flex justify-center items-center my-10'>
        <p className={`italic text-xl leading-8 tracking-normal text-center`}>
        "Hi! I'm Muhammad Hamza Aamir, a 20-year-old frontend developer and Computer Science student. Proficient in HTML, CSS, and JavaScript, I have experience in creating modern and responsive user interfaces. Familiar with design tool like Figma, I ensure a seamless collaboration between design and development.My curiosity drives me to explore emerging technologies, and I'm dedicated to keeping up with the rapid evolution of frontend development."
        </p>
      </div>



    </section>
  )
}

export default About

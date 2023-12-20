import React from 'react'
import { Lato, Lobster  } from "next/font/google";
import { SiTypescript, SiJavascript, SiPython, SiHtml5 , SiCss3, SiNextdotjs, SiReact, SiTailwindcss, SiBootstrap , SiFigma, SiGit, SiGithub, SiNpm, SiPnpm  } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { MdOutlineShortText } from "react-icons/md";

const lato = Lato({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

const lob = Lobster({
  weight: "400",
  subsets: ["cyrillic"],
  style: "normal",
});

function Skills() {
  return (
    <section className='min-h-[400px] w-full bg-gray-100 flex flex-col '>

      <div className='flex justify-center items-center '>
        <h2 className={`${lato.className} border-b-4  border-indigo-500 text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-2 sm:pb-4 mt-4`}>My Skills</h2>
      </div>

      <div className='flex flex-wrap gap-10 justify-around my-10 '>

        <div className='ml-6 flex flex-col '>
          <h3 className= {`${lob.className} text-center text-2xl md:text-3xl mb-6`}>Programming Languages</h3>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#007acc]'><SiTypescript/></span>Typescript</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#f0db4f]'><SiJavascript/></span>JavaScript</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#240476]'><SiPython/></span>Basic Python</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4'><span className='text-[#0769ad]'><TbBrandCpp/></span>Basic C++</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#e34c26]'><SiHtml5/></span>HTML</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4'><span className='text-#0077c0]'><SiCss3/></span>CSS</p>
        </div>
     
        <div className='flex flex-col mx-4'>
          <h3 className= {` ${lob.className} text-center text-2xl md:text-3xl flex justify-start mb-6`} >Frameworks & Libraries</h3>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-black'><SiNextdotjs/></span>Next.js</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#00d8ff]'><SiReact/></span>React</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#52e5ff]'><SiTailwindcss/></span>TailwindCSS</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#712cf9]'><SiBootstrap/></span>BootStrap</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='-rotate-45 font-medium'><MdOutlineShortText/></span>Shadcn</p>
        </div>
      
        <div className='flex flex-col  mr-6'>
          <h3 className={` ${lob.className} text-center text-2xl md:text-3xl mb-6 `}>Others</h3>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#FF0000]' ><SiFigma/></span>Figma</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#F34F29]'><SiGit/></span>Git</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#24292e]'><SiGithub/></span>GitHub</p>
          <p className='flex items-center text-xl gap-x-4 gap-y-4 ml-4 '><span className='text-[#CB3837]'><SiNpm /></span>npm</p>
        </div>

      </div>
     
    </section>
  )
}

export default Skills

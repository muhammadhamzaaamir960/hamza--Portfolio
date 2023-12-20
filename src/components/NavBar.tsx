import React from 'react'
import Link from 'next/link';
import { Switch } from "@/components/ui/switch"
import { GaugeCircle } from 'lucide-react';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

function NavBar() {
  return (
    <nav className='h-[50px] w-full bg-white z-10 shadow-xl flex items-center  justify-between md:justify-normal fixed top-0  '>

     <span className='flex cursor-pointer gap-x-2 md:w-[10%] ml-2 sm:ml-4 mr-4 shrink-0'><GaugeCircle className={`shrink-0 animate-spin  rotate-90  `}/>
     <span className={`font-medium text-md sm:text-xl drop-shadow-xl hidden sm:block ${mont.className} `}>Portfolio</span>
     </span>

     <span className='hidden md:flex justify-center md:text-xl lg:text-2xl text-black font-light italic drop-shadow-lg animate-bounce  transition-shadow w-[50%] '>Available for freelance</span>
     
     <div  className='w-[30%] flex justify-end'>
     <ul className='hidden md:block'>
      <li className='flex gap-x-5 lg:gap-x-10'>
        <button className=' text-black lg:text-lg font-sm hover:text-indigo-500 delay-75 duration-300'>Home</button>
        <button className=' text-black lg:text-lg font-sm hover:text-indigo-500 delay-75 duration-300 '>Projects</button>
        <button className=' text-black  lg:text-lg font-sm hover:text-indigo-500 delay-75 duration-300 '>Skills</button>
        <button className=' text-black lg:text-lg font-sm hover:text-indigo-500 delay-75 duration-300'>About</button>
      </li>
     </ul>
     <span className='flex md:hidden text-2xl mx-6 w-[10%] shrink-0 '>&#9776;</span>
     </div>
     <Switch/>
    </nav>
  )
}

export default NavBar;



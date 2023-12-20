import React from 'react'
import { Montserrat , Lato ,Roboto } from "next/font/google";
import Link from 'next/link';
import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react"
import { FaHeart} from "react-icons/fa";
import {SiLinkedin, SiGithub} from "react-icons/si"

const lato = Lato({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

function Footer() {
  return (
   <footer className=' min-h-screen w-full bg-gray-100 flex flex-col flex-wrap '>
    
    <div className='flex justify-center items-center '>
        <h2 className={`${lato.className} border-b-4  border-indigo-500 text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-2 sm:pb-4 mt-4`}>Hire Me ...</h2>
     </div>

        <div className='flex justify-center mt-20 flex-wrap gap-x-32 gap-y-10 mb-10 '>

          <div className='md:border-r-2 md:border-indigo-500 md:pr-5 flex flex-col items-center h-64 '>
            <h3 className=' text-3xl sm:text-4xl mb-6'>Contact Info</h3>
            <span className='flex gap-x-2 font-normal text-sm sm:text-lg  '><Mail/>{' '} hamzabhatti782259@gmail.com</span>
            <span className='flex gap-x-2 font-normal text-sm sm:text-lg my-4'><Phone/>{' '} +92 318 5381186</span>
            <span className='flex gap-x-2 font-normal text-sm sm:text-lg mb-4'><MapPin/>Punjab, Pakistan</span>
 
          <div className='flex gap-x-4 '>
            <Link className='' href={'https://github.com/muhammadhamzaaamir960'}>
            <button className='shadow-xl border border-black shadow-indigo-100 rounded-full bg-indigo-300 p-2 shrink-0 hover:bg-indigo-400 hover:duration-500 hover:delay-100'  ><Github/> </button>
            </Link>

            <Link href={'https://www.linkedin.com/in/muhammadhamzaaamir/'}>
            <button className='shadow-xl border border-black rounded-full bg-indigo-300 p-2 shrink-0 hover:bg-indigo-400 hover:duration-500 hover:delay-100'><Linkedin/>  </button>
            </Link>
          </div>

          </div>

          <div className=' flex flex-col  items-center '>
            <h3 className=' text-3xl text-center sm:text-4xl mb-6'>Share your Project Details!</h3>
            <form className=' flex flex-col gap-y-3 '>
              <input type="text" name='Name' size={40} placeholder='Name' required className='outline-0 placeholder:text-gray-600 border border-black rounded  p-2 hidden sm:block ' />
              <input type="email" name='Email' size={40} placeholder='Email' required className='outline-0 placeholder:text-gray-600 border border-black rounded  p-2 hidden sm:block' />
              <input type="text" name='Name' size={10} placeholder='Name' required className='outline-0 placeholder:text-gray-600 border border-black rounded  sm:hidden block px-2 ' />
              <input type="email" name='Email' size={10}  placeholder='Email' required className='outline-0 placeholder:text-gray-600 border border-black rounded  sm:hidden block px-2' />

              <textarea name='Message'  typeof='text' placeholder='Message' rows={3} cols={20}
              className='outline-0 p-2 max-h-64 placeholder:text-gray-600 border border-black rounded '>Message</textarea>
              <button type='submit' className='text-xl rounded-full font-medium border border-black hover:bg-indigo-500 hover:duration-500 hover:delay-100  bg-indigo-400'>Send</button>
            </form>
          </div>
    </div>

    <div className=' flex flex-col items-center justify-center mt-24 md:mt-32  mb-10 '>
       <span className='flex shrink-0 animate-pulse drop-shadow gap-2 items-center '>Developed by Hamza< FaHeart/></span>
       <span className='flex justify-center items-center text-center'>Copyright &copy; 2023, All Rights Reserved</span>
    </div>

   </footer>
  )
}

export default Footer

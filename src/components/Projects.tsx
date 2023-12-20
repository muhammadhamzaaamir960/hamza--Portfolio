import React from 'react'
import Image from 'next/image';
import AmazonClone from "@/assets/AmazonClone.png"
import BlogSite from "@/assets/BlogSite.png"
import PricingUI from "@/assets/PricingUI.png"
import { Montserrat , Lato ,Roboto } from "next/font/google";
import Link from 'next/link';

const lato = Lato({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

function Projects() {
  return (
    <section className='md:min-h-screen min-h-[800px]  w-full bg-white flex flex-col'>

     <div className='flex justify-center items-center'>
      <h2 className={`${lato.className} border-b-4  border-indigo-500 text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-2 sm:pb-4 mt-4`}>Projects</h2>
     </div>

     <div className=' flex flex-wrap gap-8 mt-6 md:mt-14 justify-evenly items-center '>

      <div className='flex flex-col justify-center items-center shadow-xl shadow-indigo-200 bg-gray-300 p-4 w-64 sm:w-72 md:w-96 rounded'>
        <Image src={PricingUI} alt='Pricing UI' width={400} height={200}
        className='h-34 w-64 sm:w-72 md:w-80  hover:scale-105 hover:duration-500 hover:delay-100 hover:ease-out '
        />
        <h3 className=' my-4 flex justify-center w-52 sm:w-72 md:w-80 text-xl md:text-2xl  font-medium '>Pricing UI designed using Tailwind CSS</h3>
        
        <Link href='https://pricing-ui-design.vercel.app/'>
        <button className='flex justify-center items-center px-2 py-1 sm:px-4 sm:py-1 bg-gray-400 sm:text-lg rounded font-medium hover:bg-gray-500 hover:duration-500 hover:delay-100'>Demo &#x25BA;</button>
        </Link>
      </div>

      <div className='flex flex-col justify-center items-center shadow-xl shadow-indigo-200 bg-gray-300 p-4 w-64 sm:w-72 md:w-96 rounded'>
        <Image src={BlogSite} alt='Blog Site' width={400} height={200}
        className='h-34 w-64 sm:w-72 md:w-80   hover:scale-105 hover:duration-500 hover:delay-100 hover:ease-out '
        />
        <h3 className=' my-4 flex justify-center w-52 sm:w-72 md:w-80 text-xl md:text-2xl font-medium '>Blog site designed using Tailwind CSS</h3>
        
        <Link href='https://blog-site-landing-page-1git.vercel.app/'>
        <button className='flex justify-center items-center px-2 py-1 sm:px-4 sm:py-1  bg-gray-400 sm:text-lg rounded font-medium hover:bg-gray-500 hover:duration-500 hover:delay-100'>Demo &#x25BA;</button>
        </Link>
      </div>

      <div className='flex flex-col justify-center items-center shadow-xl shadow-indigo-200 bg-gray-300 p-4 w-64 sm:w-72 md:w-96 rounded'>
        <Image src={AmazonClone} alt='Pricing UI' width={400} height={200}
        className='h-34 w-64 sm:w-72 md:w-80   hover:scale-105 hover:duration-500 hover:delay-100 hover:ease-out '
        />
        <h3 className=' my-4 flex justify-center w-52 sm:w-72 md:w-80 text-xl md:text-2xl font-medium '>Amazon clone developed using HTML/CSS</h3>
        
        {/* <Link href='https://pricing-ui-design.vercel.app/'> */}
        <button className='flex justify-center items-center px-2 py-1 sm:px-4 sm:py-1 sm:text-lg bg-gray-400 rounded font-medium hover:bg-gray-500 hover:duration-500 hover:delay-100'>Demo &#x25BA;</button>
        {/* </Link> */}
      </div>
     </div>

     <div className=' flex justify-center items-center my-16 '>
      <button className=' rounded-xl shrink-0 font-medium hover:bg-indigo-500 hover:duration-500 hover:delay-100 bg-indigo-400 px-4 py-1 shadow-xl drop-shadow-xl '>See more projects -&gt;
      </button>
     </div>
    </section>
  )
}

export default Projects
 
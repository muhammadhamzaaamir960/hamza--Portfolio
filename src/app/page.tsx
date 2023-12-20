import About from '@/components/About'
import Footer from '@/components/Footer'
import HeroSec from '@/components/HeroSec'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'



export default function Home() {
  return (
      <>
      <div className='overflow-scroll sm:overflow-hidden '>
      <HeroSec/>
      <Projects/>
      <Skills/>
      <About/>
      <Footer/>
      </div>
      </>   
  )
}

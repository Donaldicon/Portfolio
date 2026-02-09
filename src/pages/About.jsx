import React from 'react'
import NavbarTwo from '../components/NavbarTwo'
import AboutComponent from '../components/AboutComponent'
import AboutComponentM from '../components/AboutComponentM'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='transition-all duration-500 dark:bg-[#171717] ease-in-out  bg-[#f0f0f0] overflow-hidden font-jetBrainsMono  '>
        <NavbarTwo />
        <AboutComponent />
        <AboutComponentM />
        <Footer />
    </div>
  )
}

export default About
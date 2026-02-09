import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero.jsx'
import FeaturedProjects from '../components/FeaturedProjects.jsx'
import Stacks from '../components/Stacks.jsx'
import GetInTouch from '../components/GetInTouch.jsx'
import Footer from '../components/Footer.jsx'

import DelayRender from '../components/DelayRender.jsx'

import { useState, useEffect } from "react";


const Home = () => {
  return (
    <div className='dark:bg-[#171717] h-screen bg-[#f0f0f0]'>
      <Navbar />
      <Hero />
      <DelayRender delay={9680}>
        <FeaturedProjects />
        <Stacks />
        <GetInTouch />
        <Footer />
      </DelayRender>
    </div>
  )
}

export default Home
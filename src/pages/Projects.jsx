import React from 'react'
import NavbarTwo from '../components/NavbarTwo'
import ProjectComponent from '../components/ProjectComponent'
import ProjectComponentM from '../components/ProjectComponentM'
import Footer from '../components/Footer'
import DelayRender from '../components/DelayRender'

const Projects = () => {
  return (
    <div className='transition-all duration-500 dark:bg-[#171717] ease-in-out  bg-[#f0f0f0] overflow-hidden font-jetBrainsMono'>
      <NavbarTwo />
      <ProjectComponent />
      <ProjectComponentM />
      <DelayRender delay={4300}>
        <Footer />
      </DelayRender>
    </div>
  )
}

export default Projects
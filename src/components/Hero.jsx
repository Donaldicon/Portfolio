import React from 'react'
import pattern from '../assets/hero/pattern.png'
import reactLogo from '../assets/hero/React.png'
import jsxLogo from '../assets/hero/JSX.png'

import Hey from './Hey'

import DelayRender from './DelayRender'

import { motion, easeInOut } from 'motion/react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const whatsappLink = 'https://wa.link/8oe2xm'

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about")
  }

      const scrollToTop = () => {
        window.scrollTo(0,0);
      }
  
  return (
    <div>
      {/* Desktop */}
      <div className='hidden md:flex items-center justify-center text-black dark:text-white dark:bg-[#171717] bg-[#f0f0f0] transition-all duration-500 ease-in-out'>
        <div className=' mt-[2px] px-[4%] big:px-[15%] relative pt-[65px] laptop:pt-[90px] big:pt-[130px] w-[760px] laptop:w-[1200px] big:w-[1800px]'>
            <div>
                <img src={pattern} alt="bg-pattern" className='h-[350px] laptop:h-[490px] big:h-[640px] w-full dark:opacity-10 transition-all duration-500 ease-in-out'/>
            </div>

            <div className='flex flex-col items-center justify-center'>

              <div className='flex flex-col items-center justify-between absolute top-[130px] laptop:top-[165px] big:top-[210px]'>
                <div className='bg-[#9b9b9b] dark:border-[#656566] dark:border-[2px] dark:bg-[#1e1e1e] px-3 laptop:py-2 big:py-3 py-1 w-[158px] laptop:w-[250px] big:w-[300px] text-center rounded-md laptop:rounded-lg shadow-md transition-all duration-500 ease-in-out'>
                  <span className='font-jetBrainsMono font-semibold italic text-[11px] laptop:text-[15px] big:text-[20px] text-white dark:text-[#5E5E5E] transition-all ease-in-out duration-500 whitespace-nowrap'>
                    <Hey />
                  </span>
                </div>

                <DelayRender delay={3600}>
                  <div className=''>
                    <motion.div
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:100, y:0}}
                    transition={{duration:2, ease:easeInOut}}
                    viewport={{once:true}}
                    className='flex flex-col items-center '
                    >
                    <h1 className='text-center text-[40px] leading-[45px] laptop:text-[55px] laptop:leading-[80px] big:text-[90px] big:leading-[100px] mt-3 font-bold font-ibmMono dark:text-[#F0F0F0] transition-all ease-in-out duration-500'>Pixels, Code, and a Little <br />Bit of Magic...</h1>

                    <p className='text-center text-[#656566] dark:text-[#848485] text-[13px] laptop:text-[18px] big:text-[28px] mt-3 laptop:mt-4 big:mt-6 font-jetBrainsMono transition-all ease-in-out duration-500'>Your website isn’t just a page — it’s your platform. <br />Let’s build one that grows your brand and boosts results.</p>

                    <div className='flex items-center space-x-6 big:space-x-10 mt-4 laptop:mt-6 big:mt-8 text-[13px] laptop:text-[16px] big:text-[25px] font-jetBrainsMono'>
                      <button
                      onClick={() => {
                        goToAbout()
                        scrollToTop()
                      }}
                      className='bg-[#171717] text-[#EBEBEB] dark:text-[#2A2A2B] dark:bg-[#EBEBEB] py-[9px] laptop:py-[9.5px] big:py-[12px] px-5 big:px-8 rounded-xl big:rounded-2xl transition-all ease-in-out duration-500 hover:text-[#171717] hover:bg-[#EBEBEB] dark:hover:text-[#EBEBEB] dark:hover:bg-[#171717]'>Explore My stacks</button>
                      <Link to={whatsappLink} target='_blank'>
                        <button className='border-[1px] border-[#5E5E5E] hover:border-[#EBEBEB] text-[#5C5C5D] dark:text-[#656566] py-[9px] big:py-[12px] px-5 big:px-8 rounded-xl big:rounded-2xl transition-all ease-in-out duration-500'>{'<Hire Me /\u2009>'}</button>
                      </Link>
                    </div>
                    </motion.div>
                  </div>
                </DelayRender>
                
              </div>

              {/* React Logo */}
              <DelayRender delay={5500}>
              <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:100}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
              >
              <div className='absolute top-[125px] right-[47px] laptop:right-[140px] laptop:top-[157px] big:top-[193px] big:right-[130px]'>
                <img src={reactLogo} alt="React Logo" className='w-[40px] laptop:w-[60px] big:w-[90px] transition-all ease-in-out shadow-2xl rounded-full duration-500 opacity-100 dark:opacity-100' />
              </div>
              </motion.div>
              </DelayRender>

              {/* JSX Logo */}
              <DelayRender delay={6500}>
              <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:100}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
              >
              <div className='absolute bottom-[45px] left-[65px] laptop:left-[180px] laptop:bottom-[57px] big:bottom-[89px] big:left-[270px]'>
                <img src={jsxLogo} alt="React Logo" className='w-[100px] laptop:w-[115px] big:w-[150px] transition-all ease-in-out duration-500 opacity-90 dark:opacity-100' />
              </div>
              </motion.div>
              </DelayRender>

            </div>
            
        </div>
      </div>




      {/* Mobile */}
      <div className='md:hidden flex items-center justify-center text-black bg-[#f0f0f0] dark:text-white dark:bg-[#171717] transition-all duration-500 ease-in-out'>
        <div className=' pt-[5px] px-[4%] relative w-[300px] phone:w-[310px]'>
            <div>
                <img src={pattern} alt="bg-pattern" className='h-[500px] phone:h-[530px] object-cover w-full dark:opacity-10 transition-all duration-500 ease-in-out'/>
            </div>

            <div className='flex flex-col items-center justify-center'>

              <div className='flex flex-col items-center justify-between absolute top-[80px]'>
                <div className='bg-[#9b9b9b] dark:border-[#656566] dark:border-[2px] dark:bg-[#1e1e1e] px-3 py-1 w-[158px] text-center rounded-md laptop:rounded-lg shadow-md transition-all duration-500 ease-in-out'>
                  <span className='font-jetBrainsMono font-semibold italic text-[11px]  text-white dark:text-[#5E5E5E] transition-all ease-in-out duration-500 whitespace-nowrap'>
                    <Hey />
                  </span>
                </div>

                <DelayRender delay={3600}>
                <motion.div
                initial={{opacity:0, y:100}}
                whileInView={{opacity:100, y:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                className='flex flex-col items-center'
                >
                <h1 className='text-center text-[28px] phone:text-[30px] leading-[35px] mt-5 font-bold font-ibmMono dark:text-[#F0F0F0] transition-all ease-in-out duration-500'>Pixels, Code, and<br /> a Little Bit of<br /> Magic...</h1>

                <p className='text-center text-[#656566] dark:text-[#848485] text-[11px] phone:text-[12px] mt-3  font-jetBrainsMono transition-all ease-in-out duration-500'>Your website isn’t just a page — it’s your <br /> platform. Let’s build one that grows your brand and boosts results.</p>

                <div className='flex flex-col items-center space-y-4 mt-5 text-[13px] font-jetBrainsMono'>
                  <button 
                  onClick={() => {
                        goToAbout()
                        scrollToTop()
                      }}
                  className='bg-[#171717] text-[#EBEBEB] dark:text-[#2A2A2B] dark:bg-[#EBEBEB] py-[9px] px-5 rounded-md big:rounded-2xl hover:text-[#171717] hover:bg-[#EBEBEB] dark:hover:text-[#EBEBEB] dark:hover:bg-[#171717] transition-all w-[250px] ease-in-out duration-500'>Explore My stacks</button>
                  <Link to={whatsappLink} target='_blank'>
                  <button className='border-[2px] border-[#5E5E5E] text-[#5C5C5D] hover:border-[#ebebeb] dark:text-[#656566] py-[9px] w-[250px] rounded-md transition-all ease-in-out duration-500'>{'<Hire Me /\u2009>'}</button></Link>
                </div>
                </motion.div>
                </DelayRender>
                
              </div>

              {/* React Logo */}
              <DelayRender delay={5500}>
              <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:100}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
              >
              <div className='absolute top-[72px] right-0 phone:top-[63px] phone:-right-[23px]'>
                <img src={reactLogo} alt="React Logo" className='w-[45px] phone:w-[60px] transition-all ease-in-out duration-500 opacity-50 dark:opacity-100' />
              </div>
              </motion.div>
              </DelayRender>

              {/* JSX Logo */}
              <DelayRender delay={6500}>
              <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:100}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
              >
              <div className='absolute bottom-[20px] -left-[2px] phone:-left-[25px]'>
                <img src={jsxLogo} alt="React Logo" className='w-[70px] phone:w-[90px] transition-all ease-in-out duration-500 opacity-50 dark:opacity-100' />
              </div>
              </motion.div>
              </DelayRender>

            </div>
            
        </div>
      </div>

    </div>
  )
}

export default Hero
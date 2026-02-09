import React from 'react'
import stacksBg from '../assets/stacks/stacksBg.png'

import css from '../assets/stacks/CSS.png'
import html from '../assets/stacks/html5.png'
import js from '../assets/stacks/Javascript.png'
import react from '../assets/stacks/React2.png'
import tailwind from '../assets/stacks/Tailwind.png'

import { useNavigate } from 'react-router-dom'

import { motion, easeInOut } from 'motion/react'

const Stacks = () => {

    const navigate = useNavigate();

    const goToAbout = () => {
        navigate("/about")
    }

    const scrollToTop = () => {
        window.scrollTo(0,0);
      }

  return (
    <section className=' bg-[#f0f0f0]  dark:bg-[#171717] transition-all duration-500 ease-in-out '>
        <div className='bg-[#f0f0f0] transition-all duration-500 ease-in-out  dark:bg-[#171717] hidden md:flex items-start justify-between h-fit pr-[4%] big:px-[15%] '>
    
    {/* 30% */}
    <div className='w-[30%] relative py-3'>
        <img src={stacksBg} alt="Stacks dot BG" className='h-[300px] laptop:h-[420px] big:h-[600px] object-cover' />
        <div className='absolute left-[14%] big:left-[2%] top-0 text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out  font-jetBrainsMono text-[12px] big:text-[18px] leading-4 laptop:leading-[32px] big:leading-[45px] '>
        <motion.div
        initial={{opacity:0, x:0}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:3, ease:easeInOut}}
        viewport={{once:true}}
        >
        About me & <br />
        <span className='font-bold text-[20px] laptop:text-[25px] big:text-[35px]'>My Stacks</span>
        </motion.div>
        </div>
    </div>

    {/* 70% */}
    <div className='w-[70%] overflow-hidden'>
        <motion.div
        initial={{opacity:0, x:100}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}
        >
        <p className='text-right text-[13px] laptop:text-[15px] big:text-[18px] font-bold text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out   font-ibmMono pl-[10%]'>
        I focus on front-end development — writing code that works, looks great,
        and feels intuitive. From dynamic interfaces with React to fast, 
        responsive layouts with Tailwind, I love bringing  ideas to life one
        component at a time.
        </p>
        </motion.div>

        <div className='h-[1.5px] laptop:h-[2.5px] big:h-[4px] bg-[#dfdfdf] ml-[7%] my-3 laptop:my-5 big:my-7'/>

        <div className='pl-[7%] flex items-start justify-between'>
            <div className='w-[180px] laptop:w-[280px] big:w-[400px] overflow-hidden'>
                <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                <p className='font-jetBrainsMono text-[12px] laptop:text-[15px] big:text-[22px] leading-4 laptop:leading-[24px] big:leading-[35px] text-[#656566] transition-all duration-500 ease-in-out  '>The frameworks and languages that power my workflow and fuel every project I build.</p>
                </motion.div>
                
                <motion.div
                initial={{opacity:0, x:0}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:3, ease:easeInOut}}
                viewport={{once:true}}
                >   


                <button 
                onClick={() => {
                    goToAbout()
                    scrollToTop()
                }}
                    className='font-jetBrainsMono text-[#EBEBEB] bg-[#171717] dark:bg-[#EBEBEB] dark:text-[#171717] text-[11px] laptop:text-[14px] big:text-[22px] mt-[115px] laptop:mt-[187px] big:mt-[270px] py-2 px-3 big:px-5 big:py-3 rounded-md transition-all duration-500 ease-out hover:text-[#171717] hover:bg-[#EBEBEB] dark:hover:text-[#EBEBEB] dark:hover:bg-[#171717]'>Read More</button>
                </motion.div>

            </div>

            {/* Stacks */}
            <div className='space-y-7 -mt-[6px] text-[#656566] transition-all duration-500 ease-in-out'>
                <motion.div
                initial={{opacity:0, x:50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                <div className='flex items-center -mr-[10px] space-x-3 '>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={js} alt="Javascript" className='w-[80px] laptop:w-[120px] big:w-[180px]'/>
                        <p className='font-jetBrainsMono text-[10px] laptop:text-[14px] big:text-[20px]'>Javscript</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={react} alt="React" className='w-[80px] laptop:w-[120px] big:w-[180px]'/>
                        <p className='font-jetBrainsMono text-[10px] laptop:text-[14px] big:text-[20px]'>React</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={tailwind} alt="Tailwind" className='w-[80px] laptop:w-[120px] big:w-[180px]'/>
                        <p className='font-jetBrainsMono text-[10px] laptop:text-[14px] big:text-[20px]'>Tailwind</p>
                    </div>
                    
                </div>
                </motion.div>

                <motion.div
                initial={{opacity:0, x:50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:2, ease:easeInOut}}
                viewport={{once:true}}
                >
                <div className='flex items-center justify-center -mr-[10px] space-x-3'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={css} alt="Javascript" className='w-[80px] laptop:w-[120px] big:w-[180px]'/>
                        <p className='font-jetBrainsMono text-[10px] laptop:text-[14px] big:text-[20px]'>CSS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={html} alt="React" className='w-[80px] laptop:w-[120px] big:w-[180px]'/>
                        <p className='font-jetBrainsMono text-[10px] laptop:text-[14px] big:text-[20px]'>HTML5</p>
                    </div>
                    
                </div>
                </motion.div>


            </div>
        </div>

        

    </div>

        </div>


        {/* Mobile View */}
        <div className='bg-[#f0f0f0] transition-all duration-500 ease-in-out  dark:bg-[#171717] block md:hidden px-[4%]'>
    
        <div className='text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out  font-jetBrainsMono text-[15px]  leading-6 '>
                    <motion.div
                    initial={{opacity:0, x:0}}
                    whileInView={{opacity:100, x:0}}
                    transition={{duration:3, ease:easeInOut}}
                    viewport={{once:true}}
                    >
        About me & <br />
        <span className='font-bold text-[26px] '>My Stacks</span>
        </motion.div>
        </div>

        <div className='overflow-hidden'>
            <motion.div
            initial={{opacity:0, x:-100}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
                <p className='text-[12px] leading-[20px]  font-bold text-[#2A2A2B] my-2 dark:text-[#f0f0f0] transition-all duration-500 ease-in-out   font-ibmMono'>
                I focus on front-end development — writing code that works, looks great,
                and feels intuitive. From dynamic interfaces with React to fast, 
                responsive layouts with Tailwind, I love bringing  ideas to life one
                component at a time.
                </p>
            </motion.div>
        </div>

        <div className='h-[1.5px] my-3 bg-[#dfdfdf]   '/>

        <div className='overflow-hidden'>
            <motion.div
            initial={{opacity:0, x:100}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
        <p className='font-jetBrainsMono text-[12px]  leading-5  text-[#656566] transition-all duration-500 ease-in-out  '>The frameworks and languages that power my workflow and fuel every project I build.</p>
        </motion.div> </div>

            {/* Stacks */}
            <div className='space-y-5 mt-3 text-[#656566] transition-all duration-500 ease-in-out overflow-hidden'>
                <motion.div
                    initial={{opacity:0, y:50}}
                    whileInView={{opacity:100, y:0}}
                    transition={{duration:2, ease:easeInOut}}
                    viewport={{once:true}}
                    >
                <div className='flex items-center justify-center space-x-5 phone:space-x-10 p1:space-x-16'>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={js} alt="Javascript" className='w-[80px]'/>
                        <p className='font-jetBrainsMono text-[12px]'>Javscript</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={react} alt="React" className='w-[80px]'/>
                        <p className='font-jetBrainsMono text-[12px]'>React</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={tailwind} alt="Tailwind" className='w-[80px]'/>
                        <p className='font-jetBrainsMono text-[12px]'>Tailwind</p>
                    </div>
                    
                </div>

                
                <div className='flex items-center justify-center space-x-5 phone:space-x-10 p1:space-x-16'>
                    <div className='w-[80px]'/>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={css} alt="Javascript" className='w-[80px] '/>
                        <p className='font-jetBrainsMono text-[12px]'>CSS</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img src={html} alt="React" className='w-[80px]'/>
                        <p className='font-jetBrainsMono text-[12px]'>HTML5</p>
                    </div>
                    
                </div>
                </motion.div>


            </div>

        <div className='flex items-center justify-center py-7'>
            <motion.div
                initial={{opacity:0, y:0}}
                    whileInView={{opacity:100, y:0}}
                    transition={{duration:3, ease:easeInOut}}
                    viewport={{once:true}}
                    >
        <button 
        onClick={() => {
                    goToAbout()
                    scrollToTop()
                }}
        className='font-jetBrainsMono text-[#EBEBEB] bg-[#171717] dark:bg-[#EBEBEB] dark:text-[#171717] text-[11px]  py-2 px-3 big:px-5 big:py-3 rounded-md transition-all duration-500 ease-out hover:text-[#171717] hover:bg-[#EBEBEB] dark:hover:text-[#EBEBEB] dark:hover:bg-[#171717]'>Read More</button>
        </motion.div>
        </div>
       

        </div>

        <div className='h-[1px] w-full bg-[#dfdfdf] dark:bg-[#f0f0f0] mt-3'/>


    </section>

  )
}

export default Stacks
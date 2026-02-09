import React from 'react'
import FeaturedTyping from './FeaturedTyping'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import { motion, easeInOut } from 'motion/react'

import ethereal from '../assets/featured projects/Ethereal.png'

import foodieland from '../assets/featured projects/Foodieland.png'

import chesscorner from '../assets/featured projects/ChessCorner.png'

import stack1 from '../assets/featured projects/Stack1.png'

import stack2 from '../assets/featured projects/Stack2.png'

import apple from '../assets/featured projects/Apple.png'

import rohze from '../assets/featured projects/Rohze.png'

import netflix from '../assets/featured projects/Netflix.png'

import DelayRender from './DelayRender'


const ProjectComponentM = () => {
  return (
    <div className='transition-all duration-500 dark:bg-[#171717] ease-in-out  bg-[#f0f0f0]  pt-3 shadow-xl overflow-hidden md:hidden font-jetBrainsMono  mt-[60px]'>
        <div className='px-[4%]'>
        <h1 className='bg-[#0a0707] text-[#CFCFD0] text-center py-3 font-bold text-[25px] phone:text-[30px] font-ibmMono rounded-lg'>Projects</h1>
        
        <div className='flex flex-col justify-center items-center '>
            <div className='bg-[#A3A3A3] dark:border-[#656566] dark:border-[2px] dark:bg-[#1e1e1e] px-3  py-1 w-[188px]  text-center rounded-md laptop:rounded-lg shadow-md transition-all duration-500 ease-in-out mt-10'>
                <span className='font-jetBrainsMono font-semibold italic text-[12px]  text-white dark:text-[#5E5E5E] transition-all ease-in-out duration-500 whitespace-nowrap'>
                    <FeaturedTyping />
                </span>
            </div>
            <DelayRender delay={4300}>
            <motion.div
            initial={{opacity:0, y:0}}
            whileInView={{opacity:100, y:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            className=''
            >
            <h1 className='text-center text-[25px] leading-[32px] phone:text-[30px] phone:leading-[40px] mt-3 font-bold font-ibmMono dark:text-[#F0F0F0] transition-all ease-in-out duration-500'>Things I’ve Built <br /> on the Web</h1>

            <p className='text-center text-[#656566] dark:text-[#848485] text-[13px]  mt-3 laptop:mt-4 big:mt-6 font-jetBrainsMono transition-all ease-in-out duration-500'>A glimpse into the web projects I’ve <br /> developed clean, fast, and built with care <br /> </p>
            </motion.div>

            <div>
                {/* row 1 */}
                <div className='flex flex-col items-center justify-center  px-[1.3%] mt-4 space-y-5 big:mt-12 '>
                    {/* Ethereal */}
                    <div className='w-[96%]'>
                    <motion.div
                        initial={{opacity:0, y:50}}
                        whileInView={{opacity:100, y:0}}
                        transition={{duration:1, ease:easeInOut}}
                        viewport={{once:true}}
                        className='space-y-5 laptop:space-y-6 big:space-y-10'
                        >
                        <Link to='https://ethereal-ashy.vercel.app/' target='_blank'>
                        <div className='w-full dark:border-[#5E5E5E] dark:border-[2px]  bg-white dark:bg-[#171717] rounded-lg px-3 py-3 laptop:py-4 big:py-6 shadow-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-105'>
                            <img src={ethereal} alt="Ethereal" className='w-full h-auto rounded-md shadow-sm dark:opacity-60 transition-all duration-500 ease-in-out'/>
                            <div className='px-[2%]'>
                                {/* Project name and stacks */}
                                <div className='flex items-center space-x-2 '>
                                    <h1 className='text-[20px] laptop:text-[23px] big:text-[27px] font-bold font-ibmMono text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out'>Ethereal</h1>
                                    <img src={stack1} alt="Stack used foe ethereal" 
                                    className='w-[30px] laptop:w-[45px] big:w-[60px]'/>
                                </div>

                                {/* Project details */}
                                <p className='font-jetBrainsMono text-[10px] laptop:text-[12px] big:text-[15px] text-[#848485] dark:text-[#CFCFD0] transition-all duration-500 ease-in-out'>Ethereal is a startup website that aims to revolutionize accommodation search for travelers in Nigeria. Users can access accomodation with ease </p>
                            </div>
                        
                        
                        </div>
                    </Link>
                    </motion.div>
                    </div>

                    {/* FoodieLand */}
                    <div className='w-[96%] '>
                        <motion.div
                            initial={{opacity:0, y:30}}
                            whileInView={{opacity:100, y:0}}
                            transition={{duration:1, ease:easeInOut}}
                            viewport={{once:true}}
                            className='w-full'
                            >
                            <Link to='https://foodieland-delta-lemon.vercel.app/' target='_blank'>
                            <div className='w-full dark:border-[#5E5E5E] dark:border-[2px] bg-white dark:bg-[#171717]  rounded-lg px-3 py-3 laptop:py-4 big:py-6 shadow-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-105'>
                                <img src={foodieland} alt="Foodieland" 
                                className='w-full h-auto rounded-md shadow-sm transition-all duration-500 ease-in-out dark:opacity-60'
                                />
                                <div className='px-[2%]'>
                                    {/* Project name and stacks */}
                                    <div className='flex items-center space-x-2 '>
                                        <h1 className='text-[20px] laptop:text-[23px] big:text-[27px] font-bold font-ibmMono text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out'>FoodieLand</h1>
                                        <img src={stack1} alt="Stack used ethereal" 
                                        className='w-[30px] laptop:w-[45px] big:w-[60px]'/>
                                    </div>

                                    {/* Project details */}
                                    <p className='font-jetBrainsMono text-[10px] laptop:text-[12px] big:text-[15px] text-[#848485] dark:text-[#CFCFD0] transition-all duration-500 ease-in-out'>Foodieland is a recipe-sharing platform with cooking recipes and blog posts. One can get cooking tips & new recipes by signing up for a newsletter. </p>
                                </div>
                            
                            
                            </div>
                        </Link>
                        </motion.div>
                    </div>
                </div>

    
                {/* row 2 */}
                <div className='flex flex-col items-center justify-center space-y-5  px-[1.3%] mt-5'>
                    {/* Chess Corner */}
                    <div className='w-[96%]'>
                        <motion.div
                            initial={{opacity:0, y:50}}
                            whileInView={{opacity:100, y:0}}
                            transition={{duration:1, ease:easeInOut}}
                            viewport={{once:true}}
                            className=''
                            >
                            <Link to='https://chesscornerofficial.com/' target='_blank'>
                            <div className='w-full dark:border-[#5E5E5E] bg-white dark:bg-[#171717] dark:border-[2px]  rounded-lg px-3 py-3 laptop:py-4 big:py-6 shadow-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-105'>
                                <img src={chesscorner} alt="Ethereal" className='w-full h-auto rounded-md shadow-sm dark:opacity-60 transition-all duration-500 ease-in-out'/>
                                <div className='px-[2%]'>
                                    {/* Project name and stacks */}
                                    <div className='flex items-center space-x-2 '>
                                        <h1 className='text-[20px] laptop:text-[23px] big:text-[27px] font-bold font-ibmMono text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out'>ChessCorner</h1>
                                        <img src={stack2} alt="Stack used foe ethereal" 
                                        className='w-[30px] laptop:w-[45px] big:w-[60px]'/>
                                    </div>

                                    {/* Project details */}
                                    <p className='font-jetBrainsMono text-[10px] laptop:text-[12px] big:text-[15px] text-[#848485] dark:text-[#CFCFD0] transition-all duration-500 ease-in-out'>ChessCorner is a startup dedicated to building a strong chess community. The website has an online store for chess gear and a section for blogs. </p>
                                </div>
                            
                            
                            </div>
                        </Link>
                        </motion.div>
                    </div>

                    {/* Apple */}
                    <div className='w-[97%]'>
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:100, y:0}}
                        transition={{duration:1, ease:easeInOut}}
                        viewport={{once:true}}
                        className=''
                        >
                        <Link to='https://apple-react-project-1.vercel.app/' target='_blank'>
                        <div className='w-full dark:border-[#5E5E5E] dark:border-[2px] bg-white dark:bg-[#171717] rounded-lg px-3 py-3 laptop:py-4 big:py-6 shadow-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:overflow-visible '>
                            <img src={apple} alt="Apple React" className='w-full h-auto rounded-md shadow-sm dark:opacity-60'/>
                            <div className='px-[2%]'>
                                {/* Project name and stacks */}
                                <div className='flex items-center space-x-2 '>
                                    <h1 className='text-[20px] laptop:text-[23px] big:text-[27px] font-bold font-ibmMono text-[#2A2A2B] dark:text-[#f0f0f0]  transition-all duration-500 ease-in-out'>Apple Nigeria Clone</h1>
                                    <img src={stack1} alt="Stack used for Apple Nigeria Clone" 
                                    className='w-[30px] laptop:w-[45px] big:w-[60px]'/>
                                </div>

                                {/* Project details */}
                                <p className='font-jetBrainsMono text-[10px] laptop:text-[12px] big:text-[15px] text-[#848485] dark:text-[#CFCFD0] transition-all duration-500 ease-in-out'>A front-end clone of the Apple Nigeria landing page, this was a UI/UX practice project built to replicate Apple's design and layout.. </p>
                            </div>
                        
                        
                        </div>
                    
                        </Link>
                        </motion.div>
                    </div>
                </div>

        
                {/* row 3 */}
                <div className='flex flex-col items-center justify-center space-y-5 px-[1.3%] overflow-hidden pb-10 mt-5'>
                    {/* Rohze */}
                    <div className='w-[96%]'>
                        <motion.div
                            initial={{opacity:0, y:50}}
                            whileInView={{opacity:100, y:0}}
                            transition={{duration:1, ease:easeInOut}}
                            viewport={{once:true}}
                            className=''
                            >
                            <Link to='https://rohzexperience.netlify.app/' target='_blank'>
                            <div className='w-full dark:border-[#5E5E5E] bg-white dark:bg-[#171717] dark:border-[2px]  rounded-lg px-3 py-3 laptop:py-4 big:py-6 shadow-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-105'>
                                <img src={rohze} alt="Ethereal" className='w-full h-auto rounded-md shadow-sm dark:opacity-60 transition-all duration-500 ease-in-out'/>
                                <div className='px-[2%]'>
                                    {/* Project name and stacks */}
                                    <div className='flex items-center space-x-2 '>
                                        <h1 className='text-[20px] laptop:text-[23px] big:text-[27px] font-bold font-ibmMono text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out'>Rohze Experience</h1>
                                        <img src={stack2} alt="Stack used foe ethereal" 
                                        className='w-[30px] laptop:w-[45px] big:w-[60px]'/>
                                    </div>

                                    {/* Project details */}
                                    <p className='font-jetBrainsMono text-[10px] laptop:text-[12px] big:text-[15px] text-[#848485] dark:text-[#CFCFD0] transition-all duration-500 ease-in-out'>A portfolio site for a business owner to showcase services and connect with clients via social media. </p>
                                </div>
                            
                            
                            </div>
                        </Link>
                        </motion.div>
                    </div>

                    {/* netflix */}
                    <div className='w-[97%]'>
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:100, y:0}}
                        transition={{duration:1, ease:easeInOut}}
                        viewport={{once:true}}
                        className=''
                        >
                        <Link to='https://donaldicon.github.io/netflix/' target='_blank'>
                        <div className='w-full dark:border-[#5E5E5E] dark:border-[2px] bg-white dark:bg-[#171717] rounded-lg px-3 py-3 laptop:py-4 big:py-6 shadow-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-105 hover:overflow-visible '>
                            <img src={netflix} alt="Apple React" className='w-full h-auto rounded-md shadow-sm dark:opacity-60'/>
                            <div className='px-[2%]'>
                                {/* Project name and stacks */}
                                <div className='flex items-center space-x-2 '>
                                    <h1 className='text-[20px] laptop:text-[23px] big:text-[27px] font-bold font-ibmMono text-[#2A2A2B] dark:text-[#f0f0f0]  transition-all duration-500 ease-in-out'>Netflix Clone</h1>
                                </div>

                                {/* Project details */}
                                <p className='font-jetBrainsMono text-[10px] laptop:text-[12px] big:text-[15px] text-[#848485] dark:text-[#CFCFD0] transition-all duration-500 ease-in-out'>A front-end clone of the Netflix page, this was a UI/UX practice project built to replicate Netlix's design and layout.. <br /> This is one of my first ever projects. </p>
                            </div>
                        
                        
                        </div>
                    
                        </Link>
                        </motion.div>
                    </div>
                </div>

            </div>
            </DelayRender>
            </div>
              </div>

            <DelayRender delay={4300}>
            <div className='flex flex-col  w-full bg-white dark:bg-[#171717] px-[4%] pb-3 '>
                {/* Have a Project In Mind */}
                <div className='flex flex-col'>
                    <h1 className='text-[25px] leading-[32px] phone:text-[30px] phone:leading-[35px]   mt-3 font-bold font-ibmMono dark:text-[#F0F0F0] transition-all ease-in-out duration-500'>Have a Project <br /> In Mind</h1>
                    <p className=' text-[#656566] dark:text-[#848485] text-[13px] mt-2 phone:mt-3'>I’m just a message away.</p>
                </div>
                
                <div className='mt-2'>
                <Link to='mailto:chizitelu.azih.231374@gmail.com' target='_blank'>
                <div className='flex items-center gap-x-2 laptop:gap-x-5 mt-3 laptop:mt-5 big:mt-8'>
                    <div className='w-6 h-6 laptop:w-8 laptop:h-8 big:w-12 big:h-12 bg-white flex items-center justify-center rounded-full'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-[12px] text-black laptop:text-[15px] big:text-[20px]'/>
                    </div>
                    <p className='font-jetBrainsMono text-[10px] laptop:text-[13px] big:text-[17px] text-[#656566] transition-all font-semibold ease-in-out duration-500 dark:text-[#656566]'>chizitelu.azih.231374@gmail.com</p>
                </div>
            </Link>

            <Link to='tel:+234-810 572 2281' target='_blank'>
                <div className='flex items-center gap-x-2 laptop:gap-x-5 mt-1 laptop:mt-2 big:mt-3'>
                    <div className='w-6 h-6 laptop:w-8 laptop:h-8 big:w-12 big:h-12 bg-white flex items-center justify-center rounded-full'>
                    <FontAwesomeIcon icon={faPhone} className='text-[10px] laptop:text-[12px] big:text-[15px] text-black'/>
                    </div>
                    <p className='font-jetBrainsMono text-[10px] laptop:text-[13px] big:text-[17px]  font-semibold text-[#656566] transition-all ease-in-out duration-500 dark:text-[#656566]'>+234-810 572 2281</p>
                </div>
            </Link>

            <div className='font-jetBrainsMono font-extrabold mt-5 text-[13px] laptop:text-[18px] big:text-[28px] italic transition-all ease-in-out duration-500 flex flex-col  space-y-3 text-[#656566] dark:text-[#656566]'>

                <motion.div
                initial={{opacity:0, x:-50}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:1, ease:easeInOut}}
                viewport={{once:true}}                       
                >
                <Link to='https://www.linkedin.com/in/chizitelu-azih-92bb87320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
                <div className='flex items-center gap-x-1 laptop:gap-x-2 big:gap-x-3'>
                    <p>LinkedIn</p>
                    <span>&#x2197;</span>
                </div>
                </Link>
                </motion.div>

                <motion.div
                initial={{opacity:0, x:-70}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:1, ease:easeInOut}}
                viewport={{once:true}}                        className='space-y-5 laptop:space-y-6 big:space-y-10'
                >
                <Link to='https://x.com/azih_donald?s=11' target='_blank'>
                <div className='flex items-center gap-x-1 laptop:gap-x-2 big:gap-x-3'>
                    <p>X</p>
                    <span>&#x2197;</span>
                </div>
                </Link>
                </motion.div>

                <motion.div
                initial={{opacity:0, x:-100}}
                whileInView={{opacity:100, x:0}}
                transition={{duration:1, ease:easeInOut}}
                viewport={{once:true}}                        className='space-y-5 laptop:space-y-6 big:space-y-10'
                >
                 <Link to='https://www.instagram.com/chizitelu_azih?igsh=ZzYxczVyMW5uZ28%3D&utm_source=qr' target='_blank'>
                    <div className='flex items-center gap-x-1 laptop:gap-x-2 big:gap-x-3 font-jetBrainsMono font-extrabold italic text-[#656566]'>
                        <p>Instagram</p>
                        <span>&#x2197;</span>
                    </div>
                </Link>
                </motion.div>
            </div>

                </div>
            </div>
            </DelayRender>

            


      
        <div>
            
        </div>
    </div>
  )
}

export default ProjectComponentM
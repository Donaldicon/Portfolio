import React from 'react'

import aboutBright from '../assets/about/aboutBright1.jpeg'
import aboutDark from '../assets/about/aboutDark1.jpeg'
import imgOne from '../assets/about/img1.jpeg'
import imgTwo from '../assets/about/img2.jpeg'
import chizzy from '../assets/about/chizzy.jpeg'
import imgThree from '../assets/about/img3.jpeg'
import nysc from '../assets/about/nysc.png'

import js from '../assets/about/Javascript.png'
import react from '../assets/about/React2.png'
import tailwind from '../assets/about/Tailwind.png'
import css from '../assets/about/CSS.png'
import html from '../assets/about/html5.png'

import { Link, useNavigate } from 'react-router-dom'
import { motion, easeInOut } from 'motion/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'


const AboutComponent = () => {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate('/projects')
    }

    const whatsappLink = 'https://wa.link/8oe2xm'

            const scrollToTop = () => {
        window.scrollTo(0,0);
      }
  return (
    <div className='transition-all duration-500 dark:bg-[#171717] ease-in-out  bg-[##CFCFD0] px-[4%] big:px-[15%] py-3 md:py-5 laptop:py-8 big:py-10 shadow-xl overflow-hidden hidden md:block font-jetBrainsMono  mt-[70px] laptop:mt-[100px] big:mt-[150px] '>
        <h1 className='bg-[#0a0707] text-[#CFCFD0] text-center py-3 font-bold text-[30px] lg:text-[35px] laptop:text-[45px] big:text-[60px] font-ibmMono rounded-lg'>About Me</h1>

        <div className='overflow-hidden'>
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:100, y:0}}
        transition={{duration:1, ease:easeInOut}}
        viewport={{once:true}}
        >
        <div className='mt-5 flex items-center justify-between'>
            {/* Face */}
            <div className='transition-all duration-500 ease-in-out w-[40%] bg-white dark:bg-[#171717] flex items-center justify-center py-3 laptop:py-8 rounded-[30px] dark:border-[2px] dark:border-[#282828]'>
                <img src={nysc} alt="my picture" className='w-[90%] h-[190px] lg:h-[280px] big:h-[310px] rounded-[20px] object-cover'/>
            </div>

            {/* Text */}
            <div className='w-[58%] bg-white flex flex-col px-[2%] justify-center h-[210px] lg:h-[300px] laptop:h-[340px] big:h-[372px] rounded-[20px] dark:bg-[#171717] dark:border-[2px] dark:border-[#282828]'>
                <div className='flex items-center justify-between transition-all duration-500 ease-in-out'>
                    <p className='font-ibmMono text-[#2A2A2B] font-bold dark:text-[#F0F0F0] text-[16px] lg:text-[22px] laptop:text-[28px] big:text-[35px]'>Donald Azih <br />Chizitelu</p>
                    <div className='flex items-center justify-center space-x-[1px] text-[#eddaf3] border-[4px] border-[#eddaf3] dark:border-[#33203a] dark:text-[#33203a] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] laptop:w-[95px] laptop:h-[95px] big:w-[130px] big:h-[130px] rounded-full text-[25px] lg:text-[32px] laptop:text-[42px] big:text-[55px] font-bold'>
                        <span>{'<'}</span>
                        <span>{'/'}</span>
                        <span>{'>'}</span>
                    </div>
                </div>
                <p className='mt-2 lg:mt-5 text-[14px] lg:text-[16px] laptop:text-[20px] big:text-[25px] font-jetBrainsMono dark:text-[#B8B8B9] '><span className='text-[#1974D0]'>{'<p>'}</span> I’m a web developer who turns ideas into clean, scalable and interactive web experiences. <span className='text-[#1974D0]'>{"<br\u2009/\u2009>"}</span> <br />With a strong focus on frontend development, I love writing codes that not only works but also looks great and feels intuitive.<span className='text-[#1974D0]'>{'<p\u2009/\u2009>'}</span></p>
            </div>
        </div>
        </motion.div>
        </div>

        {/* Projects and My Stack */}
        <div className='my-4 laptop:my-7 big:my-10 flex items-center justify-between'>
            
            {/* Projects */}
            <div className='px-[2%] bg-white dark:bg-[#171717] py-3 w-[48%] h-[270px] lg:h-[300px] laptop:h-[370px] big:h-[470px] rounded-[20px] dark:border-[2px] dark:border-[#313131]'>
                    <h1 className='font-ibmMono text-[16px] lg:text-[22px] laptop:text-[28px] big:text-[35px]  font-bold text-[#2A2A2B] dark:text-[#F0F0F0]'>Projects</h1>
                    
                    {/* dashed line */}
                    <div className='mt-[4px]  w-full border-t border-dashed border-[#C1C1C1]'/>
                    
                    {/* Row 1 */}
                    <div className='font-jetBrainsMono text-[14px] lg:text-[16px] laptop:text-[20px] big:text-[25px] mt-3 flex items-center justify-between transition-all duration-500 ease-in-out '>
                        <div className='flex flex-col space-y-[1px] laptop:space-y-[2px] big:space-y-[4px]'>
                            <span className='text-[#1974D0] font-semibold'>2025</span>
                            <span className='text-[#484848] dark:text-[#B8B8B9] font-bold'>Ethereal Website</span>
                            
                            <span className='text-[#848485] font-semibold italic'>
                            <Link to='https://ethereal-ashy.vercel.app' target='_blank'>
                                Ethereal
                            </Link>
                            </span>
                            
                        </div>

                        <div className='flex flex-col space-y-[1px] laptop:space-y-[2px] big:space-y-[4px]'>
                            <span className='text-[#1974D0] font-semibold'>2025</span>
                            <span className='text-[#484848] dark:text-[#B8B8B9] font-bold'>Chess Corner</span>
                            <Link to='https://chesscornerofficial.com/' target='_blank'>
                            <span className='text-[#848485] font-semibold italic'>Chess Corner</span>
                            </Link>
                        </div>
                    </div>

    
                    {/* Row 2 */}
                    <div className='font-jetBrainsMono text-[14px] lg:text-[16px] laptop:text-[20px] big:text-[25px] mt-3 laptop:mt-5 big:mt-8 flex items-center justify-between transition-all duration-500 ease-in-out'>
                        <div className='flex flex-col space-y-[1px] laptop:space-y-[2px] big:space-y-[4px]'>
                            <span className='text-[#1974D0] font-semibold'>2024</span>
                            <span className='text-[#484848] dark:text-[#B8B8B9]  font-bold'>FoodieLand Website</span>
                            
                            <span className='text-[#848485] font-semibold italic'>
                            <Link to='https://foodieland-delta-lemon.vercel.app/' target='_blank'>
                                FoodieLand Website
                            </Link>
                            </span>
                            
                        </div>

                        <div className='flex flex-col space-y-[1px] laptop:space-y-[2px] big:space-y-[4px] mr-2 laptop:mr-[14px]'>
                            <span className='text-[#1974D0] font-semibold'>2023</span>
                            <span className='text-[#484848]  dark:text-[#B8B8B9] font-bold'>Apple </span>
                            <Link to='https://apple-react-project-1.vercel.app/' target='_blank'>
                            <span className='text-[#848485] font-semibold italic'>Apple Clone</span>
                            </Link>
                        </div>
                    </div>

                    <div className='flex items-center justify-center'>
                        <motion.div
                        initial={{opacity:0, x:0}}
                        whileInView={{opacity:100, x:0}}
                        transition={{duration:2, ease:easeInOut}}
                        viewport={{once:true}}
                        >
                            <button 
                            onClick={() => {
                                goToProjects()
                                scrollToTop()
                            }}
                            className='font-jetBrainsMono dark:text-[#F0F0F0]  text-[#5E5E5E] border-[1px] border-[#5e5e5e] dark:border-[#ebebeb] text-[12px] laptop:text-[14px] big:text-[18px] mt-5 laptop:mt-7 big:mt-10 py-2 px-5 big:py-3 rounded-md transition-all duration-500 ease-out dark:hover:text-[#171717] ] dark:hover:bg-[#EBEBEB] hover:text-[#f0f0f0] hover:bg-[#171717] z-20'>View More</button>
                        </motion.div>
                    </div>


            </div>

    
            {/* stacks */}
            <div className='px-[2%] bg-white dark:bg-[#171717] py-3 w-[48%] h-[270px] lg:h-[300px] laptop:h-[370px] big:h-[470px] rounded-[20px] dark:border-[2px] dark:border-[#313131]'>
                    <p className='bg-[#Ebebeb] text-[#5E5E5E] dark:bg-[#262626] dark:border-[2px] dark:border-[#363636] w-[60px] laptop:w-[75px] big:w-[90px] py-[2px] laptop:py-[3px] big:py-[5px] rounded-md text-center text-[10px] laptop:text-[13px] big:text-[16px] mb-3 laptop:mb-5 big:mb-8'>
                        My Stack
                    </p>
                    <h1 className='font-ibmMono text-[16px] lg:text-[22px] laptop:text-[28px] big:text-[35px]  font-bold text-[#2A2A2B] dark:text-[#F0F0F0]'>My Web Toolkit</h1>

                    {/* Row 1 */}
                    <div className='flex items-center justify-center  space-x-[10px] lg:space-x-[15px] laptop:space-x-[20px] big:space-x-[25px] mt-9 laptop:mt-10 big:mt-[12]'>
                        {/* Javscript */}
                        <div className='flex items-center justify-center space-x-[6px] laptop:space-x-[9px] bg-white dark:bg-[#171717] h-[45px] laptop:h-[70px] big:h-[90px] w-[130px] laptop:w-[180px] big:w-[230px]  rounded-full border-[2px] border-[#f3f3f3] dark:border-[#202020]'>
                            <img src={js} alt="Javascript" className='w-[20px] laptop:w-[30px] big:w-[40px]'/>
                            <p className='text-[12px] laptop:text-[15px] big:text-[20px] italic font-semibold text-[#656566] dark:text-[#989898]'>Javascript</p>
                        </div>

                        
                        {/* React */}
                        <div className='flex items-center justify-center space-x-[6px] laptop:space-x-[9px] bg-white dark:bg-[#171717] h-[45px] laptop:h-[70px] big:h-[90px] w-[85px] laptop:w-[120px] big:w-[160px]  rounded-full border-[2px] border-[#f3f3f3] dark:border-[#202020]'>
                            <img src={react} alt="react" className='w-[20px] laptop:w-[30px] big:w-[40px]'/>
                            <p className='text-[12px] laptop:text-[15px] big:text-[20px] italic font-semibold text-[#656566] dark:text-[#989898]'>React</p>
                        </div>

                        
                        {/* Tailwind */}
                        <div className='flex items-center justify-center space-x-[6px] laptop:space-x-[9px] bg-white dark:bg-[#171717] h-[45px] laptop:h-[70px] big:h-[90px] w-[120px] laptop:w-[145px] big:w-[210px]  rounded-full border-[2px] border-[#f3f3f3] dark:border-[#202020]'>
                            <img src={tailwind} alt="Tailwind" className='w-[20px] laptop:w-[30px] big:w-[40px]'/>
                            <p className='text-[12px] laptop:text-[15px] big:text-[20px] italic font-semibold text-[#656566] dark:text-[#989898]'>Tailwind</p>
                        </div>

                        
                    </div>
                    
                    {/* Row 2 */}
                    <div className='flex items-center justify-center  space-x-[10px] lg:space-x-[15px] laptop:space-x-[20px] big:space-x-[25px] mt-3 laptop:mt-5 big:mt-7'>

                        
                        {/* CSS */}
                        <div className='flex items-center justify-center space-x-[6px] laptop:space-x-[9px] bg-white dark:bg-[#171717] h-[45px] laptop:h-[70px] big:h-[90px] w-[75px] laptop:w-[110px] big:w-[140px]  rounded-full border-[2px] border-[#f3f3f3] dark:border-[#202020]'>
                            <img src={css} alt="CSS" className='w-[20px] laptop:w-[30px] big:w-[40px]'/>
                            <p className='text-[12px] laptop:text-[15px] big:text-[20px] italic font-semibold text-[#656566] dark:text-[#989898]'>CSS</p>
                        </div>

                        
                        {/* HTML */}
                        <div className='flex items-center justify-center space-x-[6px] laptop:space-x-[9px] bg-white dark:bg-[#171717] h-[45px] laptop:h-[70px] big:h-[90px] w-[85px] laptop:w-[120px] big:w-[160px]  rounded-full border-[2px] border-[#f3f3f3] dark:border-[#202020]'>
                            <img src={html} alt="HTML" className='w-[20px] laptop:w-[30px] big:w-[40px]'/>
                            <p className='text-[12px] laptop:text-[15px] big:text-[20px] italic font-semibold text-[#656566] dark:text-[#989898]'>HTML5</p>
                        </div>

                        
                    </div>
                    
                    


            </div>


        </div>

        {/* final row */}
        <div className='flex items-center justify-between'>
            {/* Let's work together */}
            <div className='bg-white dark:bg-[#171717] w-[40%] h-[170px] lg:h-[240px] laptop:h-[330px] big:h-[400px] flex flex-col justify-center pl-[2%] rounded-[20px] dark:border-[2px] dark:border-[#313131] transition-all shadow-lg duration-500 ease-in-out '>
                <div className='flex items-center justify-center space-x-[1px] text-[#eddaf3] border-[4px] border-[#eddaf3] dark:border-[#33203a] dark:text-[#33203a] w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] laptop:w-[95px] laptop:h-[95px] big:w-[130px] big:h-[130px] rounded-full text-[25px] lg:text-[32px] laptop:text-[42px] big:text-[55px] font-bold'>
                    <span>{'<'}</span>
                    <span>{'/'}</span>
                    <span>{'>'}</span>
                </div>
                <Link to={whatsappLink} target='_blank'>
                <p className='text-[#B8B8B9] font-extrabold font-jetBrainsMono text-[20px] lg:text-[25px] lg:leading-[35px] leading-[25px] mt-5 lg:mt-8 laptop:mt-[53px]  dark:text-[#848485]  laptop:text-[39px] big:text-[50px] laptop:leading-[60px] big:leading-[70px]'> Let's <span className='text-[#A3c8ec] dark:text-[#183c61]'>{'<br /\u2009\>'}</span> <br /> Work Together.. <span className='text-[30px] lg:text-[40px] laptop:text-[50px] big:text-[70px]'> &#x2197; </span> </p>
                </Link>
            </div>

            {/* Social Links */}
            <div className='bg-white dark:bg-[#171717] w-[30%] h-[170px] lg:h-[240px] laptop:h-[330px] big:h-[400px] pl-[2%] flex flex-col justify-center rounded-[20px] dark:border-[2px] dark:border-[#313131] transition-all duration-500 ease-in-out'>
                <div className='flex items-center space-x-[10%]'>
                {/* X */}
                    <div className='relative group inline-block'>
                        <Link to='https://x.com/azih_donald?s=11' target='_blank'>
                        <div
                        className={` h-11 w-11 flex items-center justify-center lg:w-[60px] lg:h-[60px] rounded-full laptop:w-[80px] laptop:h-[80px] big:w-[100px] big:h-[100px] transition-all duration-500 ease-in-out bg-white dark:bg-[#171717] border-[1px] big:border-[2px] dark:border-[#1c1c1c] :border-[#dadbdd]`}>
                            <FontAwesomeIcon icon={faXTwitter} className='cursor-pointer text-[20px] lg:text-[25px] laptop:text-[33px] big:text-[50px] text-[#171717] dark:text-[#DADBDD]'/>  
                        </div>
                        </Link>
                        <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 big:mt-1 text-black dark:text-white text-[8px] laptop:text-[13px] rounded font-ibmMono">
                            X
                        </span>
                    </div>

                    {/* Email */}
                    <div className='relative group inline-block'>
                        <Link to='mailto:chizitelu.azih.231374@gmail.com' target='_blank'>
                        <div
                        className={` h-8 w-8 flex items-center justify-center lg:w-[40px] lg:h-[40px] rounded-full laptop:w-[60px] laptop:h-[60px] big:w-[80px] big:h-[80px] transition-all duration-500 ease-in-out bg-white dark:bg-[#171717] border-[1px] big:border-[2px] dark:border-[#1c1c1c] :border-[#dadbdd]`}>
                            <FontAwesomeIcon icon={faEnvelope}className='cursor-pointer text-[15px] lg:text-[20px] laptop:text-[25px] big:text-[35px] text-[#171717] dark:text-[#DADBDD]'/>  
                        </div>
                        </Link>
                        <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 big:mt-1 text-black dark:text-white text-[8px] laptop:text-[13px] rounded font-ibmMono">
                            Email
                        </span>
                    </div>
                </div>

    
                <div className='flex items-center space-x-[10%] pl-[4%] my-3 lg:my-4 laptop:my-6 big:my-9'>

                {/* Github */}
                    <div className='relative group inline-block'>
                        <Link to='https://github.com/Donaldicon' target='_blank'>
                        <div
                        className={` h-8 w-8 flex items-center justify-center lg:w-[40px] lg:h-[40px] rounded-full laptop:w-[60px] laptop:h-[60px] big:w-[80px] big:h-[80px] transition-all duration-500 ease-in-out bg-white dark:bg-[#171717] border-[1px] big:border-[2px] dark:border-[#1c1c1c] :border-[#dadbdd]`}>
                            <FontAwesomeIcon icon={faGithub}className='cursor-pointer text-[15px] lg:text-[20px] laptop:text-[25px] big:text-[35px] text-[#171717] dark:text-[#DADBDD]'/>  
                        </div>
                        </Link>
                        <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 big:mt-1 text-black dark:text-white text-[8px] laptop:text-[13px] rounded font-ibmMono">
                            X
                        </span>
                    </div>

                {/* LinkedIn */}
                    <div className='relative group inline-block'>
                        <Link to='https://www.linkedin.com/in/chizitelu-azih-92bb87320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
                        <div
                        className={` h-11 w-11 flex items-center justify-center lg:w-[60px] lg:h-[60px] rounded-full laptop:w-[80px] laptop:h-[80px] big:w-[100px] big:h-[100px] transition-all duration-500 ease-in-out bg-white dark:bg-[#171717] border-[1px] big:border-[2px] dark:border-[#1c1c1c] :border-[#dadbdd]`}>
                            <FontAwesomeIcon icon={faLinkedin} className='cursor-pointer text-[20px] lg:text-[25px] laptop:text-[33px] big:text-[50px] text-[#171717] dark:text-[#DADBDD]'/>  
                        </div>
                        </Link>
                        <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 big:mt-1 text-black dark:text-white text-[8px] laptop:text-[13px] rounded font-ibmMono">
                            X
                        </span>
                    </div>


                </div>

                <p className='text-[#848485] font-jetBrainsMono font-semibold text-[10px] lg:text-[11px] laptop:text-[14px] big:text-[18px]'>Let's Connect</p>

                <h1 className='text-[#484848] dark:text-[#F0F0F0] text-[22px] lg:text-[25px] laptop:text-[32px] big:text-[45px] font-bold font-jetBrainsMono'>Social Links</h1>
            </div>
            
            {/* Resume */}
            <div className='bg-white dark:bg-[#171717] w-[27%] h-[170px] lg:h-[240px] laptop:h-[330px] big:h-[400px] pl-[2%] flex flex-col justify-center rounded-[20px] dark:border-[2px] dark:border-[#313131] transition-all duration-500 ease-in-out'>
                <p className='text-[#989898] dark:text-[#848485] font-jetBrainsMono font-semibold text-[10px] lg:text-[11px] laptop:text-[14px] big:text-[18px]'>More About Me</p>
                <a href="/Azih Chizitelu Donald's portfolio CV.pdf" download>
                <h1 className='font-bold text-[#B8B8B9] dark:text-[#484848] text-[25px] lg:text-[35px] laptop:text-[50px] big:text-[70px] mt-3'>View <br /> My <br /> Resume</h1>
                </a>
            </div>


            </div>
        </div>


  )
}

export default AboutComponent
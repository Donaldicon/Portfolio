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

const AboutComponentM = () => {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate('/projects')
    }

    const whatsappLink = 'https://wa.link/8oe2xm'

            const scrollToTop = () => {
        window.scrollTo(0,0);
      }
  return (
    <div className='md:hidden transition-all duration-500 dark:bg-[#171717] ease-in-out  bg-[##CFCFD0] px-[4%]  py-3  shadow-xl overflow-hidden font-jetBrainsMono  mt-[55px]'>
        <h1 className='bg-[#0a0707] text-[#CFCFD0] text-center py-3 font-bold text-[20px] font-ibmMono rounded-lg'>About Me</h1>

        <div className='overflow-hidden'>

        <div className='mt-5 flex flex-col items-center justify-between'>

            {/* Face */}
            <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            className='w-full'
            >
            <div className='transition-all duration-500 ease-in-out w-full  bg-white dark:bg-[#171717] flex items-center justify-center py-3 rounded-[30px] px-[4%] dark:border-[2px] dark:border-[#282828]'>
                <img src={nysc} alt="my picture" className='w-full object-cover rounded-[30px]'/>
            </div>
            </motion.div>

            {/* Text */}
            <motion.div
            initial={{opacity:0, x:50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            >
            <div className=' bg-white flex flex-col px-[4%] justify-center  rounded-[20px] dark:bg-[#171717] dark:border-[2px] dark:border-[#282828] mt-4 py-4'>
                <div className='flex items-center justify-between transition-all duration-500 ease-in-out'>
                    <p className='font-ibmMono text-[#2A2A2B] font-bold dark:text-[#F0F0F0] text-[27px]'>Donald Azih <br />Chizitelu</p>
                    <div className='flex items-center justify-center space-x-[1px] text-[#eddaf3] border-[3px] border-[#eddaf3] dark:border-[#33203a] dark:text-[#33203a] w-[50px] h-[50px] rounded-full text-[18px] font-bold'>
                        <span>{'<'}</span>
                        <span>{'/'}</span>
                        <span>{'>'}</span>
                    </div>
                </div>
                <p className='mt-3 lg:mt-5 text-[12px] lg:text-[16px] font-jetBrainsMono dark:text-[#B8B8B9] '><span className='text-[#1974D0]'>{'<p>'}</span> I’m a web developer who turns ideas into clean, scalable and interactive web experiences. <span className='text-[#1974D0]'>{"<br\u2009/\u2009>"}</span> <br />With a strong focus on frontend development, I love writing codes that not only works but also looks great and feels intuitive.<span className='text-[#1974D0]'>{'<p\u2009/\u2009>'}</span></p>
            </div>
            </motion.div>
        </div>
        </div>

        {/* Projects and My Stack */}
        <div className='my-5 laptop:my-7 big:my-10 flex flex-col items-center justify-between'>
            
            {/* Projects */}
            <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            className='w-full'
            >
            <div className='px-[4%] bg-white dark:bg-[#171717] py-3 phone:py-5 w-full rounded-[20px] mb-5 dark:border-[2px] dark:border-[#313131]'>
                    <h1 className='font-ibmMono text-[27px]  font-bold text-[#2A2A2B] dark:text-[#F0F0F0]'>Projects</h1>
                    
                    {/* dashed line */}
                    <div className='mt-[4px]  w-full border-t border-dashed border-[#C1C1C1]'/>
                    
                    {/* Row 1 */}
                    <div className='font-jetBrainsMono text-[14px] mt-3 flex flex-col phone:flex-row items-start space-y-3 phone:space-y-0 phone:items-center phone:justify-between transition-all duration-500 ease-in-out '>
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
                    <div className='font-jetBrainsMono text-[14px] mt-3 flex flex-col phone:flex-row items-start space-y-3 phone:space-y-0 phone:items-center phone:justify-between transition-all duration-500 ease-in-out'>
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
                            className='font-jetBrainsMono dark:text-[#F0F0F0]  text-[#5E5E5E] border-[1px] border-[#5e5e5e] dark:border-[#ebebeb] text-[10px] mt-5 font-semibold laptop:mt-7 big:mt-10 py-2 px-5 big:py-3 rounded-md transition-all duration-500 ease-out dark:hover:text-[#171717]  dark:hover:bg-[#EBEBEB] hover:text-[#f0f0f0] hover:bg-[#171717] z-20'>View More</button>
                        </motion.div>
                    </div>


            </div>
            </motion.div>

    
            {/* stacks */}
            <motion.div
            initial={{opacity:0, x:50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            className='w-full'
            >
            <div className='px-[4%] bg-white dark:bg-[#171717] py-3 phone:py-5 w-full rounded-[20px] dark:border-[2px] dark:border-[#313131]'>
                    <p className='bg-[#Ebebeb] text-[#5E5E5E] dark:bg-[#262626] dark:border-[2px] dark:border-[#363636] w-[60px] py-[3px] rounded-md text-center text-[10px] mb-1'>
                        My Stack
                    </p>
                    <h1 className='font-ibmMono text-[27px]  font-bold text-[#2A2A2B] dark:text-[#F0F0F0]'>My Web Toolkit</h1>

                    {/* Row 1 */}
                    <div className='flex flex-col items-start space-y-[10px] mt-5'>
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
                    <div className='flex items-center   space-x-[10px] lg:space-x-[15px] laptop:space-x-[20px] big:space-x-[25px] mt-[10px]'>

                        
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
            </motion.div>


        </div>

        {/* final row */}
        <div className='flex flex-col space-y-5 items-start'>
            {/* Let's work together */}
            <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            className='w-full'
            >
            <div className='bg-white dark:bg-[#171717] w-full  flex flex-col justify-center px-[4%] rounded-[20px] py-3 phone:py-5 dark:border-[2px] dark:border-[#313131] transition-all shadow-lg duration-500 ease-in-out '>
                <div className='flex items-center justify-center space-x-[1px] text-[#A544C5] border-[3px] border-[#A544C5] dark:border-[#A544C5]dark:text-[#A544C5] w-[50px] h-[50px] rounded-full text-[18px] font-bold'>
                    <span>{'<'}</span>
                    <span>{'/'}</span>
                    <span>{'>'}</span>
                </div>
                <Link to={whatsappLink} target='_blank'>
                <p className='text-[#2A2A2B] font-extrabold font-jetBrainsMono text-[18px] leading-[20px] mt-3 dark:text-[#f0f0f0]'> Let's <span className='text-[#1974D0]'>{'<br /\u2009\>'}</span> <br /> Work Together.. <span className='text-[30px]'> &#x2197; </span> </p>
                </Link>
            </div>
            </motion.div>


            {/* Social Links */}
            <motion.div
            initial={{opacity:0, x:50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            className='w-full'
            >
            <div className='bg-white dark:bg-[#171717] w-full px-[4%] py-3 phone:py-5 flex flex-col justify-center rounded-[20px] dark:border-[2px] dark:border-[#313131] transition-all duration-500 ease-in-out'>
                <div className='flex items-center space-x-[10%]'>
                {/* X */}
                    <div className='relative group inline-block'>
                        <Link to='https://x.com/azih_donald?s=11' target='_blank'>
                        <div
                        className={` h-11 w-11 flex items-center justify-center transition-all duration-500 ease-in-out bg-white dark:bg-[#171717] border-[1px] rounded-full big:border-[2px] dark:border-[#1c1c1c] :border-[#dadbdd]`}>
                            <FontAwesomeIcon icon={faXTwitter} className='cursor-pointer text-[20px] ] text-[#171717] dark:text-[#DADBDD]'/>  
                        </div>
                        </Link>
                        <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 big:mt-1 text-black dark:text-white text-[8px]  rounded font-ibmMono">
                            X
                        </span>
                    </div>

                    {/* Email */}
                    <div className='relative group inline-block'>
                        <Link to='mailto:chizitelu.azih.231374@gmail.com' target='_blank'>
                        <div
                        className={` h-8 w-8 flex items-center justify-center  rounded-full transition-all duration-500 ease-in-out bg-white dark:bg-[#171717] border-[1px] big:border-[2px] dark:border-[#1c1c1c] :border-[#dadbdd]`}>
                            <FontAwesomeIcon icon={faEnvelope}className='cursor-pointer text-[15px]  text-[#171717] dark:text-[#DADBDD]'/>  
                        </div>
                        </Link>
                        <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 big:mt-1 text-black dark:text-white text-[8px]  rounded font-ibmMono">
                            Email
                        </span>
                    </div>
                </div>

    
                <div className='flex items-center space-x-[10%] pl-[3%] my-3'>

                {/* Github */}
                    <div className='relative group inline-block'>
                        <Link to='https://github.com/Donaldicon' target='_blank'>
                        <div
                        className={` h-8 w-8 flex items-center justify-center rounded-full  transition-all duration-500 ease-in-out bg-white dark:bg-[#171717] border-[1px] big:border-[2px] dark:border-[#1c1c1c] :border-[#dadbdd]`}>
                            <FontAwesomeIcon icon={faGithub}className='cursor-pointer text-[15px]  text-[#171717] dark:text-[#DADBDD]'/>  
                        </div>
                        </Link>
                        <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 big:mt-1 text-black dark:text-white text-[8px]  rounded font-ibmMono">
                            X
                        </span>
                    </div>

                {/* LinkedIn */}
                    <div className='relative group inline-block'>
                        <Link to='https://www.linkedin.com/in/chizitelu-azih-92bb87320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
                        <div
                        className={` h-11 w-11 flex items-center justify-center  rounded-full transition-all duration-500 ease-in-out bg-white dark:bg-[#171717] border-[1px] big:border-[2px] dark:border-[#1c1c1c] :border-[#dadbdd]`}>
                            <FontAwesomeIcon icon={faLinkedin} className='cursor-pointer text-[20px] text-[#171717] dark:text-[#DADBDD]'/>  
                        </div>
                        </Link>
                        <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 big:mt-1 text-black dark:text-white text-[8px] rounded font-ibmMono">
                            X
                        </span>
                    </div>


                </div>

                <p className='text-[#848485] font-jetBrainsMono font-semibold text-[12px] '>Let's Connect</p>

                <h1 className='text-[#484848] dark:text-[#F0F0F0] text-[22px] font-bold font-jetBrainsMono'>Social Links</h1>
            </div>
            </motion.div>
            
            {/* Resume */}
            <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            className='w-full'
            >
            <div className='bg-white dark:bg-[#171717] w-full px-[4%] py-3 phone:py-5 flex flex-col justify-center rounded-[20px] dark:border-[2px] dark:border-[#313131] transition-all duration-500 ease-in-out'>
                <p className='text-[#989898] dark:text-[#848485] font-jetBrainsMono font-semibold text-[12px]'>More About Me</p>
                <a href="/Azih Chizitelu Donald's portfolio CV.pdf" download>
                <h1 className='font-bold text-[#1974D0] text-[25px]  mt-3'>View <br /> My Resume</h1>
                </a>
            </div>
            </motion.div>


            </div>
        </div>


  )
}
export default AboutComponentM
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import getIn from '../assets/get in touch/getIn.png'

import { motion, easeInOut } from 'motion/react'


import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const GetInTouch = () => {
  return (
    <section>
    <div className='transition-all duration-500 bg-[#f0f0f0] ease-in-out  dark:bg-[#171717] px-[4%] big:px-[15%] text-[#2A2A2B] dark:text-[#F0F0F0] pb-5 laptop:pb-8 pt-5 big:pb-10 hidden md:flex items-center justify-center space-x-[150px] lg:space-x-[200px] laptop:space-x-[280px] big:space-x-[380px] overflow-hidden'>
        <motion.div
        initial={{opacity:0, x:-50}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}>
        <div>
            <div className='text-[50px] laptop:text-[60px] big:text-[70px] text-[#656566] transition-all ease-in-out duration-500  rounded-full -mt-10 lg:-mt-7'>{'< /\u2009\>'}</div>
            <h1 className='text-[40px] laptop:text-[50px] big:text-[65px] font-ibmMono font-bold leading-[30px] laptop:leading-[35px] big:leading-[45px]'>Get In Touch</h1>
            <div className=' laptop:hidden text-[#AAABAD]'>_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _ _  _ _ _ _  </div>
            <div className='hidden laptop:block big:hidden text-[#AAABAD]'>__ __ __ ___ __ __ __ __ __ ___ __ __ __ __ __ __ __ __ __ __   </div>
            <div className='mt-3 hidden big:block text-[#AAABAD]'>________ ________  _______ _______ _______ _______ _______ _______ _______ </div>

            <Link to='mailto:chizitelu.azih.231374@gmail.com' target='_blank'>
                <div className='flex items-center gap-x-2 laptop:gap-x-5 mt-3 laptop:mt-5 big:mt-8'>
                    <div className='w-6 h-6 laptop:w-8 laptop:h-8 big:w-12 big:h-12 bg-white flex items-center justify-center rounded-full'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-[12px] text-black laptop:text-[15px] big:text-[20px]'/>
                    </div>
                    <p className='font-jetBrainsMono text-[10px] laptop:text-[13px] big:text-[17px] text-[#656566] transition-all ease-in-out duration-500 dark:text-[#656566]'>chizitelu.azih.231374@gmail.com</p>
                </div>
            </Link>

            <Link to='tel:+234-810 572 2281' target='_blank'>
                <div className='flex items-center gap-x-2 laptop:gap-x-5 mt-1 laptop:mt-2 big:mt-3'>
                    <div className='w-6 h-6 laptop:w-8 laptop:h-8 big:w-12 big:h-12 bg-white flex items-center justify-center rounded-full'>
                    <FontAwesomeIcon icon={faPhone} className='text-[10px] laptop:text-[12px] big:text-[15px] text-black'/>
                    </div>
                    <p className='font-jetBrainsMono text-[10px] laptop:text-[13px] big:text-[17px] text-[#656566] transition-all ease-in-out duration-500 dark:text-[#656566]'>+234-810 572 2281</p>
                </div>
            </Link>

            <div className='font-jetBrainsMono font-extrabold mt-5 text-[20px] laptop:text-[24px] big:text-[31px] italic transition-all ease-in-out duration-500 flex items-center space-x-6 laptop:space-x-8 big:space-x-10 text-[#656566] dark:text-[#656566]'>
                <Link to='https://github.com/Donaldicon' target='_blank'>
                <div className='flex items-center gap-x-1 laptop:gap-x-2 big:gap-x-3'>
                    <p>GitHub</p>
                    <span>&#x2197;</span>
                </div>
                </Link>

                <Link to='https://www.linkedin.com/in/chizitelu-azih-92bb87320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
                <div className='flex items-center gap-x-1 laptop:gap-x-2 big:gap-x-3'>
                    <p>LinkedIn</p>
                    <span>&#x2197;</span>
                </div>
                </Link>

                <Link to='https://x.com/azih_donald?s=11' target='_blank'>
                <div className='flex items-center gap-x-1 laptop:gap-x-2 big:gap-x-3'>
                    <p>X</p>
                    <span>&#x2197;</span>
                </div>
                </Link>
            </div>

            <Link to='https://www.instagram.com/chizitelu_azih?igsh=ZzYxczVyMW5uZ28%3D&utm_source=qr' target='_blank'>
            <div className='flex items-center gap-x-1 laptop:gap-x-2 big:gap-x-3 font-jetBrainsMono font-extrabold mt-5 text-[20px] laptop:text-[24px] big:text-[31px] italic text-[#656566]'>
                    <p>Instagram</p>
                    <span>&#x2197;</span>
            </div>
            </Link>

        </div>
        </motion.div>

        <motion.div
        initial={{opacity:0, x:50}}
        whileInView={{opacity:100, x:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}>
        <img src={getIn} alt="Get In" className='w-[220px] lg:w-[240px] laptop:w-[290px] big:w-[350px]'/>
        </motion.div>

    </div>

    {/* Mobile view */}
        <div className='transition-all duration-500 bg-[#f0f0f0] ease-in-out  dark:bg-[#171717] px-[4%] text-[#2A2A2B] dark:text-[#F0F0F0] pb-5 pt-5 md:hidden flex flex-col  overflow-hidden'>
        <motion.div
        initial={{opacity:0, y:50}}
        whileInView={{opacity:100, y:0}}
        transition={{duration:2, ease:easeInOut}}
        viewport={{once:true}}>
            <div className='text-[40px] text-[#656566]  rounded-full -mt-5'>{'< /\u2009\>'}</div>
            <h1 className='text-[36px] mt-4 font-ibmMono font-bold leading-[40px] '>Get In Touch</h1>

            <div className='text-[#AAABAD]'>__ __ __ ___ __ __ __ __ __ __ __ ___ __ __    </div>
        

            <Link to='mailto:chizitelu.azih.231374@gmail.com' target='_blank'>
                <div className='flex items-center gap-x-2 mt-3 '>
                    <div className='w-6 h-6  bg-white flex items-center justify-center rounded-full'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-[12px] text-black'/>
                    </div>
                    <p className='font-jetBrainsMono text-[10px] transition-all ease-in-out duration-500  text-[#656566] dark:text-[#656566]'>chizitelu.azih.231374@gmail.com</p>
                </div>
            </Link>

            <Link to='tel:+234-810 572 2281' target='_blank'>
                <div className='flex items-center gap-x-2  mt-1  big:mt-3'>
                    <div className='w-6 h-6  bg-white flex items-center justify-center rounded-full'>
                    <FontAwesomeIcon icon={faPhone} className='text-[10px]  text-black'/>
                    </div>
                    <p className='font-jetBrainsMono text-[13px] transition-all ease-in-out duration-500 text-[#656566] dark:text-[#656566]'>+234-810 572 2281</p>
                </div>
            </Link>
            </motion.div>

            <motion.div
            initial={{opacity:0, x:50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}
            className='flex justify-end'>
            <img src={getIn} alt="Get In" className='w-[180px] py-5'/>
            </motion.div>


            <motion.div
            initial={{opacity:0, x:-50}}
            whileInView={{opacity:100, x:0}}
            transition={{duration:2, ease:easeInOut}}
            viewport={{once:true}}>
            <div className='font-jetBrainsMono font-extrabold mt-5 text-[18px] transition-all ease-in-out duration-500 italic flex items-center space-x-6 text-[#656566]  dark:text-[#656566]'>
                <Link to='https://github.com/Donaldicon' target='_blank'>
                <div className='flex items-center gap-x-1'>
                    <p>GitHub</p>
                    <span>&#x2197;</span>
                </div>
                </Link>

                <Link to='https://www.linkedin.com/in/chizitelu-azih-92bb87320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
                <div className='flex items-center gap-x-1 laptop:gap-x-2 big:gap-x-3'>
                    <p>LinkedIn</p>
                    <span>&#x2197;</span>
                </div>
                </Link>


            </div>

            <div className='font-jetBrainsMono font-extrabold mt-3 text-[18px] italic flex items-center space-x-6 text-[#656566] transition-all ease-in-out duration-500 dark:text-[#656566]'>
            <Link to='https://x.com/azih_donald?s=11' target='_blank'>
                <div className='flex items-center gap-x-1 '>
                    <p>X</p>
                    <span>&#x2197;</span>
                </div>
            </Link>

            <Link to='https://www.instagram.com/chizitelu_azih?igsh=ZzYxczVyMW5uZ28%3D&utm_source=qr' target='_blank'>
            <div className='flex items-center gap-x-1 '>
                    <p>Instagram</p>
                    <span>&#x2197;</span>
            </div>
            </Link>
            </div>
            </motion.div>


    </div>
    </section>
  )
}

export default GetInTouch
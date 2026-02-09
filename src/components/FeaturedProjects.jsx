import line from '../assets/featured projects/line.png'

import ethereal from '../assets/featured projects/Ethereal.png'

import foodieland from '../assets/featured projects/Foodieland.png'

import chesscorner from '../assets/featured projects/ChessCorner.png'

import programming from '../assets/featured projects/Programming.png'

import apple from '../assets/featured projects/Apple.png'

import stack1 from '../assets/featured projects/Stack1.png'

import stack2 from '../assets/featured projects/Stack2.png'

import { Link, useNavigate } from 'react-router-dom'

import { motion, easeInOut } from 'motion/react'



const FeaturedProjects = () => {
    const navigate = useNavigate();

    const goToProjects = () => {
        navigate("/projects");
    }

        const scrollToTop = () => {
        window.scrollTo(0,0);
      }
  return (
    <section>
        <div className='w-full h-[1.5px] bg-[#484848] opacity-0 dark:opacity-100 transition-all duration-500 ease-in-out'/>
        <div className='pb-8 bg-[#f0f0f0] transition-all duration-500 ease-in-out  dark:bg-[#171717] relative hidden md:block'>
            <img src={programming} alt="Background for featured Projects" className='md:h-[800px] h1:h-[920px] h2:h-[970px] laptop:h-[1100px] h5:h-[1180px] xl:h-[1120px] h3:h-[1230px] 2xl:h-[1300px] h4:h-[1500px] opacity-10 big:h-[1600px]' />

            

            <div className='absolute top-12 left-0 px-[4%] big:px-[15%]'>
                <h1 className='text-[23px] laptop:text-[30px] big:text-[40px] font-ibmMono font-bold text-center text-[#2A2A2B] dark:text-[#f0f0f0]'>Featured Projects</h1>
                <div className='flex items-center justify-center mt-2 laptop:mt-3 big:mt-5 -mb-3 laptop:-mb-5  -big:mb-7'>
                    <img src={line} alt="Line" className='w-[160px] laptop:w-[190px] big:w-[290px]'/>
                </div>
                {/* Parent Div for all projects */}
                <div className='flex w-full items-center justify-center px-[1.3%]'>
                <div className='flex items-center justify-center w-full space-y-[8%] mx-auto space-x-5 laptop:space-x-6 big:space-x-10'>
                    {/* Column 1 */}
                    
                    
                    <div className='flex flex-col space-y-5 laptop:space-y-6 big:space-y-10 w-full'>
                        {/* row 1 column 1 */}
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
                                <p className='font-jetBrainsMono text-[10px] laptop:text-[12px] big:text-[15px] text-[#848485] dark:text-[#CFCFD0] transition-all duration-500 ease-in-out'>Ethereal is a startup website that aims to revolutionize accommodation search for travelers in Nigeria. </p>
                            </div>
                        
                        
                        </div>
                        </Link>
                       </motion.div>
                    
                    
                        {/* column 1 row 2  */}
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

                    
                     
                    {/* Column 2 */}
                    <div className='flex flex-col w-full transition-all duration-500 ease-in-out rounded-md space-y-5 laptop:space-y-6 big:space-y-10 '>
                        {/* row 1 column 2 */}
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:100, y:0}}
                        transition={{duration:1, ease:easeInOut}}
                        viewport={{once:true}}
                        className=''
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
                    
                    
                        {/* column 2 row 2  */}
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
                </div>

                {/* View More */}
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
                className='font-jetBrainsMono text-[#EBEBEB] bg-[#171717] dark:bg-[#EBEBEB] dark:text-[#171717] text-[12px] laptop:text-[14px] big:text-[18px] mt-5 laptop:mt-7 big:mt-10 py-2 px-5 big:py-3 rounded-md transition-all duration-500 ease-out hover:text-[#171717] hover:bg-[#EBEBEB] dark:hover:text-[#EBEBEB] dark:hover:bg-[#171717] z-20'>View More</button>
                </motion.div>
                </div>
            </div>
        </div>


        {/* Mobile  */}
        <div className='pb-4 transition-all duration-500 bg-[#f0f0f0] ease-in-out  dark:bg-[#171717] relative md:hidden'>
            <img src={programming} alt="Background for featured Projects" className='h-[750px] phone2:h-[910px] p1:h-[800px] phone3:h-[1050px] opacity-10 object-cover' />

            

            <div className='absolute top-12 left-0 px-[4%] '>
                <h1 className='text-[23px] font-ibmMono font-bold text-center text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out'>Featured Projects</h1>
                <div className='flex items-center justify-center mb-5'>
                    <img src={line} alt="Line" className='w-[190px]'/>
                </div>
                {/* Parent Div for all projects */}
                <div className='flex w-full items-center justify-center px-[2.0%]'>
                <div className='flex items-center justify-center w-full'>
                    {/* Column 1 */}
                    <div className='flex flex-col space-y-5 w-full '>
                        {/* row 1 column 1 */}
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:100, y:0}}
                        transition={{duration:1, ease:easeInOut}}
                        viewport={{once:true}}
                        className=''
                        >
                        <Link to='https://ethereal-ashy.vercel.app/' target='_blank'>
                        <div className='w-full dark:border-[#5E5E5E] dark:border-[2px]  bg-white dark:bg-[#171717] rounded-lg px-3 py-3  shadow-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-105'>
                            <img src={ethereal} alt="Ethereal" className='w-full h-auto rounded-md shadow-sm dark:opacity-60 transition-all duration-500 ease-in-out'/>
                            <div className='px-[2%]'>
                                {/* Project name and stacks */}
                                <div className='flex items-center space-x-2 '>
                                    <h1 className='text-[18px] font-bold font-ibmMono text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out'>Ethereal</h1>
                                    <img src={stack1} alt="Stack used foe ethereal" 
                                    className='w-[30px] '/>
                                </div>

                                {/* Project details */}
                                <p className='font-jetBrainsMono text-[9px] text-[#848485] dark:text-[#CFCFD0] transition-all duration-500 ease-in-out'>Ethereal is a startup website that aims to revolutionize accommodation search for travelers in Nigeria. </p>
                            </div>
                        
                        
                        </div>
                        </Link>
                        </motion.div>
                    
                    
                        {/* column 1 row 2  */}
                        <motion.div
                        initial={{opacity:0, y:30}}
                        whileInView={{opacity:100, y:0}}
                        transition={{duration:1, ease:easeInOut}}
                        viewport={{once:true}}
                        className=''
                        >
                        <Link to='https://chesscornerofficial.com/' target='_blank'>
                        <div className='w-full dark:border-[#5E5E5E] bg-white dark:bg-[#171717] dark:border-[2px]  rounded-lg px-3 py-3  shadow-md cursor-pointer transition-all duration-500 ease-in-out hover:scale-105'>
                            <img src={chesscorner} alt="Chess Corner" className='w-full h-auto rounded-md shadow-sm dark:opacity-60 transition-all duration-500 ease-in-out'/>
                            <div className='px-[2%]'>
                                {/* Project name and stacks */}
                                <div className='flex items-center space-x-2 '>
                                    <h1 className='text-[18px] font-bold font-ibmMono text-[#2A2A2B] dark:text-[#f0f0f0] transition-all duration-500 ease-in-out'>ChessCorner</h1>
                                    <img src={stack2} alt="Stack used foe ethereal" 
                                    className='w-[40px]'/>
                                </div>

                                {/* Project details */}
                                <p className='font-jetBrainsMono text-[9px] text-[#848485] dark:text-[#CFCFD0] transition-all duration-500 ease-in-out'>ChessCorner is a startup dedicated to building a strong chess community. The website has an online store for chess gear and a section for blogs. </p>
                            </div>
                        
                        
                        </div>
                        </Link>
                        </motion.div>
                    
                    
                    </div>


                    

                </div>
                </div>

                {/* View More */}
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
                className='font-jetBrainsMono text-[#EBEBEB] bg-[#171717] dark:bg-[#EBEBEB] dark:text-[#171717] text-[12px] laptop:text-[14px] big:text-[18px] mt-6 laptop:mt-7 big:mt-10 py-2 px-5 big:py-3 rounded-md transition-all duration-500 ease-out hover:text-[#171717] hover:bg-[#EBEBEB] dark:hover:text-[#EBEBEB] dark:hover:bg-[#171717] z-30'>View More</button>
                </motion.div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default FeaturedProjects
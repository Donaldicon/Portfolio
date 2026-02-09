//Name
import Name from './Name'
import DelayRender from './DelayRender'

import { NavLink } from 'react-router-dom'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMoon } from '@fortawesome/free-regular-svg-icons'

import { faSun } from '@fortawesome/free-regular-svg-icons'

//Profile Photo
import profilePhoto from '../assets/navbar/profile-photo.png'

import { useState, useEffect } from 'react'



const Navbar = () => {
//Dark Mode

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const saved = localStorage.theme;
    if (saved === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, [])

  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light"
    }
  }, [theme] )


  //Navbar Open and close
  const [isOpen, setIsOpen] = useState("");

  const openBar = () => {
    setIsOpen(!isOpen)
  }

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEnabled(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

     const scrollToTop = () => {
        window.scrollTo(0,0);
      }

        //Refresh scroll to top
useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}, []);

    const whatsappLink = 'https://wa.link/8oe2xm'

  return (
    <section>
      <div className='hidden bg-[#f2f2f2] dark:bg-[#171717] dark:text-white md:flex items-center justify-between py-3 px-[4%] laptop:py-6 big:px-[15%] big:py-10 shadow-lg dark:shadow-[#242323] fixed w-full z-50 transition-all duration-500 ease-in-out '>
        <span className='font-ibmMono italic font-[700] text-[15px] laptop:text-[20px] big:text-[30px] fixed'>
          <DelayRender delay={7700}>
            <Name />
          </DelayRender>

        </span>

        <div className='relative left-[50%] right-[50%] -translate-x-1/2' >
          <div className='flex items-center justify-center space-x-10 bg-white dark:bg-[#1E1E1E]  border-[#E3E4E5] dark:border-[#484849] border-[2.5px] px-3 py-2 rounded-lg laptop:rounded-xl font-jetBrainsMono text-[#848485] dark:text-[#545455] text-[11px] laptop:text-[15px] big:text-[20px] transition-all duration-500 ease-in-out '>
            <NavLink to='/' onClick={scrollToTop} className={ `text-[#2A2A2B] dark:text-[#F0F0F0] transition-all duration-500 ease-in-out font-semibold ${enabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'} `} >Home</NavLink>
            <NavLink to='/about' onClick={scrollToTop}  className={`transition-all duration-500 ease-in-out hover:text-[#2A2A2B] dark:hover:text-[#F0F0F0] ${enabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'} `} >About Me</NavLink>
            <NavLink to='/projects' onClick={scrollToTop}  className={`transition-all duration-500 ease-in-out hover:text-[#2A2A2B] dark:hover:text-[#F0F0F0] ${enabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'} `}>Projects</NavLink>
            <NavLink to={whatsappLink}  target='_blank' className={`transition-all duration-500 ease-in-out hover:text-[#2A2A2B] dark:hover:text-[#F0F0F0] ${enabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'} `}>Contact Me</NavLink>
          </div>
        </div>

        <div 
        className='flex items-center space-x-3 laptop:space-x-6'>
          <div className='relative group inline-block'>
            <button 
            onClick={() => {setTheme("dark")}}
            disabled= {theme === "dark"}
            className={` h-5 w-5 rounded-full flex items-center justify-center laptop:h-7 laptop:w-7 big:w-12 big:h-12 transition-all duration-500 ease-in-out 
            ${theme === "dark" ? 'bg-white shadow-md border text-black' : 'bg-none bg-[#f2f2f2] shadow-none text-gray-400'}
            `}>
              <FontAwesomeIcon icon={faMoon} className='cursor-pointer  text-[10px] laptop:text-[16px] big:text-[20px]'/>
            </button>

            <span className='absolute opacity-0 left-1/2 -translate-x-1/2 group-hover:opacity-100  text-black dark:text-white text-[8px] laptop:text-[13px] big:text-[17px] rounded-md scale-95 group-hover:scale-100 font-ibmMono transition-all duration-500 ease-in-out '>
              Dark
            </span>
          </div>
          
          <div className='relative group inline-block'>
            <div
            onClick={() => {setTheme("light")}}
            disabled= {theme === "light"}
            className={` h-5 w-5 flex items-center justify-center rounded-full laptop:w-7 laptop:h-7 big:w-12 big:h-12 transition-all duration-500 ease-in-out 
            ${theme === "light" ? 'border bg-white shadow-md text-black' : 'bg-none bg-[#f2f2f2 shadow-none text-gray-400'}
            `}>
              <FontAwesomeIcon icon={faSun} className='cursor-pointer text-[10px] laptop:text-[16px] big:text-[20px]'/>  
            </div>

            <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 big:mt-1 
          text-black dark:text-white text-[8px] laptop:text-[13px] rounded font-ibmMono">
              Light
            </span>
          </div>

          <span className=''>
            <img 
            src={profilePhoto} 
            alt="Profile Photo" 
            className='rounded-full w-[25px] laptop:w-[35px] big:w-[45px]'/>
          </span>

        </div>
        
      </div>


      {/* Small Screen */}
     <div className='fixed z-50 w-full'>
      <div className='md:hidden bg-[#f2f2f2] dark:bg-[#171717] dark:text-white flex items-center transition-all duration-500 ease-in-out  justify-between h-[50px] px-[4%] laptop:py-6 big:px-[15%] shadow-sm dark:shadow-gray-200 '>
        <span className='font-ibmMono italic font-[700] text-[16px] laptop:text-[25px]'>
          <DelayRender delay={7500}>
          <Name />
          </DelayRender>
        </span>


        <div 
        className='flex items-center space-x-3 laptop:space-x-6'>
  
          <span className='pr-7 fixed right-[14px] phone:right-[20px] p1:right-[28px] phone2:right-[35px] phone3:right-[43px]'>
            <img 
            src={profilePhoto} 
            alt="Profile Photo" 
            className='rounded-full w-[30px] laptop:w-[40px]'/>
          </span>

          <div 
          onClick={openBar}
          className={`flex flex-col items-center space-y-[3px] fixed right-[4%] ${enabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}`}
          >
            <span className={`h-[2px]  bg-black dark:bg-white  origin-center transition-all duration-700 ease-in-out ${isOpen ? 'w-[20px] rotate-45 translate-y-[5.3px]' : 'w-[10px]'}`}/>
            <span className={`h-[2px]  bg-black  dark:bg-white origin-center ${isOpen ? 'opacity-0' : 'w-[15px]'}`}/>
            <span className={`h-[2px]  bg-black dark:bg-white origin-center transition-all duration-700 ease-in-out ${isOpen ? 'w-[20px] -rotate-45 -translate-y-[4.5px]' : 'w-[10px]'}`}/>
          </div>

        </div>
        
      </div>
      <div className={`absolute top-[51px] left-0 bg-[#f2f2f2] dark:bg-[#171717] transition-all duration-700 ease-in-out w-full overflow-hidden z-50 shadow-2xl ${isOpen ? "h-[240px] opacity-100" : "h-0 opacity-0"}`}
      onClick={openBar}
      >
        
        <div>
          <div className={`flex items-center flex-col justify-center space-y-7 px-3 py-5 rounded-lg  font-jetBrainsMono text-[#848485] dark:text-[#545455] text-[11px] laptop:text-[18px] transition-opacity duration-500 ${isOpen ? "opacity-100":"opacity-0"}`}>
              <NavLink to='/' onClick={scrollToTop}  className={ `text-[#2A2A2B] dark:text-[#F0F0F0] transition-all duration-500 ease-in-out font-semibold ${enabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'} `} >Home</NavLink>
            <NavLink to='/about' onClick={scrollToTop}  className={`transition-all duration-500 ease-in-out hover:text-[#2A2A2B] dark:hover:text-[#F0F0F0] ${enabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'} `} >About Me</NavLink>
            <NavLink to='/projects' onClick={scrollToTop}  className={`transition-all duration-500 ease-in-out hover:text-[#2A2A2B] dark:hover:text-[#F0F0F0] ${enabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'} `}>Projects</NavLink>
            <NavLink to={whatsappLink} target='_blank' className={`transition-all duration-500 ease-in-out hover:text-[#2A2A2B] dark:hover:text-[#F0F0F0] ${enabled ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'} `}>Contact Me</NavLink>
                <div 
                className='flex items-center space-x-3 laptop:space-x-6'>
                  <div className='relative group inline-block'>
                  <button 
                  onClick={() => {setTheme("dark")}}
                  disabled= {theme === "dark"}
                  className={` h-5 w-5 rounded-full flex items-center justify-center laptop:h-9 laptop:w-9 transition-all duration-500 ease-in-out 
                  ${theme === "dark" ? 'bg-white shadow-md border text-black' : 'bg-none bg-[#f2f2f2] shadow-none text-gray-400'}
                  `}>
                    <FontAwesomeIcon icon={faMoon} className='cursor-pointer  text-[10px] laptop:text-[18px]'/>
                  </button>

                  <span className='absolute opacity-0 left-1/2 -translate-x-1/2 group-hover:opacity-100  text-black dark:text-white text-[8px] laptop:text-[13px] rounded-md scale-95 group-hover:scale-100 font-ibmMono transition-all duration-500 ease-in-out '>
                    Dark
                  </span>
                  </div>
                
                  <div className='relative group inline-block'>
                    <div
                    onClick={() => {setTheme("light")}}
                    disabled= {theme === "light"}
                    className={` h-5 w-5 flex items-center justify-center rounded-full laptop:w-9 laptop:h-9 transition-all duration-500 ease-in-out 
                    ${theme === "light" ? 'border bg-white shadow-md text-black' : 'bg-none bg-[#f2f2f2 shadow-none text-gray-400'}
                    `}>
                      <FontAwesomeIcon icon={faSun} className='cursor-pointer text-[10px] laptop:text-[18px] '/>  
                    </div>

                    <span className="absolute left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500
                  text-black dark:text-white text-[8px] laptop:text-[13px] rounded font-ibmMono">
                      Light
                    </span>
                  </div>
                </div>
          </div>
              
        </div>
      </div>
    </div>
    </section>
  )
}

export default Navbar
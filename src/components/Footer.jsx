import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCopyright } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { Link } from "react-router-dom"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className='transition-all duration-500 bg-[#171717] ease-in-out  dark:bg-[#f0f0f0] px-[4%] big:px-[15%] text-[#EBEBEB] dark:text-[#171717] py-3 md:py-5 laptop:py-8 big:py-10 flex items-center justify-between overflow-hidden font-jetBrainsMono text-[10px] md:text-[12px] font-bold laptop:text-[14px] big:text-[17px]'>
      {/* left */}
      <div>
        <div className="flex items-center justify-cente space-x-1">
          <FontAwesomeIcon icon={faCopyright} className="text-[10px] laptop:text-[12px] big:text-[15px]"/>
          <span>{year} Donald Azih</span>
        </div>
        <p className="md:mt-1 laptop:mt-2 big:mt-3">All rights reserved.</p>
      </div>

      {/* right */}
      <div className="space-x-3 laptop:space-x-5 big:space-x-8 text-[10px] md:text-[15px] laptop:text-[20px] big:text-[30px] flex items-center justify-center">
        <Link to='https://github.com/Donaldicon' target='_blank'>
        <div className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] laptop:w-[50px] laptop:h-[50px] big:w-[65px] big:h-[65px] shadow-lg rounded-full bg-[#262626] dark:bg-white flex items-center justify-center transition-all duration-500 ease-in-out"><FontAwesomeIcon icon={faGithub} /></div>
        </Link>
        
        <Link to='https://x.com/azih_donald?s=11' target='_blank'>
        <div className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] laptop:w-[50px] laptop:h-[50px] big:w-[65px] big:h-[65px] shadow-lg rounded-full bg-[#262626] dark:bg-white flex items-center justify-center transition-all duration-500 ease-in-out">        <FontAwesomeIcon icon={faXTwitter}/></div>
        </Link>
        
        <Link to='https://www.linkedin.com/in/chizitelu-azih-92bb87320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='_blank'>
        <div className="w-[20px] h-[20px] md:w-[40px] md:h-[40px] laptop:w-[50px] laptop:h-[50px] big:w-[65px] big:h-[65px] shadow-lg rounded-full bg-[#262626] dark:bg-white flex items-center justify-center transition-all duration-500 ease-in-out">        <FontAwesomeIcon icon={faLinkedin}/></div>
        </Link>
        



      </div>
    </div>
  )
}

export default Footer
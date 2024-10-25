import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faInstagram, faXTwitter  } from "@fortawesome/free-brands-svg-icons";
import { icon } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';



function Nav1() {

    const socialIcons= [
        faFacebookF,faXTwitter,faInstagram,faLinkedinIn
    ]
  return (
    <div className='w-full h-[48px]  bg-black text-white px-20 py-2 hidden md:flex justify-between item-center'>
        
        {/* left */}
        <div className=' flex content-center gap-x-4  leading-3'>
            <div className=' flex flex-col  justify-center'>
                <img src=".\assets\nav-1\Vector.png" alt="vector"  width={20} height={215}/>
            </div>
            <div className=' font-normal text-xs '>
                Email:
                <p className=' text-[#15B392]'>Travelbooking@gmail.com</p>
            </div>
    
        </div>
        <div className=' h-full flex justify-center items-center gap-x-2'>

            
            {
                socialIcons?.map((icon,index)=>(
                    
                    <div className='border-white border-[1px]  h-fit px-2 py-[0.5px] rounded-full' key={index}> 
                <FontAwesomeIcon icon={icon} size='sm'  />
                </div>
               
            ))}
                        

        </div>
        
    </div>
  )
}

export default Nav1
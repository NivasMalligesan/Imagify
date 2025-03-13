import React from 'react'
import { assets } from '../assets/assets'
import { FaGithub , FaInstagram , FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex items-center justify-between 
    gap-4 py-5 mt-20'>
        <img src={assets.logo} alt="" width={150}/>
        <div>
          <h1 className='text-xl'>
          Created By
          <span className='bg-black py-2 px-2 rounded-xl ml-2 text-white '>
           Nivas Malligesan
          </span>
          </h1>
        </div>

        <div className='flex gap-4'>
          <a href="https://www.linkedin.com/in/nivas-malligesan/"> 
            <FaLinkedinIn  size={25}/>
          </a>
          <a href="https://github.com/NivasMalligesan">
            <FaGithub size={25}/>
          </a>
          <a href="https://www.instagram.com/nivas_ig?igsh=MWVhejQ2OXM2a2F3eQ==">
            <FaInstagram  size={25}/>
          </a>

        </div>
    </div>
  )
}

export default Footer

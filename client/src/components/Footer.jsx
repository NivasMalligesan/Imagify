import React from 'react'
import { assets } from '../assets/assets'
import { FaGithub , FaInstagram , FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex items-center justify-between 
    gap-4 py-5 mt-20'>
        <img src={assets.logo} alt="" width={150}/>
        <div className='flex gap-4'>
            <FaLinkedinIn  size={25}/>
            <FaGithub size={25}/>
            <FaInstagram  size={25}/>
        </div>
    </div>
  )
}

export default Footer
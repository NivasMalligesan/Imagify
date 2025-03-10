import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create Ai Images</h1>
        <p className='text-gray-500 mb-8'>Turn your ideas into stunning images with AI</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg '/>
            <div>
                <h2 className='text-3xl font-medium wax-w-lg mb-4'>Introducing the AI Powered Text To Image Generator </h2>
                <p className='text-gray-600 mb-4'>Unleash your creativity with our AI-Powered Text-to-Image Generator! This advanced tool transforms
                 your words into stunning visuals in seconds. Simply input a description, and our AI model will generate high-quality,
                 realistic, or artistic images based on your text</p>
                 <p className='text-gray-600'>Transform your words into stunning visuals with our AI-Powered Text-to-Image Generator! Whether you need realistic 
                images, artistic illustrations, or conceptual designs, our AI turns your text descriptions into eye-catching graphics instantly.</p>

            </div>
        </div>
    </motion.div>
  )
}

export default Description
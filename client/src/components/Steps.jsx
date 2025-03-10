import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 0.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    
    className='flex flex-col items-center justify-center text-center my-32'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How It Works</h1>
        <p className='text-lg text-gray-600 mb-8'>Transform Words Into Stunning Images</p> 
        <div className=' space-y-4 w-full max-w-3xl text-sm'>
            {stepsData.map((items,index)=>(
                <div key={index} className='flex items-center gap-4 px-8 p-5 bg-white/20 shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-xl'>
                    <img src={items.icon} width={40} alt="" />
                    <div>
                        <h1 className='text-xl font-medium'>{items.title}</h1>
                        <p className='text-gray-500'>{items.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Steps
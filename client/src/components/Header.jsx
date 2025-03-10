import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col justify-center items-center text-center my-20'
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'
      >
        <p>Best Text To Image Generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className='text-4xl sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center font-medium max-w-[300px]'
      >
        Turn Text To <span className='text-blue-600'>Image</span> In Seconds
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className='text-center max-w-xl mx-auto mt-5'
      >
        Unleash your creativity with our AI-powered text-to-image generator. <br />
        Just type and see the magic we can perform.
      </motion.p>

      <motion.button
        onClick={onClickHandler}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ default: { duration: 0.8 }, opacity: { delay: 0.8, duration: 1 } }}
        className='flex items-center cursor-pointer sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 gap-2 rounded-full'
      >
        Generate Images
        <img src={assets.star_group} alt="" className='h-6' />
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className='flex flex-wrap justify-center mt-16 gap-3'
      >
        {Array(6).fill('').map((_, index) => (
          <motion.img
            whileHover={{ scale: 1.05 }}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
            src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
            alt=""
            key={index}
            width={70}
          />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className='mt-2 text-neutral-600'
      >
        Generated Images From Imagify
      </motion.p>
    </motion.div>
  )
}

export default Header

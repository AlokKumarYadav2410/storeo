import React from 'react'
import { useNavigate } from 'react-router'
import heroImg from '../assets/landing.jpg'
import { motion } from 'motion/react'
import { containerVariants, itemVariants } from '../animations'

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex flex-1 sm:flex-none sm:h-screen items-center justify-center overflow-hidden">

      <img
        src={heroImg}
        alt="Hero"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* <div className="absolute inset-0 bg-black/30" /> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="absolute inset-0 bg-black/30 flex flex-col gap-4 items-center justify-center text-white text-center px-4"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold">
          Welcome to{' '}
          <motion.span
            variants={itemVariants}
            className="drop-shadow-[5px_6px_12px_rgba(0,0,0,0.4)]"
          >
            Storeo
          </motion.span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-2xl">
          Discover amazing products and connect with us!
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-amber-200 text-black rounded-lg"
        >
          Go to Products
        </motion.button>
      </motion.div>


    </section>
  )
}

export default Home

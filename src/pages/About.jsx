import React from 'react'
import { motion } from 'motion/react'
import { FaLightbulb, FaRocket, FaPalette } from 'react-icons/fa'
import { containerVariants, itemVariants } from '../animations'
import { Link } from 'react-router'

const About = () => {
  const features = [
    {
      icon: <FaLightbulb className="text-3xl" />,
      title: "Wide Selection",
      description: "Explore a curated collection of amazing products from various categories"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Fast Performance",
      description: "Lightning-fast loading times and smooth browsing experience"
    },
    {
      icon: <FaPalette className="text-3xl" />,
      title: "Beautiful Design",
      description: "Modern, responsive UI that works seamlessly on all devices"
    }
  ]

  const technologies = [
    { name: "React", category: "Frontend Framework" },
    { name: "Vite", category: "Build Tool" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Framer Motion", category: "Animations" },
    { name: "React Router", category: "Navigation" },
    { name: "Axios", category: "API Communication" }
  ]

  return (
    <div className="min-h-screen text-(--accent) transition-colors duration-500">
      {/* Hero Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="pt-10 md:pt-16 px-4 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-amber-400">Storeo</span>
          </h1>
          <p className="text-xl md:text-2xl text-(--text-secondary) max-w-3xl mx-auto">
            Your gateway to discovering amazing products with a seamless shopping experience
          </p>
        </motion.div>
      </motion.section>

      {/* What We Do */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-10 px-4 max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="bg-(--card) rounded-xl p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
          <p className="text-lg leading-relaxed text-(--text-secondary)">
            Storeo is a modern e-commerce platform designed to make product discovery simple and enjoyable. 
            We connect you with a diverse range of products, providing detailed information and an intuitive interface 
            that makes shopping a delightful experience. Whether you're browsing casually or searching for something specific, 
            Storeo has you covered.
          </p>
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-10 px-4 max-w-6xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Why Choose Storeo?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-(--card) rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-amber-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-(--text-secondary)">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-10 px-4 max-w-6xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Built With Modern Technology
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-(--card) rounded-lg p-6 border-l-4 border-amber-400 shadow-lg"
            >
              <h3 className="text-xl font-bold text-amber-400">{tech.name}</h3>
              <p className="text-(--text-secondary) mt-2">{tech.category}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-10 px-4 max-w-6xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Explore?</h2>
          <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
            Start discovering amazing products today and experience shopping like never before
          </p>
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-black text-amber-400 rounded-lg font-bold hover:scale-105 active:scale-95 hover:bg-gray-900 transition-all duration-300"
          >
            Browse Products
          </Link>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default About

import React from 'react'
import { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { containerVariants, itemVariants } from '../animations';

const Products = () => {

  const { products } = useContext(ProductDataContext);

  console.log(products)

  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-[#A9A09A] max-w-500 m-auto'>
      {products.map((product) => (
        <Link to={`/products/${product.id}`} className='p-4 m-2 rounded-xl shadow-lg flex flex-col gap-4 sm:gap-10 bg-blue-50' key={product.id}>
          <motion.div variants={itemVariants}
            initial="hidden"
            animate="show" className='h-60 flex justify-center items-center'>
            <img src={product.image} alt={product.title} className='h-full w-full object-fit object-center hover:scale-110 transition-transform duration-300' />
          </motion.div>
          <motion.div variants={containerVariants}
            initial="hidden"
            animate="show" className='space-y-1 sm:space-y-2'>
            <motion.h1 variants={itemVariants} className='font-bold text-md sm:text-lg lg:text-xl truncate'>{product.title}</motion.h1>
            <motion.p variants={itemVariants} className='font-medium text-sm sm:text-lg'>Price: <span className='font-bold text-sm sm:text-lg text-blue-400'>${product.price}</span></motion.p>
          </motion.div>
        </Link>
      ))}
    </div>
  )
}

export default Products

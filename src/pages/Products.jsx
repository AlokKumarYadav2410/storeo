import React from 'react'
import { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router';
const Products = () => {

  const { products } = useContext(ProductDataContext);

  console.log(products);

  return (
    <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 bg-[#A9A09A] max-w-500 m-auto'>
      {products.map((product) => (
        <Link to={`/products/${product.id}`} className='p-4 m-2 rounded-xl shadow-lg flex flex-col gap-10 bg-blue-50' key={product.id}>
          <div className='h-60 flex justify-center items-center'>
            <img src={product.image} alt={product.title} className='h-full w-full object-fit object-center hover:scale-110 transition-transform duration-300' />
          </div>
          <div className='space-y-2'>
            <h1 className='font-bold text-xl truncate'>{product.title}</h1>
          <p className='font-medium text-lg'>Price: <span className='font-bold text-lg text-blue-400'>${product.price}</span></p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Products

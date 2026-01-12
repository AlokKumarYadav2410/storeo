import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router'
import { ProductDataContext } from '../context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductDataContext);
  const product = products.find((elem) => elem.id === parseInt(id));

  return (
    <div className='flex-1 flex justify-center items-center bg-[#A9A09A] p-4'>
      <div className='flex flex-col md:flex-row justify-between items-center max-w-4xl m-auto gap-20 p-4 bg-blue-50 rounded-lg shadow-lg'>
        <img src={product.image} alt="" className='h-80'/>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold'>{product.title}</h2>
          <p>Category: <span className='text-gray-800'>{product.category.toUpperCase()}</span></p>
          <p>{product.description}</p>
          <div className='flex gap-4'>
            <p>Rating Count: {product.rating.count}</p>
            <p>Rating: {product.rating.rate}</p>
          </div>
          <div className='flex gap-4 items-center'>
            <p className='text-xl font-bold'>Price: <span className='text-green-700'>${product.price}</span></p>
            <button className='px-4 py-2 bg-green-600 hover:bg-green-500 active:scale-95 cursor-pointer text-white rounded-md transition-all duration-300'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

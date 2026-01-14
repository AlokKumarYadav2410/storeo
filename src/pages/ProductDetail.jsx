import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router'
import { ProductDataContext } from '../context/ProductContext';
import Loader from '../components/Loader';
import { fetchProductById } from '../api/productApi';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const { products, loading } = useContext(ProductDataContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center gap-4 h-screen">
        <Loader />
        <h1 className="text-2xl font-bold">Loading product...</h1>
      </div>
    );
  }

  // const product = products.find((elem) => elem.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-semibold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className='flex-1 flex justify-center items-center bg-[#A9A09A] p-4'>
      <div className='flex flex-col md:flex-row justify-between items-center max-w-6xl m-auto gap-4 md:gap-20 p-8 bg-blue-50 rounded-lg shadow-lg'>
        <img src={product.image} alt="" className='h-80 w-1/2 hover:scale-110 transition-transform duration-300' />
        <div className='space-y-4 w-full'>
          <h2 className='text-xl md:text-3xl font-bold'>{product.title}</h2>
          <p className='font-semibold'>Category: <span className='text-gray-800'>{product.category.toUpperCase()}</span></p>
          <p className='font-medium text-justify'>About the product: <span className='font-normal'>{product.description}</span></p>
          <div className='flex flex-wrap gap-4 items-center'>
            <p>Rating Count: {product.rating.count}</p>
            <p>Rating: <span className={`font-semibold ${product.rating.rate > 4 ? 'text-green-600' : `${product.rating.rate > 2.5 ? 'text-yellow-600' : 'text-red-600'}`}`}>{product.rating.rate}</span></p>
          </div>
          <p className='text-lg font-semibold'>Price: <span className='text-green-700'>${product.price}</span></p>
          <div className='flex flex-wrap gap-4 items-center justify-between w-full'>
            <div className='flex gap-4 flex-wrap'>
              <button className='px-4 py-2 bg-green-600 hover:bg-green-500 active:scale-95 cursor-pointer text-white rounded-md transition-all duration-300'>Buy Now</button>
              <button className='px-4 py-2 bg-green-600 hover:bg-green-500 active:scale-95 cursor-pointer self-end text-white rounded-md transition-all duration-300'>Add to Cart</button>
            </div>
            <button onClick={() => navigate('/products')} className='px-4 py-2 bg-black hover:bg-black/80 active:scale-95 cursor-pointer text-white rounded-md transition-all duration-300'>Back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

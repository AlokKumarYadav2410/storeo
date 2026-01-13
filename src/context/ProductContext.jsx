import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { useEffect } from 'react';
import { fetchProducts } from '../api/productApi';

export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const setData = async () => {
    // fetchProducts().then(data => setProducts(data));
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setData();
  }, []);

  return (
    <ProductDataContext.Provider value={{ products, loading }}>
      {children}
    </ProductDataContext.Provider>
  )
}

export default ProductContext

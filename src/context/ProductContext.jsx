import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

export const ProductDataContext = createContext();

const ProductContext = ({ children }) => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setProducts(response.data);
        }
        catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

  return (
    <ProductDataContext.Provider value={{ products }}>
      {children}
    </ProductDataContext.Provider>
  )
}

export default ProductContext

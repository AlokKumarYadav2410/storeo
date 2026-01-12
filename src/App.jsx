import React from 'react'
import {motion} from 'motion/react'
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  
  return (
    // <div className='bg-gray-700 min-h-screen p-4 overflow-hidden flex flex-col'>
    <div className='min-h-screen flex flex-col justify-between bg-(--bg) text-(--text) transition-colors duration-500'>
      <Navbar />
      <main className="flex flex-col flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

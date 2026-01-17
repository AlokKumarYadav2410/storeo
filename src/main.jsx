import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductContext from './context/ProductContext.jsx'
import { BrowserRouter } from 'react-router'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductContext>
        <ScrollToTop />
        <App />
      </ProductContext>
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import Footer from '../components/ui/Footer.tsx'
import Navbar from '../components/ui/Navbar.tsx'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <div>
        <Navbar />
        {/* <Noise
          patternSize={450}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />  */}
        <App />
        <Footer />
      </div>
    </StrictMode>
  </BrowserRouter>
)

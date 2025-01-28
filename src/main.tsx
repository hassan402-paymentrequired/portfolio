import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import Noise from '../components/noise.tsx'
import Cursor from '../components/ui/Cursor.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <div>
        {/* <Cursor />
        <Noise
          patternSize={450}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        /> */}
        <App />
      </div>
    </StrictMode>
  </BrowserRouter>
)

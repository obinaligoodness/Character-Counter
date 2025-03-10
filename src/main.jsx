import './index.css'
import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './ThemeProvider.jsx'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </StrictMode>,
)

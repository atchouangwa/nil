import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './components/LandingPageV2.css'
import './components/ConfirmedVideoLibrary.css'
import './components/LandingVsl.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './i18n.ts'
import SiteHeader from './components/site-header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SiteHeader/>
      <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TextContextProvider from './context/TextContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TextContextProvider>
      <App />
    </TextContextProvider>
  </StrictMode>,
)

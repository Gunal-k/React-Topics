import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ContextProvider from './core-components/12-react_hooks/context-Example/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  // <ContextProvider>
    <App />
  // </ContextProvider>
)

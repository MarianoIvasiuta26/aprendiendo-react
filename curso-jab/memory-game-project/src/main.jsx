import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MemoryProvider from './context/MemoryProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import RoutesApp from './routes/RoutesApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MemoryProvider>
        <RoutesApp/>
      </MemoryProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
)

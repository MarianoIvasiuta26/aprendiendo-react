import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MemoryProvider from './context/MemoryProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MemoryProvider>
      <App />
    </MemoryProvider>
  </React.StrictMode>,
)

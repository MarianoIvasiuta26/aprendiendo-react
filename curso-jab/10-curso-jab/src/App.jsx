import { useState } from 'react'
import './App.css'
import Route1 from './routes/Route1'
import Provider from './context/Provider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider>
        <Route1/>
      </Provider>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import MensajeGano from './components/MensajeGano'
import MensajePerdio from './components/MensajePerdio'
import PalabrasProvider from './context/PalabrasProvider'

function App() {

  return (
    <>
    <PalabrasProvider>
      <Routes>
        <Route path='/' element={<Index/>} />
        <Route path='/gano' element={< MensajeGano/>} />
        <Route path='/perdio' element={< MensajePerdio/>} />
      </Routes>
    </PalabrasProvider>
      
    </>
  )
}

export default App

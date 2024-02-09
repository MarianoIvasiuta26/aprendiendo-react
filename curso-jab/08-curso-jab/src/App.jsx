import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Nav from './views/Nav'
import Home from './views/Home'
import Atanagildo from './views/Atanagildo'
import Ataulfo from './views/Ataulfo'
import Ervigio from './views/Ervigio'
import Leovigildo from './views/Leovigildo'
import Recesvinto from './views/Recesvinto'
import Sisebuto from './views/Sisebuto'

function App() {

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/atanagildo' element={<Atanagildo/>} />
        <Route path='/ataulfo' element={<Ataulfo/>} />
        <Route path='/ervigio' element={<Ervigio/>} />
        <Route path='/leovigildo' element={<Leovigildo/>} />
        <Route path='/recesvinto' element={<Recesvinto/>} />
        <Route path='/sisebuto' element={<Sisebuto/>} />
      </Routes>  
    </BrowserRouter>
  )
}

export default App

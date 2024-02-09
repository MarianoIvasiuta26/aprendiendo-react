import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './views/Nav'
import Home from './views/Home'
import Rey from './views/Rey'

function App() {
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:nombre' element={<Rey/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

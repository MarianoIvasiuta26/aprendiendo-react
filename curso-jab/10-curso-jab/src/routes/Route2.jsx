import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import CapitalPatagonia from '../pages/CapitalPatagonia'
import NorteEste from '../pages/NorteEste'
import Ruta from '../pages/Ruta'
import Nav from '../navbar/Nav'
import MasInfo from '../pages/MasInfo'

const Route2 = () => {
    const navegacion = useNavigate();
    const login = () => {
        navegacion('/login', {replace:true})
    }
  return (
    <>
        <Nav/>
        <Routes>
            <Route path='/capital-y-patagonia' element={<CapitalPatagonia/>}/>
            <Route path='/norte-y-este' element={<NorteEste />} />
            <Route path='/ruta' element={<Ruta />} />
            <Route path='/destino/:nombreLugar' element={<MasInfo />} />
            <Route path='/' element={<Navigate to="capital-y-patagonia"/>} />
        </Routes>
    </>
  )
}

export default Route2
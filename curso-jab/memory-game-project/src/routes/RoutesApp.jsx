import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import VistaGanador from '../components/VistaGanador'

const RoutesApp = () => {
    return (
        <div>
            <Routes>
                <Route path='/game' element={<App/>} />
                <Route path='/ganador' element={<VistaGanador/>} />
                <Route path='/' element={<Navigate to='game'/>} />
            </Routes>
        </div>
    )
}

export default RoutesApp
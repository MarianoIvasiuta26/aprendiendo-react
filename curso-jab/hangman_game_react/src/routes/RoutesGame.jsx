import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Index from '../components/Index'

const RoutesGame = () => {
    return (
        <div>
            <Routes>
                <Route path='/game' element={<Index/>} />
                <Route path='/' element={<Navigate to="game" /> } />
            </Routes>
        </div>
    )
}

export default RoutesGame
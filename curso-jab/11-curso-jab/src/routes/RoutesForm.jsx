import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ZonasForm from '../components/ZonasForm'
import ZonasForm2 from '../components/ZonasForm2'

const RoutesForm = () => {
  return (
    <div>
      <Routes>
        <Route path='/zonas' element={<ZonasForm/>} />
        <Route path='/completar-registro' element={<ZonasForm2 />} />
        <Route path='/' element={<Navigate to="zonas"/>} />
      </Routes>
    </div>
  )
}

export default RoutesForm
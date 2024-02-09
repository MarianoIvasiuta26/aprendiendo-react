import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Route2 from './Route2'

const Route1 = () => {
  return (
    <>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/*' element={<Route2/>} />
        </Routes>
    </>
  )
}

export default Route1
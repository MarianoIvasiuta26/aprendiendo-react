import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <NavLink to="/" className={({isActive}) => (isActive ? "activado" : null) }>
                Home
            </NavLink>  
            <NavLink to="/Atanagildo" className={({isActive}) => (isActive ? "activado" : null) }>
                Atanagildo
            </NavLink>  
            <NavLink to="/Ataulfo" className={({isActive}) => (isActive ? "activado" : null) }>
                Ataulfo
            </NavLink>  
            <NavLink to="/Ervigio" className={({isActive}) => (isActive ? "activado" : null) }>
                Ervigio
            </NavLink>  
            <NavLink to="/Leovigildo" className={({isActive}) => (isActive ? "activado" : null) }>
                Leovigildo
            </NavLink>  
            <NavLink to="/Recesvinto" className={({isActive}) => (isActive ? "activado" : null) }>
                Recesvinto
            </NavLink>  
            <NavLink to="/Sisebuto" className={({isActive}) => (isActive ? "activado" : null) }>
                Sisebuto
            </NavLink>  
        </nav>
    )
}

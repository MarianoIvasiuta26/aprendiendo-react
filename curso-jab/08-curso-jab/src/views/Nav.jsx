import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    return (
        <nav>
            <NavLink to="/" className={({isActive}) => (isActive ? "activado" : null) }>
                Home
            </NavLink>  
            <NavLink to="/atanagildo" className={({isActive}) => (isActive ? "activado" : null) }>
                Atanagildo
            </NavLink>  
            <NavLink to="/ataulfo" className={({isActive}) => (isActive ? "activado" : null) }>
                Ataulfo
            </NavLink>  
            <NavLink to="/ervigio" className={({isActive}) => (isActive ? "activado" : null) }>
                Ervigio
            </NavLink>  
            <NavLink to="/leovigildo" className={({isActive}) => (isActive ? "activado" : null) }>
                Leovigildo
            </NavLink>  
            <NavLink to="/recesvinto" className={({isActive}) => (isActive ? "activado" : null) }>
                Recesvinto
            </NavLink>  
            <NavLink to="/sisebuto" className={({isActive}) => (isActive ? "activado" : null) }>
                Sisebuto
            </NavLink>  
        </nav>
    )
}

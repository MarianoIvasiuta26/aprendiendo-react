import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Context from '../context/Context';

const Nav = () => {
    const {desloguearme} = useContext(Context);

    const navegacion = useNavigate();
    const login = () => {
        navegacion('/login', {replace:true})
        desloguearme()
    }

    return (
        <>
            <nav>
                <NavLink to="capital-y-patagonia" style={{marginLeft: '20px'}} className={({isActive}) => (isActive ? "activado" : null)}>Capital y Patagonia</NavLink>
                <NavLink to="norte-y-este" className={({isActive}) => (isActive ? "activado" : null)}>Norte y Este</NavLink>
                <NavLink to="ruta" className={({isActive}) => (isActive ? "activado" : null)}>Ruta</NavLink>
                <button onClick={login}>Logout</button>
            </nav>
        </>
    )
}

export default Nav
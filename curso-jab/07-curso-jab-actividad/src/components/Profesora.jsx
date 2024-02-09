import React, { useContext } from 'react'
import { Context } from '../context/Context';

const Profesora = () => {
    const {valor} = useContext(Context);
    const idioma = valor[3].idioma;
    const imagen = `/src/img/${valor[idioma].foto}`
    return (
        <>
            <div className='profesora'>
                <h1>Profesora</h1>
                <div className='foto'>
                    <img src={imagen} alt="" />
                </div>
                <div className='nombre'>
                    <p>{valor[idioma].nombre}</p>
                </div>
            </div>   
        </>
    )
}

export default Profesora
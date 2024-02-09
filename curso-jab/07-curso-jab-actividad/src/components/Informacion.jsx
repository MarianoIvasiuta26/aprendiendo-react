import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import Lugar from './Lugar';
import Profesora from './Profesora';

const Informacion = () => {
    const {valor} = useContext(Context);
    const idioma = valor[3].idioma;

    const [mostrarProfesora, setMostrarProfesora] = useState(false);
    const [mostrarLugar, setMostrarLugar] = useState(false);

    return (
        <>
            <h1>{valor[idioma].titulo}</h1>
            <h3>{valor[idioma].texto}</h3>

            <div className='botones'>
                <button onClick={() => {
                    if(mostrarProfesora == false){
                        setMostrarLugar(false);
                        setMostrarProfesora(true);
                    } else {
                        setMostrarProfesora(false);
                    }
                }}>
                    {valor[idioma].boton1}
                </button>
                <button onClick={() => {
                    if(mostrarLugar == false){
                        setMostrarProfesora(false);
                        setMostrarLugar(true);
                    } else {
                        setMostrarLugar(false);
                    }
                }}>
                    {valor[idioma].boton2}
                </button>
            </div>
                
            {mostrarProfesora && (
                <div className='caja-profesora'>
                    <Profesora/>
                </div>  
            )}

            {mostrarLugar && (
                <div className='caja-lugar'>
                    <Lugar />
                </div>
            )}
            
        </>
    )
}

export default Informacion
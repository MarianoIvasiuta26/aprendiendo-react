import React, { useContext } from 'react'
import palabras from '../context/array';
import PalabrasContext from '../context/PalabrasContext';
import { useNavigate } from 'react-router-dom';

const MensajeGano = () => {
    const {nivel, setNivel} = useContext(PalabrasContext);
    const palabraActual = palabras.find((pregunta, index) => index === nivel);
    const navegacion = useNavigate();

    const avanzar = () => {
        if(nivel < 9){
            setNivel(Number(nivel + 1));
            navegacion('/');
        }
    }

    return (
        <>
            <div className='body'>
                <div className='mensaje'>
                    ¡Perfecto! has pasado el nivel {nivel}
                </div>

                <div className='avanzar'>
                    <button onClick={avanzar}>Siguiente nivel</button>
                </div>
            </div>
        </>
    )
}

export default MensajeGano
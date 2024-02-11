import React, { useContext } from 'react'
import palabras from '../context/array';
import PalabrasContext from '../context/PalabrasContext';
import imagen6 from '../img/el_ahorcado6.png';
import { useNavigate } from 'react-router-dom';

const MensajePerdio = () => {

    const {nivel} = useContext(PalabrasContext);
    const palabraActual = palabras.find((pregunta, index) => index === nivel);
    const caracteresActual = palabraActual.palabro.split("");
    const navegacion = useNavigate();

    const reiniciar = () => {
        navegacion('/')
    }

    return (
        <>
            <div className='body'>
                <div className='mensaje'>
                    Vaya, respuesta incorrecta
                </div>

                <div className='correccion'>
                    La respuesta correcta era: {caracteresActual}
                </div>

                <div className='imagen-perdio'>
                    <img src={imagen6} alt="" />
                </div>

                <div className='reinicio'>
                    <button onClick={reiniciar}>Jugar de nuevo</button>
                </div>
            </div>

            
        </>
    )
}

export default MensajePerdio
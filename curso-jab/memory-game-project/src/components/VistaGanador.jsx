import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MemoryContext from '../context/MemoryContext';

const VistaGanador = () => {
    const {setGanador, setIntento, setAciertos} = useContext(MemoryContext);

    const navegacion = useNavigate();
    const volverAJugar = () => {
        setGanador(false);
        setIntento(0);
        setAciertos(0);
        navegacion('/');
    }

    return (
        <div className='ganador'>
            <h1>¡Enhorabuena! Haz ganado el juego de la memoria.</h1>
            <p>¿Desea jugar de nuevo?</p>
            <button onClick={volverAJugar}>Jugar de nuevo</button>
        </div>
    )
}

export default VistaGanador
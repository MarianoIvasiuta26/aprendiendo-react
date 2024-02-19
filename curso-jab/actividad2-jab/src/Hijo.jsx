import React, { useState } from 'react'

const Hijo = (props) => {

    const [voto, setVoto] = useState(0);

    const cambiarVoto = () => {
        const nuevoVoto = voto+1;
        setVoto(nuevoVoto);
        props.onAction(nuevoVoto, props.nombre);
    }

    return (
        <div className='contenido-hijo'>
            <h2>{props.nombre}</h2>
            <p>Come {props.vacas} vacas al día</p>
            <img src={props.imagen} alt="" />
            <button onClick={cambiarVoto}>Vótame</button>
            <div className='contador'>
                {voto}
            </div>
        </div>
    )
}

export default Hijo
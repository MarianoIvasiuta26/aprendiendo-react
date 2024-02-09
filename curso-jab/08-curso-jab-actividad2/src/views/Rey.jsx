import React from 'react'
import { useParams } from 'react-router-dom';

export default function Rey() {
    const rey = useParams();
    const nombre = rey.nombre.toLowerCase();
    const url = `src/img/rey_${nombre}.png`;

    return (
        <div className='caja-rey'>
            <img src={url} alt={rey.nombre} />
            <h1>{rey.nombre}</h1>
        </div>
    )
}

import React from 'react'

function Rey({dato}) {
    const nombreRey = dato.nombre.toLowerCase();
    const ruta = `https://html6.es/img/rey_${nombreRey}.png`;
    return (
        <div className='caja-rey' style={{backgroundColor: dato.color}}>
            <h3>{dato.nombre}</h3>
            <img src={ruta} alt="Imagen rey"/>
            <p>Precio:</p>
            <p>{dato.precio}$</p>
            <button>Comprar</button>
        </div>
    )
}

export default Rey
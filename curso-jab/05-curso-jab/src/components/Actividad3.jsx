import React from 'react'

function Actividad3({reyes}) {
    const nombreRey = reyes.find(e => e.nombre.charAt(0) == 'E' || e.nombre.charAt(0) == 'e')
    return (
        <>
            <p>{nombreRey.nombre}</p>
        </>
    )
}

export default Actividad3
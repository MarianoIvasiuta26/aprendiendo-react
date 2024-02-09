import React from 'react'
import { useState } from 'react'

function Actividad2({reyes}) {  
    const [reyesList, setReyesList] = useState(reyes);

    const borrar = (nombreRey) => {
        const nuevaListaRey = reyesList.filter((rey) => rey.nombre !== nombreRey);
        setReyesList(nuevaListaRey);
    }

    return (
        <>
            {
                reyesList.
                filter(e => !(e.nombre.includes("g"))).
                map(valor => {
                    return(
                        <div key={valor.nombre} className='act2-reyes'>
                            <p>{valor.nombre} <button onClick={() => borrar(valor.nombre)}>Borrar</button></p>
                        </div>
                    )
                })
            }
        </>
        
    )
}

export default Actividad2
import React from 'react'

function Actividad4({reyes}) {

    const sumar = (e) => {
        e.target.innerHTML = Number(e.target.innerHTML) + 1; 
    }

    const reyesFiltradros = reyes.filter(e => e.vacasComidas > 10 && e.reinado > 10).
    map(valor => {
        return(
            <div className='act4-reyes'>
                {valor.nombre}
                <div className='numero' onClick={sumar}>{0}</div>
            </div>
        )
    })

    return (
        <>
            {
                reyesFiltradros
            }
        </>
    )
}

export default Actividad4
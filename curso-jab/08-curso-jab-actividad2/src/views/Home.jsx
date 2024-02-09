import React from 'react'

export default function () {
    const lista = ["atanagildo", "ataulfo", "ervigio", "leovigildo", "recesvinto", "sisebuto"];
    return (
        <>  
            <div className='img-home'>
                {lista.map((nombre, index) => {
                    const imagen = `src/img/rey_${nombre}.png`;
                    return <img key={index} src={imagen} alt={nombre} />;
                })}
            </div>
        </>
    )
}

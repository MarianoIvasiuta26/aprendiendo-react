import React, { useContext } from 'react'
import { Context } from '../context/Context'

function Lugar() {
  const {valor} = useContext(Context);
  const idioma = valor[3].idioma;

  return (
    <>
      <div className='lugar'>
        <h1>Lugar</h1>
        <div className='direccion'>
          <p>{valor[idioma].direccion}</p>
        </div>
      </div>
    </>
  )
}

export default Lugar
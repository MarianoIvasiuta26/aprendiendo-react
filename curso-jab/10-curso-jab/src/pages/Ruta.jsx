import React, { useContext } from 'react'
import Context from '../context/Context'

const Ruta = () => {

  const {data, lugaresContratados, anularLugar} = useContext(Context);
  let total = lugaresContratados.reduce((acumulador, lugar) => acumulador + lugar.precio, 0);

  const anular = (lugar) => {
    anularLugar(lugar)
  }

  console.log(lugaresContratados)
  return (
    <div className='ruta'>
      <h1>Lugares a visitar:</h1>
      {
        lugaresContratados &&
        lugaresContratados.map(index => (
          <div key={index} className='caja-ruta'>
            <button onClick={
              () => {
                const lugar = data.find(e => e.nombre === index.nombre);
                anular(lugar)
              }
              
            }>
              Anular
            </button>
            <h3>{index.nombre}({index.precio}$)</h3>
          </div>
        ))
      }
      <h1>Total a pagar: {total > 0 ? total : 0}$</h1> 
      <h1>Referencia: </h1>
    </div>
  )
}

export default Ruta
import React, { useContext } from 'react'
import Context from '../context/Context'
import { useNavigate } from 'react-router-dom';

const CapitalPatagonia = () => {
  const {data} = useContext(Context);
  const datosFiltrados = data.filter(item => item.zona === 'cp');
  const navegacion = useNavigate();

  const masInfo = (nombre) => {
    navegacion(`/destino/${nombre}`)
  }
  return (
    <>
      <div className='gruoup-lugares'>
        {
          datosFiltrados.map(index => (
            <div key={index.nombre} className='caja-lugares'>
              <p className='nombre'>{index.nombre}</p>
              <p className='situacion'>{index.situacion}</p>
              <img src={`/src/images/${index.imagen}`} alt="" />
              <button onClick={() => masInfo(index.nombre)}>Más info</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default CapitalPatagonia
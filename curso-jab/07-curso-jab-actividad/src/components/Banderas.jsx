import React, { useContext } from 'react'
import francia from '../img/francia.png';
import spain from '../img/spain.jpg';
import uk from '../img/uk.png';
import { Context } from '../context/Context';

const Banderas = () => {
  const {valor,setValor} = useContext(Context);

  return (
    <>
        <div className='bandera' onClick={() => {
          setValor(
            valor.map((dato,indice) =>
              indice == 3 ? {...dato, idioma:0} : {...dato}
            )
          )
        }}>
            <img src={spain} alt="" />
        </div>

        <div className='bandera' onClick={() => {
          setValor(
            valor.map((dato,indice) =>
              indice == 3 ? {...dato, idioma:1} : {...dato}
            )
          )
        }}>
          <img src={uk} alt="" />
        </div>

        <div className='bandera' onClick={() => {
          setValor(
            valor.map((dato,indice) =>
              indice == 3 ? {...dato, idioma:2} : {...dato}
            )
          )
        }}>
          <img src={francia} alt="" />
        </div>
    </>
  )
}

export default Banderas
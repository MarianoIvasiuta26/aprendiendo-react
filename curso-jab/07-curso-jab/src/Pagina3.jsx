import React, { useContext } from 'react'
import { Context } from './context/Context';

function Pagina3() {
    const {color} = useContext(Context);
  return (
    <div className='hijo' style={{background:color}}>
        Pagina3
    </div>
  )
}

export default Pagina3
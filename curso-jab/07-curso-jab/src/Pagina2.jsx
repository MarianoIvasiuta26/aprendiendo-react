import React, { useContext } from 'react'
import { Context } from './context/Context';

function Pagina2() {
    const {color} = useContext(Context);
  return (
    <div className='hijo' style={{background:color}}>
        Pagina2
    </div>
  )
}

export default Pagina2
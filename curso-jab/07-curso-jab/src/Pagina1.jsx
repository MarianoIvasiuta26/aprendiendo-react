import React, { useContext } from 'react'
import { Context } from './context/Context'

function Pagina1() {
    const {color} = useContext(Context);
    return (
        <div className='hijo' style={{background:color}}>
            Pagina1
        </div>
  )
}

export default Pagina1
import React, { useState } from 'react'
import MemoryContext from './MemoryContext'

const MemoryProvider = ({children}) => {

    const [ganador, setGanador] = useState(false);
    const [intento, setIntento] = useState(0); 
    const [aciertos, setAciertos] = useState(0);

    return (
        <MemoryContext.Provider value={{ganador, setGanador, intento, setIntento, aciertos, setAciertos}}>
            {children}
        </MemoryContext.Provider>
    )
}

export default MemoryProvider
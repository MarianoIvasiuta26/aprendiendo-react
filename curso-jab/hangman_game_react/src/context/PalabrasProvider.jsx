import React, { useState } from 'react'
import PalabrasContext from './PalabrasContext'

const PalabrasProvider = ({children}) => {

    const [resultado, setResultado] = useState(null);
    const [nivel, setNivel] = useState(0);
    

    return (
        <PalabrasContext.Provider value={{resultado, setResultado, nivel, setNivel}}>
            {children}
        </PalabrasContext.Provider>
    )
}

export default PalabrasProvider
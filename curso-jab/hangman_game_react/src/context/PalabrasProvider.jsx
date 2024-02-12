import React, { useState } from 'react'
import PalabrasContext from './PalabrasContext'

const PalabrasProvider = ({children}) => {

    const [resultado, setResultado] = useState("");
    const [nivel, setNivel] = useState(0);
    const [intento, setIntento] = useState(1);
    const [letrasPalabra, setLetrasPalabras] = useState([]);
    const [letrasIncorrectas, setLetrasIncorrectas] = useState([]);
    

    return (
        <PalabrasContext.Provider value={{resultado, setResultado, nivel, setNivel, intento, setIntento, letrasPalabra, setLetrasPalabras, letrasIncorrectas, setLetrasIncorrectas}}>
            {children}
        </PalabrasContext.Provider>
    )
}

export default PalabrasProvider
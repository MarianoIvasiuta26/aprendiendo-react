import React, { useReducer, useState } from 'react'
import ZonaContext from './ZonaContext'
import datos from './datos'
import types from './types'
import zonaReducer from './zonaReducer'
import etapas from '../context/etapas-form2'

const ZonaProvider = ({children}) => {

    const [zonaSeleccionada, dispatch] = useReducer(zonaReducer, [])
    const [etapa, setEtapa] = useState(0);

    const seleccionarZona = (zona) => {
        dispatch({type: types.addZona, zona})
    }

    return (
        <ZonaContext.Provider value={{datos, zonaSeleccionada, seleccionarZona, etapa, setEtapa}}>
            {children}
        </ZonaContext.Provider>
    )
}

export default ZonaProvider
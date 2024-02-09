import React, { useReducer } from 'react'
import Context from './Context'
import data from './data'
import miReducer1 from './miReducer1'
import miReducer2 from './miReducer2'
import lugaresContratadosReducer from './lugaresContratadosReducer'
import types from './types'

const init = () => {
  const valor = localStorage.getItem("estado");
  return {
    estado: !!valor,
  };
};

const init2 = () => {
  const valor = localStorage.getItem("estadoContratado");
  return {
    estadoContratado: !!valor,
  };
};



const Provider = ({children}) => {

  const [logueado, dispatch] = useReducer(miReducer1, {}, init);
  const [contratado, dispatch2] = useReducer(miReducer2, {}, init2);
  const [lugaresContratados, dispatchLugaresContratados] = useReducer(lugaresContratadosReducer, []);

  const loguearme = () => {
    localStorage.setItem("estado", true);
    dispatch({ type: types.login });
  };
  
  const desloguearme = () => { 
    localStorage.removeItem("estado");
    dispatch({ type: types.logout });
  };

  const contratarLugar = (lugar) => {
    localStorage.setItem("estadoContratado", true);
    dispatch2({ type: types.contratar });
    dispatchLugaresContratados({ type: types.addLugar, lugar });

  };
  
  const anularLugar = (lugar) => {
    localStorage.removeItem("estadoContratado");
    dispatch2({ type: types.anular });
    dispatchLugaresContratados({ type: types.deleteLugar, lugar });
  };

  return (
    <Context.Provider value={{data, logueado, loguearme, desloguearme, contratado, contratarLugar, anularLugar, lugaresContratados}}>
      {children}
    </Context.Provider>
  )
}

export default Provider
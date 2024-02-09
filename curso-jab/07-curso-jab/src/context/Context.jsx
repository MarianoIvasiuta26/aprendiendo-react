import React, { createContext, useContext, useState } from 'react'

export const Context = createContext();

export const Datos = ({children}) => {
    const [color, setColor] = useState("silver");

    return (
        <Context.Provider value={{color, setColor}}>
            {children}
        </Context.Provider>
    );
};

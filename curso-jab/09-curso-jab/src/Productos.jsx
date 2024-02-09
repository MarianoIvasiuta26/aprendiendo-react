import React, { useEffect, useReducer, useRef, useState } from 'react'

export const Productos = () => {

    const initialState = [];
    const types = {
        addProduct: "add",
        sumCant: "sum",
        subCant: "sub",
        destroyProduct: "destroy",
    }

    const reducer = (state, action) => {
        switch(action.type){
            case "add":
                return [...state, {id: state.length + 1, nombreProducto: action.payload, unidades:1}];

            case "sum":
                return state.map(product => 
                    product.id === action.payload
                    ? {...product, unidades: product.unidades + 1}
                    : product
                )
            case "sub":
                return state.map(product =>
                    product.id === action.payload && product.unidades > 1
                    ? {...product, unidades: product.unidades - 1}
                    : product
                )

            case "destroy":
                return state.filter(product => product.id !== action.payload);

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [producto, setProducto] = useState("");

    const inputRef = useRef();

    useEffect(() =>{
        inputRef.current.focus();
    }, []);

    return (
        <>
            <div>
                <span>Producto: </span>
                <input ref={inputRef} type="text" value={producto} onChange={(e) => setProducto(e.target.value)}/>
                <button onClick={()=> {
                        dispatch({type: types.addProduct, payload: producto})
                        setProducto("");
                        inputRef.current.focus();
                    }}>Añadir</button>
            </div>

            <div className='products'>
                {
                    state && state.map((product) => (
                        <div key={product.id}>
                            <h3>{product.nombreProducto} <span>({product.unidades} {product.unidades > 1 ? "unidades" : "unidad"} )</span></h3> 
                            <button onClick={() => dispatch({type: types.sumCant, payload: product.id})}>+</button>
                            <button onClick={() => dispatch({type: types.subCant, payload: product.id})}>-</button>
                            <button onClick={() => dispatch({type: types.destroyProduct, payload: product.id})}>X</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

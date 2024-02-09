import React, { useContext, useState } from 'react'
import Context from '../context/Context';
import {useNavigate, useParams } from 'react-router-dom';

const MasInfo = () => {
    const {data, lugaresContratados, contratarLugar, anularLugar} = useContext(Context);
    const {nombreLugar} = useParams();
    const lugar = data.find(e => e.nombre === nombreLugar);
    const [textoBoton, setTextoBoton] = useState('Contratar')
    const [colorBoton, setColorBoton] = useState('rgb(14, 104, 0)')
    const lugarContratado = lugaresContratados.find(e => e.nombre === nombreLugar)

    const contrato = (lugar) => {
        if(lugarContratado){
            anularLugar(lugar)
            setTextoBoton('Contratar')
            setColorBoton('rgb(14, 104, 0)')
        }else{
            contratarLugar(lugar)
            setTextoBoton('Anular')
            setColorBoton('red')
        }
    }

    const navegacion = useNavigate();
    
    const volver = () => {
        navegacion(-1)
    }

    return (
        <div className='mas-info'>
            <h1> {nombreLugar} </h1>
            <p>{lugar.servicio}</p>
            <span className='precio'>{lugar.precio}$</span>
            <div className='botones'>
                <button onClick={() => contrato(lugar)} className='btn-contratar' style={lugarContratado ? {backgroundColor:'red'} : {backgroundColor:colorBoton}}>
                    {lugarContratado ? 'Anular' : 'Contratar'}
                </button>
                <button onClick={() => volver()} className='btn-volver'>Volver</button>
            </div>
            <img src={`/src/images/${lugar.imagen}`} alt="" />
        </div>
    )
}

export default MasInfo
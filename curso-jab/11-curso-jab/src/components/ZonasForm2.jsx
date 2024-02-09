import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useForm } from 'react-hook-form'
import ZonaContext from '../context/ZonaContext';
import preguntas from '../context/etapas-form2'


const ZonasForm2 = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm();

    const {zonaSeleccionada, etapa, setEtapa} = useContext(ZonaContext);

    const [datosForm, setDatosForm] = useState(null);
    const [total, setTotal] = useState(0);

    const pasarPregunta = (data) => {
        setDatosForm({...datosForm,[etapa]:data.pregunta})
        if(etapa < 4){
            setEtapa(Number(etapa + 1))
        }
    }

    useEffect(() => {
        const calcularTotal = () => {
            
            const zonaPrecio = zonaSeleccionada[0].precio;
            let totalCalculado = 0;

            switch (etapa) {
                case 2:
                    totalCalculado= datosForm[1] * zonaPrecio;
                    break;
                case 3:
                    totalCalculado= datosForm[2] * total;
                    break;
                case 4:
                    totalCalculado = datosForm[3] * total;
                default:
                    break;
            }

            setTotal(totalCalculado);
        };

        calcularTotal();
    }, [datosForm, zonaSeleccionada]);

    return (
        <>
            <div className='form2'>
                <div className='form2-container'>
                    <form action="" onSubmit={handleSubmit(pasarPregunta)}>
                        <div className='preguntas-container'>
                            <div className='consigna'>
                                <span className='pregunta'>{preguntas[etapa].texto}</span>
                                <div className='sufijo'>
                                    {
                                        watch('pregunta') && etapa !== 4 &&
                                        <span>
                                        {watch('pregunta')} {preguntas[etapa].sufijo}
                                        </span>    
                                    }
                                </div>
                            </div>
                            {
                                etapa !== 4 &&
                                <input type="text" id={`input${etapa}`} name= {`input${etapa}`} autoFocus {...register("pregunta",
                                    {
                                        required: preguntas[etapa].obligatorio,
                                        maxLength: preguntas[etapa].maximo,
                                        minLength: preguntas[etapa].minimo,
                                        pattern: etapa !== 0 && etapa !== 4 ? /^[0-9]+$/ : null,
                                    }
                                )}/>
                            }
                        
                            {
                                errors.pregunta?.type === "required" &&
                                <div className='aviso-form2'>
                                    Este dato es obligatorio
                                </div>
                            } 

                            {
                                errors.pregunta?.type === "maxLength" &&
                                <div className='aviso-form2'>
                                    El dato debe tener como máximo {preguntas[etapa].maximo} caracteres.
                                </div>
                            }

                            {
                                errors.pregunta?.type === "minLength" &&
                                <div className='aviso-form2'>
                                    El dato debe tener al menos {preguntas[etapa].minimo} caracteres.
                                </div>
                            }

                            {
                                errors.pregunta?.type === "pattern" &&
                                <div className='aviso-form2'>
                                    El dato debe ser numérico.
                                </div>
                            }

                        </div>

                        {
                            etapa !== 4 &&
                            <hr />
                        }

                        {
                            etapa !== 4 && 
                            <button>Enviar</button>}

                        {
                            etapa === 4 &&
                            <div className='group-buttons'>
                                <button>Volver</button>
                                <button>Imprimir</button>
                            </div>

                        }
                        
                    </form>
                </div>

                <div className='resumen'>
                    <span className='resumen-text'>Resumen:</span>
                    <img src={zonaSeleccionada[0].imagen} alt="" />

                    <div className='linea'>
                        <div className='columna1'>
                            Zona:
                        </div>
                        <div className='columna2'>
                            {zonaSeleccionada[0].lugar}
                        </div>
                    </div>

                    <div className='linea'>
                        <div className='columna1'>
                            $ por día:
                        </div> 
                        
                        <div className='columna2'>
                            {zonaSeleccionada[0].precio}
                        </div>
                    </div>

                    <div className='linea' style={{ display: etapa >= 1 ? "" : "none" }}> 
                        <div className='columna1'>
                            Nombre:
                        </div>
                        {
                            etapa >= 1 && datosForm[0] &&
                            <div className='columna2'>
                                {datosForm[0]}
                            </div>
                        }
                        
                    </div> 

                    <div className='linea' style={{ display: etapa >= 2 ? "" : "none" }}> 
                        <div className='columna1'>
                            Habitaciones:
                        </div>

                        {
                            etapa >= 2 && datosForm[1] && 
                            <div className='columna2'>
                                {datosForm[1]}
                            </div>
                        }

                        
                    </div>

                    <div className='linea' style={{ display: etapa >= 3 ? "" : "none" }}> 
                        <div className='columna1'>
                            Personas:
                        </div>

                        {
                            etapa >= 3 && datosForm[2] &&
                            <div className='columna2'>
                                {datosForm[2]}
                            </div>
                        }
                    </div>          

                    <div className='linea' style={{ display: etapa >= 4 ? "" : "none" }}> 
                        <div className='columna1'>
                            Días:
                        </div>

                        {
                            etapa >= 4 && datosForm[3] &&
                            <div className='columna2'>
                                {datosForm[3]}
                            </div>
                        }
                    </div> 

                    <div className='total'>
                        <span><strong>Total: ${total}</strong></span>
                    </div>    
                        
                </div>
            </div>
           
        </>
    )
}

export default ZonasForm2
import React, { useContext, useReducer } from 'react'
import { useForm } from 'react-hook-form'
import ZonaContext from '../context/ZonaContext';
import { useNavigate } from 'react-router-dom';

const ZonasForm = () => {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const {datos, zonaSeleccionada, seleccionarZona} = useContext(ZonaContext);

    console.log(zonaSeleccionada)

    const navegacion = useNavigate();

    const handleSeleccionarZona = (index) => {
        seleccionarZona(index); 
    };

    const enviarDatos = () => {
        navegacion('/completar-registro')
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit(enviarDatos)}>
                <div className='content-form-description'>
                    <h1 className='form-description'>Selecciona la zona a visitar: </h1>
                    <button>Enviar</button>

                    {
                        errors.zonaSeleccion?.type === "required" &&
                        <div className='aviso'>
                            Selecciona una de las opciones
                        </div>
                    }

                </div>

                <div className='zonas-caja'>
                    {datos.map(index => (
                        <div key={index.lugar} className='zona-caja'>
                            <div className='descripcion'>
                                <input type="radio" name="zona" id={index.lugar} 
                                    {...register('zonaSeleccion',
                                        {
                                            required: true,
                                        }    
                                    )}
                                    onChange={() => handleSeleccionarZona(index)}
                                />
                                <label htmlFor={index.lugar}>
                                    <p className='lugar-nombre'>{index.lugar}</p>
                                    <p className='lugar-precio'>({index.precio}$)</p>
                                </label>
                            </div>
                            <div className='imagen'>
                                <img src={index.imagen} alt={index.lugar} />
                            </div>
                        </div>
                    ))}
                </div>
            </form> 
        </>
    )
}

export default ZonasForm;
import React, { useContext, useEffect } from 'react'
import palabras from '../context/array';
import imagen1 from '../img/el_ahorcado1.png';
import PalabrasContext from '../context/PalabrasContext';

const Index = () => {

    const {resultado, setResultado, nivel, setNivel} = useContext(PalabrasContext);
    const palabraActual = palabras.find((pregunta, index) => index === nivel);

    const intentos = 5;
    
    const caracteresActual = palabraActual.palabro.split("");

    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const validarIntento = (letra) => {
        let caracterElegido; 
        caracterElegido = caracteresActual.find(elemento => elemento === letra);
        
        if(caracterElegido){
            useEffect(() => {
                
            })
        }
    }

    return (
        <>
            <div className='body'>
                <div className='pregunta'>
                    {palabraActual.pregunta}
                </div>

                <div className='palabraFormada'>
                    {caracteresActual.map((caracter, index) => (
                        <div id={`caracter${index}`} className='caracterIndividual' key={index}>
                            
                        </div>
                    ))}
                </div>

                <div className='letras'>
                    {alfabeto.map((letra, index) => (
                        <div id={letra} key={index} className='letraIndividual' onClick={() => validarIntento(letra)}>
                            {letra}
                        </div>
                    ))}
                </div>

                <div className='imagenes'>
                    <img src={imagen1} alt="" />
                </div>
            </div>
        </>
    )
}

export default Index
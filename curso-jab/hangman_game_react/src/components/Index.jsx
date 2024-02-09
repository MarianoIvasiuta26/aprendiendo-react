import React, { useContext, useEffect, useState } from 'react'
import palabras from '../context/array';
import imagen1 from '../img/el_ahorcado1.png';
import imagen2 from '../img/el_ahorcado2.png';
import imagen3 from '../img/el_ahorcado3.png';
import imagen4 from '../img/el_ahorcado4.png';
import imagen5 from '../img/el_ahorcado5.png';
import imagen6 from '../img/el_ahorcado6.png';
import PalabrasContext from '../context/PalabrasContext';
import { useNavigate } from 'react-router-dom';

const Index = () => {

    const {resultado, setResultado, nivel, setNivel} = useContext(PalabrasContext);
    const palabraActual = palabras.find((pregunta, index) => index === nivel);
    const [intento, setIntento] = useState(1);
    const [letrasPalabra, setLetrasPalabras] = useState([]);
    const [letrasIncorrectas, setLetrasIncorrectas] = useState([]);
    console.log(letrasIncorrectas)
    console.log(letrasPalabra)
    
    const caracteresActual = palabraActual.palabro.split("");
    console.log(caracteresActual)

    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let imagenActual;
    switch (intento) {
        case 1:
            imagenActual = imagen1;
            break;
        case 2:
            imagenActual = imagen2;
            break;
        case 3:
            imagenActual = imagen3;
            break;
        case 4:
            imagenActual = imagen4;
            break;
        case 5:
            imagenActual = imagen5;
            break;
        case 6:
            imagenActual = imagen6;
            break;
        default:
            break;
    }

    let palabraFormada = [];
    const validarIntento = (letra) => {
        let caracterElegido; 
        caracterElegido = caracteresActual.find(elemento => elemento === letra);
        
        if(caracterElegido && !letrasPalabra.includes(caracterElegido)){
            setLetrasPalabras(letrasPrevias => [...letrasPrevias, caracterElegido]);
            validarPalabraFormada();            
        }

        if(!caracterElegido){
            if(!letrasIncorrectas.includes(letra)){
                setLetrasIncorrectas(prev => [...prev, letra]);
                if(intento < 6){
                    setIntento(Number(intento + 1));
                }else{
                    setResultado('Perdió');
                }
            }
        }
    }

    const validarPalabraFormada = () =>{
        caracteresActual.map((caracter, index) => {
            letrasPalabra.map((letra, e) =>{
                if(letra === caracter){
                    palabraFormada.push(letra);
                }
            })
        })

        validarGanador();
    }

    const navegacion = useNavigate();

    const validarGanador = () => {
        if(palabraFormada.length === caracteresActual.length){
            setResultado('Ganó')
            mostrarMensaje();
        }
    }

    const mostrarMensaje = () => {
        navegacion('/gano')
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
                            {letrasPalabra.map((letra, e) => (
                                letra === caracter ? <span key={e}>{letra}</span> : ''
                            ))}
                        </div>
                    ))}
                </div>

                <div className='letras'>
                    {alfabeto.map((letra, index) => (
                        <div id={letra} key={index} className='letraIndividual' onClick={() => validarIntento(letra)} style={{
                            backgroundColor: letrasIncorrectas.includes(letra) ? 'red' : (letrasPalabra.includes(letra) ? 'green' : 'white'),
                            color:letrasIncorrectas.includes(letra) ? 'white' : (letrasPalabra.includes(letra) ? 'white' : 'black'),
                        }}>
                            {letra}
                        </div>
                    ))}
                </div>

                <div className='imagenes'>
                    <img src={imagenActual} alt="" />
                </div>
            </div>
        </>
    )
}

export default Index
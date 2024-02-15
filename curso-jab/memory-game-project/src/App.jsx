import { useContext, useEffect, useState } from "react"
import MemoryContext from "./context/MemoryContext"
import cuadros from './components/datos'

function App() {

  const imagenesDuplicadas = [...cuadros, ...cuadros]
  useEffect(()=> {
    imagenesDuplicadas.sort(()=> Math.random() - 0.5);
  }, [])

  const {ganador, setGanador, intento, setIntento, aciertos, setAciertos} = useContext(MemoryContext);
  const [datos, setDatos] = useState(imagenesDuplicadas);
  
  const [imagenesAcertadas, setImagenesAcertadas] = useState([]); //con esta guardaremos las imagenes acertadas y validaremos más adelante para que no se muestre dada vuelta

  const [imagenesSeleccionadas, setImagenesSeleccionadas] = useState([]);
  const [imagenesValidacion, setImagenesValidacion] = useState([]);

  useEffect(()=> {
    if(imagenesSeleccionadas.length === 2 && imagenesValidacion.length === 2){
      if(imagenesValidacion[0] === imagenesValidacion[1]){
        let imagenAcertada = imagenesValidacion[0];
        setImagenesAcertadas([...imagenesAcertadas, imagenAcertada]);
        setAciertos(Number(aciertos + 1));
        setImagenesSeleccionadas([]);
        setImagenesValidacion([]);
      }else{
        setTimeout(() => {
          setImagenesSeleccionadas([]);
          setImagenesValidacion([]);
        }, 2000)
      }
    }
  })

  useEffect(() => {
    if(imagenesSeleccionadas.length === 2 && imagenesValidacion.length === 2){
      setIntento(Number(intento + 1));
    }
  }, [imagenesSeleccionadas, imagenesValidacion])

  const handleSeleccion = (cuadro, index) => {
    if(imagenesSeleccionadas.length === 2){
      return;
    }
    const seleccionNueva = [...imagenesSeleccionadas, index];
    setImagenesSeleccionadas(seleccionNueva);
    const validacion = [...imagenesValidacion, cuadro];
    setImagenesValidacion(validacion);
  }

  return (
    <>
      <div className="cuadros">
        {
          datos.map((cuadro, index) => (
            <div key={index} className="cuadro-individual" onClick={() => handleSeleccion(cuadro, index)}>
              <img src={(imagenesAcertadas.includes(cuadro) || imagenesSeleccionadas.includes(index)) ? cuadro : "https://www.html6.es/img/rey_.png"} alt="" />            
            </div>
          ))
        }
      </div>

      <div className="info-intentos">
        {aciertos} aciertos de {intento} intentos: {(aciertos === 0 && intento === 0) ? "" : `(${((aciertos/intento)*100).toFixed(0)} % de acierto)`}
      </div>
      
    </>
  )
}

export default App

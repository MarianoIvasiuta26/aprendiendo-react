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

  const handleSeleccion = (cuadro, index) => {
    if(imagenesSeleccionadas.length === 2){
      return;
    }
    const seleccionNueva = [...imagenesSeleccionadas, index];
    setImagenesSeleccionadas(seleccionNueva);
    const validacion = [...imagenesValidacion, cuadro];
    setImagenesValidacion(validacion);

    console.log(imagenesValidacion);
    console.log(imagenesSeleccionadas);
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
      
    </>
  )
}

export default App

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

  useEffect(()=> {
    if(imagenesSeleccionadas.length === 2){
      console.log(imagenesSeleccionadas);
      console.log(imagenesDuplicadas[imagenesSeleccionadas[0]]);
      console.log(imagenesDuplicadas[imagenesSeleccionadas[1]]);
      setTimeout(() => {
        if(imagenesDuplicadas[imagenesSeleccionadas[0]] === imagenesDuplicadas[imagenesSeleccionadas[1]]){
          let imagenAcertada = imagenesDuplicadas[imagenesSeleccionadas[0]];
          console.log(imagenAcertada)
          setImagenesAcertadas([...imagenesAcertadas, imagenAcertada]);
        }else{
          setTimeout(() => {
            setImagenesSeleccionadas([]);
          }, 2000)
        }
      }, 2000)
    }
  })

  const handleSeleccion = (index) => {
    if(imagenesSeleccionadas.length === 2){
      return;
    }
    const seleccionNueva = [...imagenesSeleccionadas, index];
    setImagenesSeleccionadas(seleccionNueva);
  }

  return (
    <>
      <div className="cuadros">
        {
          datos.map((cuadro, index) => (
            <div key={index} className="cuadro-individual" onClick={() => handleSeleccion(index)}>
              <img src={(imagenesAcertadas.includes(cuadro) || imagenesSeleccionadas.includes(index)) ? cuadro : "https://www.html6.es/img/rey_.png"} alt="" />            
            </div>
          ))
        }
      </div>
      
    </>
  )
}

export default App

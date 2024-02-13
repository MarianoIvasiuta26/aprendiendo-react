import { useState } from "react";
import valores from "./datos";
import { Barra, Contenedor, Grafico, Titulo } from "./styles/Style";


function App() {
  
  const colores = ['red', 'yellow', 'blue', 'green', 'black'];
  const indice = Math.floor(Math.random() * colores.length);
  const colorAleatorio = colores[indice];

  const [datos, setDatos] = useState(valores);

  let colorBarra;

  const aumentarBarra = (indice) =>{
      setDatos((prevDatos) => 
        prevDatos.map((barra, i) => 
          i === indice ? {...barra, altura: (barra.altura < 300) ? barra.altura+40 : barra.altura} : barra
        )
      )
  }

  return (
    <>
      <Titulo colortitulo={colorAleatorio} >Tus ganancias:</Titulo>

      <Contenedor>
        <Grafico>
          {datos.map((elemento, index) => {
            colorBarra = elemento.color ? elemento.color : 'silver';
            return <Barra key={index} fondobarra={colorBarra} alturabarra={elemento.altura} onClick={() => aumentarBarra(index)}/>;
          })}
        </Grafico>
      </Contenedor>
      
    </>
  )
}

export default App

import valores from "./datos";
import { Barra, Contenedor, Grafico, Titulo } from "./styles/Style";


function App() {
  
  const colores = ['red', 'yellow', 'blue', 'green', 'black'];
  const indice = Math.floor(Math.random() * colores.length);
  const colorAleatorio = colores[indice];

  let colorBarra;

  const aumentarBarra = () =>{

  }

  return (
    <>
      <Titulo colortitulo={colorAleatorio} >Tus ganancias:</Titulo>

      <Contenedor>
        <Grafico>
          {valores.map((elemento, index) => {
            colorBarra = elemento.color ? elemento.color : 'silver';
            return <Barra key={index} fondobarra={colorBarra} alturabarra={elemento.altura}/>;
          })}
        </Grafico>
      </Contenedor>
      
    </>
  )
}

export default App

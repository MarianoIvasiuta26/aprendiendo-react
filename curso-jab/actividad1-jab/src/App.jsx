import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  
  const [mostrarLogo, setMostrarLogo] = useState(false);
  const [mostrarNombre, setMostrarNombre] = useState(false);
  const [cambioColor, setCambioColor] = useState(false)

  let saludo = "Hola Mariano";

  const cambiarContenido1 = () => {
    setMostrarLogo(false);
    setMostrarNombre(true);
  }

  const cambiarContenido2 = () => {
    setMostrarNombre(false);
    setMostrarLogo(true);
  }

  const cambiarContenido3 = () => {
    setMostrarNombre(false);
    setMostrarLogo(true);
    setCambioColor(true);
  }

  return (
    <>
      <div className='btn-caja'>
          <button onClick={cambiarContenido1}>Botón 1</button>
          <button onClick={cambiarContenido2}>Botón 2</button>
          <button onClick={cambiarContenido3}>Botón 3</button>
      </div>

      <div className='contenido' style={cambioColor === false ? {backgroundColor: "green"} : {backgroundColor: "red"}}>
        {mostrarNombre === false ? "" : saludo}
        <img src={reactLogo} alt="" style={mostrarLogo === false ? {display:"none"} : {display:"block"}}/>
      </div>
    </>
  )
}

export default App

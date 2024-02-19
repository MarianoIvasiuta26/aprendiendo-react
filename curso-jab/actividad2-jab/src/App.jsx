import { useState } from "react"
import Hijo from "./Hijo";


function App() {

  const [mensaje, setMensaje] = useState("Vota por tu rey preferido");

  const cambiarMensaje = (voto, nombre) => {
    setMensaje(`Haz votado por ${nombre} con una nota de ${voto}`)
  }

  return (
    <>
      <div className="contenido-padre">
        <h1>{mensaje}</h1>

        <div className="container-hijos">
          <Hijo onAction={cambiarMensaje} className="hijo" nombre="Ervigio" vacas={3} imagen="https://www.html6.es/img/rey_ervigio.png"/>
          <Hijo onAction={cambiarMensaje} className="hijo" nombre="Atanagildo" vacas={6} imagen="https://www.html6.es/img/rey_atanagildo.png" />
          <Hijo onAction={cambiarMensaje} className="hijo" nombre="Ataúlfo" vacas={11} imagen="https://www.html6.es/img/rey_ataulfo.png" />
          <Hijo onAction={cambiarMensaje} className="hijo" nombre="Leogivildo" vacas={2} imagen="https://www.html6.es/img/rey_leogivildo.png" />
        </div>

      </div>
    </>
  )
}

export default App

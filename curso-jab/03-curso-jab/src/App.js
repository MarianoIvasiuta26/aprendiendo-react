import "./App.css";
import {useState, useRef} from 'react'

const App = () => {
  const reyesGodos=[
    {
      nombre: "Ataúlfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a Hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cría del escarabajo en almíbar"
    }
  ]

  //Declaramos el estado
  const [rey, setRey] = useState(0);
  const [mensaje, setMensaje] = useState('');

  const verSiguiente = () => {

    if(rey == 0 || rey < 3){

      setMensaje(<h2>La afición principal de <span className="nombreRey">{reyesGodos[rey].nombre}</span> es <span className="aficionRey">{reyesGodos[rey].aficion}</span> </h2>);
      setRey(rey+1);
    }
  }

  return (
    <>
    {/* Crear un <div> y un <button> */}     
      <div className="caja">
        <button onClick={verSiguiente}>Ver siguiente</button>
        <div>{mensaje}</div>
      </div>
    </>
  )
}
export default App;
import "./App.css";
import { useState } from "react";

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

  //Declaramos los estados
  const [euro, setEuro] = useState(0);
  const [pesoArgentino, setPesoArgentino] = useState(0);
  const [pesoColombiano, setPesoColombiano] = useState(0);
  const [pesoMexicano, setPesoMexicano] = useState(0);
  const [dolar, setDolar] = useState(0);

  const cambiar = (e) => {
    setEuro(Number(e.target.value));

    //Euro a Peso argentino
    setPesoArgentino(e.target.value * Number(cambios[1].cambio));

    //Euro a Peso colombiano
    setPesoColombiano(e.target.value * Number(cambios[2].cambio))

    //Euro a Peso mexicano
    setPesoMexicano(e.target.value * Number(cambios[3].cambio))

    //Euro a Dólar
    setDolar(e.target.value * cambios[4].cambio)

  }

  return (
    <div className="caja">
        <label htmlFor="u0">Euro</label>
        <input onChange={cambiar} id="u0" type="number" value={euro}/> 

        <label htmlFor="u1">Peso argentino</label>
        <input id="u1" type="number" value={pesoArgentino} readOnly/> 

        <label htmlFor="u2">Peso colombiano</label>
        <input id="u2" type="number" value={pesoColombiano} readOnly/> 

        <label htmlFor="u3">Peso mexicano</label>
        <input id="u3" type="number" value={pesoMexicano} readOnly/> 

        <label htmlFor="u4">Dólar</label>
        <input id="u4" type="number" value={dolar} readOnly/> 
    </div>
  )
}

export default App;
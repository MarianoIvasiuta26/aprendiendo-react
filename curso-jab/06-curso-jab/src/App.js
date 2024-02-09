import './App.css';
import {useEffect, useState} from "react";

function App() {

  //Estado datos
  const [datos, setDatos] = useState([]);

  //Número random
  const [numeroRandom, setNumeroRandom] = useState(1);

  const generarRandom = () => {
    const random = Math.floor(Math.random() * 200) + 1;
    setNumeroRandom(random);
  }

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/todos/${numeroRandom}`;
    const peticion = fetch(url);
  
    peticion
      .then(response => response.json()) // Esperar la conversión a JSON
      .then(data => setDatos(data))
      .catch(error => console.log("Error:", error));
  }, [numeroRandom]);

  return (
    <>
        <h1>Práctica de useState, useEffect y Fetch</h1>
        <h3>Presione el botón para generar información aleatoria.</h3>

        <button onClick={generarRandom}>Generar</button>

        {datos && (
          <div key={datos.id}>
            <h2>ID:</h2>
            <div>{datos.id}</div>
            <h2>Title:</h2>
            <div>{datos.title}</div>
          </div>
        )}
    </>
  );
}

export default App;

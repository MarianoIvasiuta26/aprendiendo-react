import { useState } from 'react'
import datos from './datos'
import { useEffect } from 'react';
import estrella from './images/estrella.png'

function App() {
  
  const [datosAlimentos, setDatosAlimentos] = useState(datos);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  const nuevosDatos = datosAlimentos.filter((e) => {
    return e.estado === false
  });

  const agregarDato = (id) => {
    const nuevoDato = datosAlimentos.find(e => e.id === id);
    if(nuevoDato){
      nuevoDato.estado = true;
      setDatosAlimentos([...datosAlimentos]);
    }

  }

  useEffect(() => {
    let nuevoProducto = datosAlimentos.filter((e) => {
      return e.estado === true
    });

    nuevoProducto = nuevoProducto.map(producto => ({
      ...producto,
      estrellas: 1
    }));

    setProductosSeleccionados(nuevoProducto);
    
  }, [datosAlimentos])

  const agregarEstrella = (producto) => {
    const nuevaEstrella = productosSeleccionados.find(e => e.id === producto.id);
    console.log(nuevaEstrella)
    if(nuevaEstrella){
      if(nuevaEstrella.estrellas < 5){
        nuevaEstrella.estrellas = nuevaEstrella.estrellas+1;
      }else{
        nuevaEstrella.estrellas = 1;
      }

      setProductosSeleccionados([...productosSeleccionados]);
    }
  }

  productosSeleccionados.sort((a,b) => b.estrellas - a.estrellas);

  return (
    <>  
      <div className='container'>
        {
          nuevosDatos.map(element => (
            <div key={element.id} className='productos' onClick={() => agregarDato(element.id)}>
              {element.producto}
            </div>
          ))
        }
      </div>

      <div className='container-seleccionados'>
        {
          productosSeleccionados.map((element, index) => (
            <div key={index} className='productos-seleccionados' onClick={() => agregarEstrella(element)}>
                {element.producto}
                <div className='estrellas-img'>
                  {[...Array(element.estrellas)].map((_, i) => (
                    <img key={i} src={estrella} alt="estrella" />
                  ))}
                </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App

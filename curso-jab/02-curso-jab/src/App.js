import './App.css';
import {useRef} from 'react';
import imagen0 from './img/rey_atanagildo.png';
import imagen1 from './img/rey_sisebuto.png';

function App() {
  const cambio = 23.16;
  const refCaja = useRef();

  //Función para cambar la imagen de forma cíclica
  const cambioImagen = (e) => {
    if(e.target.src.includes("atanagildo")){
      e.target.src = imagen1;
      alert('El rey ahora es Sisebuto');
    } else{
      e.target.src = imagen0;
      alert("El rey ahora es Atanagildo");
    }
  }

  //Función para incrementar el div caja con límite
  const incrementar = (j) => {
    j.target.innerHTML = Number(j.target.innerHTML) +1; 

    //Evaluamos si llega a 8
    if(Number(j.target.innerHTML) >= 8){
      j.target.style.backgroundColor = "red";
    }

    if(Number(j.target.innerHTML) > 9 ){
      j.target.innerHTML = 1;
    }
  }

  const cambiar = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  }

  const cambiarCaja = (e) => {
    refCaja.current.innerHTML = e.target.value;
  }

  return (
    <>
      <div onClick={incrementar} ref={refCaja} className='caja'>1</div>
      <button onClick={cambiar}>Aceptar</button>
      <div><img onClick={cambioImagen} src={imagen0} alt="" /></div>
      <input onChange={cambiarCaja} className='campo' />
    </>
  );
}

export default App;

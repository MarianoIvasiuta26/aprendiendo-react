import './App.css';
import Rey from './components/Rey';
import { useState } from 'react';

const reyes=[
  {
    nombre:"Atanagildo",
    color:"darkolivegreen",
    precio:178
  },{
    nombre:"Ervigio",
    color:"crimson",
    precio:169
  },{
    nombre:"Ataúlfo",
    color:"peru",
    precio:81
  },{
    nombre:"Leogivildo",
    color:"darkmagenta",
    precio:126
  },{
    nombre:"Recesvinto",
    color:"royalblue",
    precio:141
  },{
    nombre:"Sisebuto",
    color:"teal",
    precio:69
  }
]

function App() {

  const costo = 0;
  return (
    <>
      <h2>Total a pagar: {costo}$</h2>
      <div className='misReyes'>
        <Rey dato={{nombre: reyes[0].nombre, color: reyes[0].color, precio: reyes[0].precio}}/>
        <Rey dato={{nombre: reyes[1].nombre, color: reyes[1].color, precio: reyes[1].precio}}/>
        <Rey dato={{nombre: reyes[2].nombre, color: reyes[2].color, precio: reyes[2].precio}}/>
        <Rey dato={{nombre: reyes[3].nombre, color: reyes[3].color, precio: reyes[3].precio}}/>
        <Rey dato={{nombre: reyes[4].nombre, color: reyes[4].color, precio: reyes[4].precio}}/>
        <Rey dato={{nombre: reyes[5].nombre, color: reyes[5].color, precio: reyes[5].precio}}/>
      </div>
    </>
  );
}

export default App;

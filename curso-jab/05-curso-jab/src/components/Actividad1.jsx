import React from 'react'
import '../App.css';

function Actividad1({reyes}) {
  return (
    <>
        {reyes.map(valor => {
            const nombreMinuscula = valor.nombre.toLowerCase();
            const ruta = `https://www.html6.es/img/rey_${nombreMinuscula}.png`;
            return (
                <div key={valor.nombre} className='reyes'>
                    <p>
                        <span style={{ color: 'red' }}>{valor.nombre.toUpperCase()}</span>
                        {' ha comido '}{valor.vacasComidas}{' vacas en sus '}{valor.reinado}{' años de reinado'}
                    </p>    
                    <img src={ruta} />          
                </div>
            )
          }
        )}
        
        
    </>
  )
}

export default Actividad1
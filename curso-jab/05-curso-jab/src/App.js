import './App.css';
import Actividad1 from './components/Actividad1';
import Actividad2 from './components/Actividad2';
import Actividad3 from './components/Actividad3';
import Actividad4 from './components/Actividad4';

function App() {
  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12
    }
  ]
  
  return (
    <>
      <h2>Actividad 1</h2>
      <div className='caja'>
        <Actividad1 reyes= {reyes} />
      </div>

      <h2>Actividad 2</h2>
      <div className='act2-caja'>
        <Actividad2 reyes= {reyes} />
      </div>

      <h2>Actividad 3</h2>
      <div className='act3-caja'>
        <Actividad3 reyes= {reyes} />
      </div>

      <h2>Actividad 4</h2>
      <div className='act4-caja'>
        <Actividad4 reyes= {reyes} />
      </div>
      
    </>
  );
}

export default App;

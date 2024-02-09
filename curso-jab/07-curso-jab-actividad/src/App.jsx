import './App.css'
import Banderas from './components/Banderas'
import Informacion from './components/Informacion'
import { Datos } from './context/Context'



function App() {

  return (
    <>
      <Datos>
        <div className='banderas'>
          <Banderas />
        </div>

        <div className='contenido'>
          <Informacion />
        </div>
      </Datos>
    </>
  )
}

export default App

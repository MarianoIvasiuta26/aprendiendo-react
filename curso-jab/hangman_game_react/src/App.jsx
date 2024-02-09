import Index from './components/Index'
import PalabrasProvider from './context/PalabrasProvider'
import RoutesGame from './routes/RoutesGame'

function App() {

  return (
    <>
    <PalabrasProvider>
      <Index />
    </PalabrasProvider>
      
    </>
  )
}

export default App

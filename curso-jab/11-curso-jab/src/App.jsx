import ZonaProvider from './context/ZonaProvider'
import RoutesForm from './routes/RoutesForm'

function App() {
  
  return (
    <>
      <ZonaProvider>
        <RoutesForm />
      </ZonaProvider>
    </>
  )
}

export default App

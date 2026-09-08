import { Routes, Route } from 'react-router-dom'
import { Menu } from './components/Menu/Menu'
import { RegistroComidas } from './pages/RegistroComidas/RegistroComidas'
import { CuidadoNutricional } from './pages/CuidadoNutricional/CuidadoNutricional'
import { AcercaDe } from './pages/AcercaDe/AcercaDe'
import { NoEncontrado } from './pages/NoEncontrado/NoEncontrado'

function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<RegistroComidas />} />
        <Route path="/cuidado-nutricional" element={<CuidadoNutricional />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </>
  )
}

export default App

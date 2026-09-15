import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistroUsuario from './paginas/RegistroUsuario'
import Home from './paginas/Home'
import RegistroEspacio from './paginas/RegistroEspacio'
import RegistroReserva from './paginas/RegistroReserva'
import {ListaEspacios} from './paginas/ListaEspacios'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistroUsuario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/espacios" element={<RegistroEspacio />} />
        <Route path="/reservas" element={<RegistroReserva />} />
        <Route path="/listaespacios" element={<ListaEspacios />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

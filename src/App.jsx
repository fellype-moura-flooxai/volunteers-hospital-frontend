import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Login from './pages/login/index'
import PainelAdmin from './pages/admin'
import PerfilVoluntario from './pages/perfil'
import CadastroVoluntario from './pages/cadastro';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/admin/painel" element={<PainelAdmin />} />
        <Route path="/perfil" element={<PerfilVoluntario />} />
        <Route path="/cadastro" element={<CadastroVoluntario />} />
      </Routes>
    </Router>
  )
}

export default App
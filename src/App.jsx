import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Login from './pages/login/index'
import PainelAdmin from './pages/admin'
import PerfilVoluntario from './pages/perfil'
import CadastroVoluntario from './pages/cadastro';
import Vagas from './pages/vagas/index'
import VagasAdmin from './pages/admin/CriarVaga'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/admin/painel" element={<PainelAdmin />} />
        <Route path="/perfil" element={<PerfilVoluntario />} />
        <Route path="/cadastro" element={<CadastroVoluntario />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/admin/vagas" element={<VagasAdmin />} />
      </Routes>
    </Router>
  )
}

export default App
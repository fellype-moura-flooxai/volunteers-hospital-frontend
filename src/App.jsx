import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import Login from './pages/login/index'
import PainelAdmin from './pages/admin'
import PerfilVoluntario from './pages/perfil'
import CadastroVoluntario from './pages/cadastro';
import Vagas from './pages/vagas/index'
import VagasAdmin from './pages/admin/criar-vaga/index'
import GerenciarVagas from './pages/admin/gerenciar-vagas/index'
import EditarVaga from './pages/admin/gerenciar-vagas/EditarVaga'
import Candidaturas from './pages/admin/candidaturas/index'
import Ranking from './pages/ranking/index'

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
        <Route path="/admin/gerenciar-vagas" element={<GerenciarVagas />} />
        <Route path="/admin/editar-vaga/:id" element={<EditarVaga />} />
        <Route path="/admin/vaga/:id/candidaturas" element={<Candidaturas />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
    </Router>
  )
}

export default App
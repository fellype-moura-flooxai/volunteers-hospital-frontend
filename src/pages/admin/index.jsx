import React from 'react'
import './admin.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import useAuthRedirect from '../../hooks/useAuthRedirect'
import { Link } from 'react-router-dom'

const PainelAdmin = () => {
  useAuthRedirect('admin')
  return (

    <div className='container'>

      <header>
        <Header />
      </header>

      <main className='admin-content'>

        <h1>Painel do Administrador</h1>
        <p>Bem-vindo! Aqui você poderá gerenciar as vagas e candidatos.</p>
        <br />

        <div className="botoes-admin">

          <Link to="/admin/vagas">
            <button className="btn-admin-criar">Criar Nova Vaga</button>
          </Link>

          <Link to="/admin/gerenciar-vagas">
            <button className="btn-admin-gerenciar">Gerenciar Vagas</button>
          </Link>

          <Link to="/ranking">
            <button className="btn-admin-ranking">Ver Ranking dos Voluntarios</button>
          </Link>

        </div>
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default PainelAdmin

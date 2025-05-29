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
        <Link to="/admin/vagas">
          <button className="btn-admin-criar">Criar Nova Vaga</button>
        </Link>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PainelAdmin

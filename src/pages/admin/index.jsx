import React from 'react'
import './admin.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import useAuthRedirect from '../../hooks/useAuthRedirect'

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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PainelAdmin

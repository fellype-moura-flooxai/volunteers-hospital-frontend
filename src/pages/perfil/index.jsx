import React from 'react'
import './perfil.css'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

const PerfilVoluntario = () => {
  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main className='perfil-content'>
        <h1>Perfil do Voluntário</h1>
        <p>Bem-vindo! Aqui você poderá acompanhar suas vagas e pontuação.</p>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PerfilVoluntario
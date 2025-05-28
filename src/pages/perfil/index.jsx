import React, { useEffect, useState } from 'react'
import './perfil.css'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import useAuthRedirect from '../../hooks/useAuthRedirect'

const PerfilVoluntario = () => {
  useAuthRedirect('voluntario')
  const [candidaturas, setCandidaturas] = useState([])
  const usuarioId = localStorage.getItem('usuarioId')

  useEffect(() => {
    fetch(`https://volunteers-hospital-backend.onrender.com/candidaturas/${usuarioId}`)
      // http://localhost:3000/candidaturas/${usuarioId}
      .then(response => response.json())
      .then(data => setCandidaturas(data))
      .catch(error => console.error('Erro ao buscar candidaturas:', error))
  }, [])

  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main className='perfil-content'>
        <h1>Perfil do Voluntário</h1>
        <p>Bem-vindo! Aqui você poderá acompanhar suas vagas e pontuação.</p>
        <br />
        <h2>Minhas Candidaturas</h2>
        {candidaturas.length === 0 ? (
          <p>Você ainda não se candidatou a nenhuma vaga.</p>
        ) : (
          <ul className="lista-vagas">
            {candidaturas.map((item) => (
              <li key={item.candidatura_id} className="vaga-card">
                <h3>{item.titulo}</h3>
                <p><strong>Status:</strong> {item.status}</p>
                <p><strong>Data:</strong> {new Date(item.data).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default PerfilVoluntario

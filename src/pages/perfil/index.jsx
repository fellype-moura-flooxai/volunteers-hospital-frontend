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

  const handleCancelar = async (candidaturaId) => {
    const confirmar = window.confirm('Tem certeza que deseja cancelar esta candidatura?')
    if (!confirmar) return

    try {
      const resposta = await fetch(`https://volunteers-hospital-backend.onrender.com/candidaturas/${candidaturaId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario_id: usuarioId })
      })

      const dados = await resposta.json()

      if (!resposta.ok) {
        return alert(dados.erro || 'Erro ao cancelar a candidatura.')
      }

      alert(dados.mensagem || 'Candidatura cancelada com sucesso!')
      setCandidaturas(candidaturas.filter(item => item.candidatura_id !== candidaturaId))
    } catch (erro) {
      alert('Erro inesperado ao cancelar.')
    }
  }

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
                <button
                  className="btn-cancelar"
                  onClick={() => handleCancelar(item.candidatura_id)}
                >
                  Cancelar Candidatura
                </button>
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

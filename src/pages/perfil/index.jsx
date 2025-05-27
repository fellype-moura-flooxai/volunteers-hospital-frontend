import React, { useEffect, useState } from 'react'
import './perfil.css'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'



const PerfilVoluntario = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    fetch('https://volunteers-hospital-backend.onrender.com/vagas')
      .then(response => response.json())
      .then(data => setVagas(data))
      .catch(error => console.error('Erro ao buscar vagas:', error));
  }, []);

  return (
    <div className='container'>
      <header>
        <Header />
      </header>
      <main className='perfil-content'>
        <h1>Perfil do Voluntário</h1>
        <p>Bem-vindo! Aqui você poderá acompanhar suas vagas e pontuação.</p>
        <br />
        <h2>Vagas Disponíveis</h2>
        {vagas.length === 0 ? (
          <p>Nenhuma vaga cadastrada.</p>
        ) : (
          <ul className="lista-vagas">
            {vagas.map(vaga => (
              <li key={vaga.id} className="vaga-card">
                <h3>{vaga.titulo}</h3>
                <p><strong>Descrição:</strong> {vaga.descricao}</p>
                <p><strong>Requisitos:</strong> {vaga.requisitos}</p>
                <p><strong>Data:</strong> {new Date(vaga.data).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PerfilVoluntario
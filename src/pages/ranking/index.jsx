import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './ranking.css'

export default function Ranking() {
    const [ranking, setRanking] = useState([])
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
        fetch('https://volunteers-hospital-backend.onrender.com/pontuacoes/ranking')
            .then(res => res.json())
            .then(data => setRanking(data))
            .catch(err => {
                console.error('Erro ao buscar ranking:', err)
                setMensagem('Erro ao carregar ranking.')
            })
    }, [])

    const medalha = (index) => {
        if (index === 0) return '🥇'
        if (index === 1) return '🥈'
        if (index === 2) return '🥉'
        return `${index + 1}º`
    }

    return (
        <div className="container">
            <header>
                <Header />
            </header>
            <main className="ranking-content">
                <h1>Ranking dos Voluntários</h1>
                <br />
                {mensagem && <p className="mensagem">{mensagem}</p>}
                {ranking.length === 0 ? (
                    <p>Nenhum voluntário pontuado ainda.</p>
                ) : (
                    <ul className="ranking-lista">
                        {ranking.map((item, index) => (
                            <li key={index} className="ranking-item">
                                <span className="posicao">{medalha(index)}</span>
                                <span className="nome">{item.nome}</span>
                                <span className="pontos">{item.pontos} pontos</span>
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

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import useAuthRedirect from '../../../hooks/useAuthRedirect'
import './candidaturas.css'

export default function CandidaturasVaga() {
    useAuthRedirect('admin')
    const { id } = useParams()
    const [candidaturas, setCandidaturas] = useState([])
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
        carregarCandidaturas()
    }, [id])

    const carregarCandidaturas = () => {
        fetch(`https://volunteers-hospital-backend.onrender.com/vagas/${id}/candidaturas`)
            .then(res => res.json())
            .then(data => setCandidaturas(data))
            .catch(err => {
                console.error('Erro ao carregar candidaturas:', err)
                setMensagem('Erro ao carregar candidaturas.')
            })
    }

    const atualizarStatus = async (candidaturaId, novoStatus) => {
        try {
            const resposta = await fetch(`https://volunteers-hospital-backend.onrender.com/candidaturas/${candidaturaId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: novoStatus })
            })

            if (!resposta.ok) throw new Error('Erro ao atualizar status')

            setMensagem(`Status atualizado para "${novoStatus}"`)
            carregarCandidaturas()
        } catch (erro) {
            console.error(erro)
            setMensagem('Erro ao atualizar status da candidatura.')
        }
    }

    return (
        <div className="container">
            <Header />
            <main className="candidaturas-vaga-content">
                <h2>Candidaturas para a Vaga {id}</h2>
                {mensagem && <p className="mensagem">{mensagem}</p>}
                {candidaturas.length === 0 ? (
                    <p>Nenhuma candidatura encontrada.</p>
                ) : (
                    <ul className="lista-candidaturas">
                        {candidaturas.map(c => (
                            <li key={c.id}>
                                <p><strong>Nome:</strong> {c.nome}</p>
                                <p><strong>Email:</strong> {c.email}</p>
                                <p><strong>Status:</strong> <span className={`status ${c.status}`}>{c.status}</span></p>
                                <p><strong>Data:</strong> {new Date(c.data_candidatura).toLocaleDateString()}</p>
                                <div className="botoes-admin">
                                    <button onClick={() => atualizarStatus(c.candidatura_id, 'aceita')}>Aceitar</button>
                                    <button onClick={() => atualizarStatus(c.candidatura_id, 'rejeitada')}>Rejeitar</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
            <Footer />
        </div>
    )
}

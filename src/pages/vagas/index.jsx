import { useEffect, useState } from 'react'
import './vagas.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Vagas() {
    const [vagas, setVagas] = useState([])
    const [erro, setErro] = useState('')
    const [loadingId, setLoadingId] = useState(null)
    const [mensagens, setMensagens] = useState({})
    const [candidaturas, setCandidaturas] = useState([])
    const tipoUsuario = localStorage.getItem('tipoUsuario')

    // Carrega vagas
    useEffect(() => {
        const fetchVagas = async () => {
            try {
                const resposta = await fetch('https://volunteers-hospital-backend.onrender.com/vagas')
                const dados = await resposta.json()
                setVagas(dados)
            } catch (erro) {
                console.error(erro)
                setErro('Erro ao carregar vagas.')
            }
        }

        fetchVagas()
    }, [])

    // Carrega candidaturas do usuário
    useEffect(() => {
        const usuarioId = localStorage.getItem('usuarioId')
        if (!usuarioId) return

        const fetchCandidaturas = async () => {
            try {
                const resposta = await fetch(`https://volunteers-hospital-backend.onrender.com/candidaturas/${usuarioId}`)
                const dados = await resposta.json()
                setCandidaturas(dados)
            } catch (erro) {
                console.error('Erro ao buscar candidaturas:', erro)
            }
        }

        fetchCandidaturas()
    }, [])

    // Candidatar-se
    const handleCandidatar = async (vagaId) => {
        if (!localStorage.getItem('usuarioId')) {
            alert('Você precisa estar logado para se candidatar.')
            window.location.href = '/login'
            return
        }

        setLoadingId(vagaId)

        try {
            const usuarioId = localStorage.getItem('usuarioId')

            const resposta = await fetch('https://volunteers-hospital-backend.onrender.com/candidaturas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    vaga_id: vagaId,
                    usuario_id: usuarioId,
                    status: 'pendente'
                })
            })

            const dados = await resposta.json()

            if (!resposta.ok) {
                return setMensagens(prev => ({ ...prev, [vagaId]: dados.mensagem || dados.erro || 'Erro ao se candidatar.' }))
            }

            setMensagens(prev => ({ ...prev, [vagaId]: 'Candidatura enviada com sucesso!' }))

            // Atualiza candidaturas
            const novaResposta = await fetch(`https://volunteers-hospital-backend.onrender.com/candidaturas/${usuarioId}`)
            const novaLista = await novaResposta.json()
            setCandidaturas(novaLista)
        } catch (erro) {
            setMensagens(prev => ({ ...prev, [vagaId]: erro.message || 'Erro inesperado.' }))
        } finally {
            setLoadingId(null)
        }
    }

    // Cancelar candidatura
    const handleCancelarCandidatura = async (candidaturaId, vagaId) => {
        const usuarioId = localStorage.getItem('usuarioId')
        const confirmar = window.confirm('Deseja cancelar sua candidatura?')
        if (!confirmar) return

        try {
            const resposta = await fetch(`https://volunteers-hospital-backend.onrender.com/candidaturas/${candidaturaId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ usuario_id: usuarioId })
            })

            const dados = await resposta.json()
            if (!resposta.ok) {
                return alert(dados.erro || 'Erro ao cancelar')
            }

            // Remove candidatura da lista
            setCandidaturas(prev => prev.filter(c => c.candidatura_id !== candidaturaId))
            setMensagens(prev => ({ ...prev, [vagaId]: '' }))
        } catch (erro) {
            console.error('Erro ao cancelar candidatura:', erro)
        }
    }

    return (
        <div className="container">
            <header>
                <Header />
            </header>
            <main className="vagas-content">
                <h2>Vagas disponíveis para voluntários.</h2>
                <br />
                <p className="texto-encorajamento">
                    💙 Ajude a transformar vidas seja parte de algo maior! Cadastre-se como voluntário e traga esperança para quem mais precisa. <br />
                    <em>Seu tempo pode fazer toda a diferença.</em>
                </p>
                {erro && <p className="erro">{erro}</p>}

                {vagas.length === 0 ? (
                    <p>Nenhuma vaga disponível no momento.</p>
                ) : (
                    <ul className="lista-vagas">
                        {vagas.map((vaga) => {
                            const candidatura = candidaturas.find(c => c.titulo === vaga.titulo)
                            return (
                                <li key={vaga.id} className="vaga-card">
                                    <h3>{vaga.titulo}</h3>
                                    <p><strong>Descrição:</strong> {vaga.descricao}</p>
                                    <p><strong>Requisitos:</strong> {vaga.requisitos}</p>
                                    <p><strong>Data:</strong> {new Date(vaga.data).toLocaleDateString('pt-BR')}</p>

                                    {tipoUsuario !== 'admin' && (
                                        candidatura ? (
                                            candidatura.concluida ? (
                                                <p className="mensagem-vaga">✅ Parabens Candidatura concluída.</p>
                                            ) : (
                                                <button
                                                    className="btn-cancelar"
                                                    onClick={() => handleCancelarCandidatura(candidatura.candidatura_id, vaga.id)}
                                                >
                                                    Cancelar Candidatura
                                                </button>
                                            )
                                        ) : (
                                            <button
                                                className="btn-vaga"
                                                onClick={() => handleCandidatar(vaga.id)}
                                                disabled={loadingId === vaga.id}
                                            >
                                                {loadingId === vaga.id ? 'Enviando...' : 'Candidatar-se'}
                                            </button>
                                        )
                                    )}
                                </li>
                            )
                        })}
                    </ul>
                )}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

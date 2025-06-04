import { useEffect, useState } from 'react'
import './vagas.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Vagas() {
    const [vagas, setVagas] = useState([])
    const [erro, setErro] = useState('')
    const [loadingId, setLoadingId] = useState(null)
    const [mensagens, setMensagens] = useState({})

    useEffect(() => {
        const fetchVagas = async () => {
            try {
                const resposta = await fetch('https://volunteers-hospital-backend.onrender.com/vagas')
                // fetch('http://localhost:3000/vagas')
                const dados = await resposta.json()
                setVagas(dados)
            } catch (erro) {
                console.error(erro)
                setErro('Erro ao carregar vagas.')
            }
        };

        fetchVagas();
    }, []);

    const handleCandidatar = async (vagaId) => {
        if (!localStorage.getItem('usuarioId')) {
            setMensagens(prev => ({ ...prev, [vagaId]: 'Você precisa estar logado para se candidatar.' }))
            return
        }

        setLoadingId(vagaId)

        try {
            const usuarioId = localStorage.getItem('usuarioId')

            const resposta = await fetch('https://volunteers-hospital-backend.onrender.com/candidaturas', {
                // fetch('http://localhost:3000/candidaturas'
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    vaga_id: vagaId,
                    usuario_id: usuarioId,
                    status: 'pendente'
                })
            });

            const dados = await resposta.json()

            if (!resposta.ok) {
                return setMensagens(prev => ({ ...prev, [vagaId]: dados.mensagem || dados.erro || 'Erro ao se candidatar.' }))
            }

            setMensagens(prev => ({ ...prev, [vagaId]: 'Candidatura enviada com sucesso!' }))
        } catch (erro) {
            setMensagens(prev => ({ ...prev, [vagaId]: erro.message || 'Erro inesperado.' }))
        } finally {
            setLoadingId(null)
        }
    };

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
                        {vagas.map((vaga) => (
                            <li key={vaga.id} className="vaga-card">
                                <h3>{vaga.titulo}</h3>
                                <p><strong>Descrição:</strong> {vaga.descricao}</p>
                                <p><strong>Requisitos:</strong> {vaga.requisitos}</p>
                                <p><strong>Data:</strong> {new Date(vaga.data).toLocaleDateString('pt-BR')}</p>
                                <button
                                    className="btn-vaga"
                                    onClick={() => handleCandidatar(vaga.id)}
                                    disabled={loadingId === vaga.id}
                                >
                                    {loadingId === vaga.id ? 'Enviando...' : 'Candidatar-se'}
                                </button>
                                {mensagens[vaga.id] && (
                                    <p className="mensagem-vaga">{mensagens[vaga.id]}</p>
                                )}
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

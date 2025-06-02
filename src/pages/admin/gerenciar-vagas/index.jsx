import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header/index'
import Footer from '../../../components/Footer/index'
import useAuthRedirect from '../../../hooks/useAuthRedirect'
import { useNavigate } from 'react-router-dom'
import './gerenciarVagas.css'

export default function GerenciarVagas() {
    useAuthRedirect('admin');
    const [vagas, setVagas] = useState([])
    const [mensagem, setMensagem] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://volunteers-hospital-backend.onrender.com/vagas`)
            .then(res => res.json())
            .then(data => setVagas(data))
            .catch(err => {
                console.error('Erro ao carregar vagas:', err)
                setMensagem('Erro ao carregar vagas.')
            })
    }, [])

    const excluirVaga = async (id) => {
        const confirmacao = window.confirm('Tem certeza que deseja excluir esta vaga?')
        if (!confirmacao) return

        try {
            const resposta = await fetch(`https://volunteers-hospital-backend.onrender.com/vagas/${id}`, {
                method: 'DELETE',           //`http://localhost:3000/vagas/${id}
            });

            const dados = await resposta.json()

            if (!resposta.ok) throw new Error(dados.erro || 'Erro ao excluir vaga')

            setMensagem('Vaga excluída com sucesso!')
            setVagas(vagas.filter(v => v.id !== id))
        } catch (erro) {
            console.error('Erro ao excluir vaga:', erro);
            setMensagem('Erro ao excluir vaga.')
        }
    }


    return (
        <div className="container">
            <Header />
            <main className="gerenciar-vagas-content">
                <h2>Gerenciar Vagas</h2>
                {mensagem && <p className="mensagem">{mensagem}</p>}
                {vagas.length === 0 ? (
                    <p>Nenhuma vaga cadastrada.</p>
                ) : (
                    <ul className="lista-vagas-admin">
                        {vagas.map(vaga => (
                            <li key={vaga.id}>
                                <h3>{vaga.titulo}</h3>
                                <p><strong>Data:</strong> {new Date(vaga.data).toLocaleDateString()}</p>
                                <p>{vaga.descricao}</p>
                                <div className="botoes-admin">
                                    <button onClick={() => navigate(`/admin/editar-vaga/${vaga.id}`)}>Editar</button>
                                    <button onClick={() => excluirVaga(vaga.id)}>Excluir</button>
                                    <button onClick={() => navigate(`/admin/vaga/${vaga.id}/candidaturas`)}>Ver Candidaturas</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </main>
            <Footer />
        </div>
    );
}

// src/pages/admin/VagasAdmin.jsx
import React, { useState } from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './criarVagas.css'
import useAuthRedirect from '../../../hooks/useAuthRedirect'

export default function VagasAdmin() {
    useAuthRedirect('admin') //  Redireciona se não for admin
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [requisitos, setRequisitos] = useState('')
    const [data, setData] = useState('')
    const [mensagem, setMensagem] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const resposta = await fetch('https://volunteers-hospital-backend.onrender.com/vagas', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo, descricao, requisitos, data, criado_por: localStorage.getItem('usuarioId') })
            });

            const dados = await resposta.json();

            if (!resposta.ok) throw new Error(dados.erro || 'Erro ao criar vaga')

            setMensagem('Vaga criada com sucesso!')
            setTitulo('')
            setDescricao('')
            setRequisitos('')
            setData('')
        } catch (erro) {
            setMensagem(erro.message)
        }
    };

    return (
        <div className="container">
            <header>
                <Header />
            </header>
            <main className="admin-vagas-content">
                <h2>Criar Nova Vaga</h2>
                <form onSubmit={handleSubmit} className="form-vaga">
                    <label>Título:
                        <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required />
                    </label>

                    <label>Descrição:
                        <textarea value={descricao} onChange={e => setDescricao(e.target.value)} required />
                    </label>

                    <label>Requisitos:
                        <textarea value={requisitos} onChange={e => setRequisitos(e.target.value)} required />
                    </label>

                    <label>Data:
                        <input type="date" value={data} onChange={e => setData(e.target.value)} required />
                    </label>

                    <button type="submit">Criar Vaga</button>
                </form>
                {mensagem && <p className="mensagem-vaga">{mensagem}</p>}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

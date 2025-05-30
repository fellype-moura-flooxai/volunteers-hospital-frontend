import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import useAuthRedirect from '../../../hooks/useAuthRedirect'
import './editarVaga.css'

export default function EditarVaga() {
    useAuthRedirect('admin')
    const { id } = useParams()
    const navigate = useNavigate()
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [requisitos, setRequisitos] = useState('')
    const [data, setData] = useState('')
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
        fetch(`https://volunteers-hospital-backend.onrender.com/vagas/${id}`)
            .then(res => res.json())
            .then(vaga => {
                setTitulo(vaga.titulo)
                setDescricao(vaga.descricao)
                setRequisitos(vaga.requisitos)
                setData(vaga.data.split('T')[0])
            })
            .catch(err => {
                console.error('Erro ao buscar vaga:', err)
                setMensagem('Erro ao carregar vaga.')
            })
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const resposta = await fetch(`https://volunteers-hospital-backend.onrender.com/vagas/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ titulo, descricao, requisitos, data })
            })

            if (!resposta.ok) throw new Error('Erro ao editar vaga')

            setMensagem('Vaga atualizada com sucesso!')
            setTimeout(() => navigate('/admin/gerenciar-vagas'), 1500)
        } catch (erro) {
            console.error(erro)
            setMensagem('Erro ao atualizar vaga.')
        }
    };

    return (
        <div className="container">
            <Header />
            <main className="editar-vaga-content">
                <h2>Editar Vaga</h2>
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
                    <button type="submit">Salvar Alterações</button>
                </form>
                {mensagem && <p className="mensagem-vaga">{mensagem}</p>}
            </main>
            <Footer />
        </div>
    );
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './cadastro.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function CadastroVoluntario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')
    const navigate = useNavigate()

    const handleCadastro = async (e) => {
        e.preventDefault();

        try {
            const resposta = await fetch('https://volunteers-hospital-backend.onrender.com/cadastro', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome, email, senha })
            });

            const dados = await resposta.json();

            if (resposta.ok) {
                setMensagem(dados.mensagem)
                setTimeout(() => {
                    navigate('/login');
                }, 1500);
            } else {
                setMensagem(dados.mensagem || 'Erro ao cadastrar.')
            }
        } catch (erro) {
            setMensagem('Erro ao conectar com o servidor.')
            console.error(erro);
        }
    };

    return (
        <div className='container'>
            <header>
                <Header />
            </header>
            <main className='cadastro-content'>
                <h2>Cadastro de Voluntário</h2>
                <form onSubmit={handleCadastro}>
                    <div>
                        <label>Nome:</label><br />
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    </div>
                    <div>
                        <label>Email:</label><br />
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Senha:</label><br />
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>
                {mensagem && <p>{mensagem}</p>}
            </main>
                <footer>
                    <Footer />
                </footer>
        </div>
    );
}
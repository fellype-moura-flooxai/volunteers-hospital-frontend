import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch('https://volunteers-hospital-backend.onrender.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });

      const dados = await resposta.json();

      if (resposta.ok) {
        setMensagem(`Bem-vindo, ${dados.usuario.nome}`);

        // Redirecionamento com base no tipo de usuário
        if (dados.tipo_usuario === 'admin') {
          navigate('/admin/painel');
        } else {
          navigate('/perfil');
        }

      } else {
        setMensagem(dados.mensagem || 'Erro ao fazer login.');
      }
    } catch (erro) {
      setMensagem('Erro ao conectar com o servidor.');
      console.error(erro);
    }
  };

  return (
    <div className='container'>
      <header>
        <Header />
      </header>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className='btn-login'>Entrar</button>
        </form>

        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

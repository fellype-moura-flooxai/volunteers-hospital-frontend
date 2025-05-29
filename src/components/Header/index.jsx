import React, { useState, useEffect } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false)

    const [logado, setLogado] = useState(false)
    const [nomeUsuario, setNomeUsuario] = useState('')
    const [tipoUsuario, setTipoUsuario] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const atualizarDados = () => {
            const token = localStorage.getItem('token')
            const nome = localStorage.getItem('nome')
            const tipo = (localStorage.getItem('tipo_usuario') || '').trim()

            if (token) {
                setLogado(true)
                setNomeUsuario(nome || 'Usuário')
                setTipoUsuario(tipo)
            } else {
                setLogado(false)
                setNomeUsuario('')
                setTipoUsuario('')
            }
        }

        atualizarDados()
        window.addEventListener('storage', atualizarDados)

        return () => window.removeEventListener('storage', atualizarDados)
    }, [])

    const handleLogout = () => {
        localStorage.clear()
        setLogado(false)
        setNomeUsuario('')
        navigate('/login')
    }

    return (
        <>
            <div className='top-bar'>
                <ul className='top-bar-list'>
                    <li>13 912345678</li>
                    <li><a href="/">ouvidoria@medvida.org.br</a></li>
                    <li><a href="/">como chegar</a></li>
                </ul>
            </div>

            <div className='header'>
                <a href="/" className='logoheader'><img src="/logo.png" alt="logo do hospital" className='logo-img-header' /></a>

                <nav className='nav-menu-desktop'>
                    <ul className='menu-list'>
                        <li className='dropdown'>
                            <a href="/">Consultas e exames</a>
                            <ul className='dropdown-menu'>
                                <li><a href="/">teste</a></li>
                                <li><a href="/">teste</a></li>
                            </ul>
                        </li>
                        <li><a href="/vagas"> Vagas - projeto mãos que Ajudam </a></li>

                        {logado && tipoUsuario === 'admin' && (
                            <li><a href="/admin/painel">Painel do Admin</a></li>
                        )}

                        {logado && tipoUsuario === 'voluntario' && (
                            <li><a href="/perfil">Área do Voluntário</a></li>
                        )}

                        {!logado && <li><a href="/login">Login</a></li>}
                        {!logado && <li><a href="/cadastro">Cadastro</a></li>}

                        {logado && (
                            <>
                                <li><span className="bem-vindo">Olá, {nomeUsuario}!</span></li>
                                <li><button onClick={handleLogout} className="btn-logout">Sair</button></li>
                            </>
                        )}
                    </ul>
                </nav>

                <div className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>
                    {menuAberto ? '✖' : '☰'}
                </div>
            </div>

            <div className={`side-menu ${menuAberto ? 'aberto' : ''}`}>
                <ul className='menu-list'>
                    <li className='dropdown'>
                        <a href="/">Consultas e exames</a>
                        <ul className='dropdown-menu'>
                            <li><a href="/vagas">teste</a></li>
                            <li><a href="/">teste</a></li>
                        </ul>
                    </li>
                    <li><a href="/vagas">Projeto mãos que Ajudam</a></li>
                    {logado && tipoUsuario === 'admin' && (
                        <li><a href="/admin/painel">Painel do Admin</a></li>
                    )}

                    {logado && tipoUsuario === 'voluntario' && (
                        <li><a href="/perfil">Área do Voluntário</a></li>
                    )}
                    {!logado && <li><a href="/login">Login</a></li>}
                    {!logado && <li><a href="/cadastro">Cadastro</a></li>}

                    {logado && (
                        <>
                            <li><span className="bem-vindo">Olá, {nomeUsuario}!</span></li>
                            <li><button onClick={handleLogout} className="btn-logout">Sair</button></li>
                        </>
                    )}
                </ul>

            </div>
        </>
    )
}

export default Header
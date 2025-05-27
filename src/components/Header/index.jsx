import React, { useState } from 'react'
import './Header.css'

const Header = () => {
    const [menuAberto, setMenuAberto] = useState(false);

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
                <a href="/" className='logoheader'><img src="logo.png" alt="logo do hospital" className='logo-img-header' /></a>

                <nav className='nav-menu-desktop'>
                    <ul className='menu-list'>
                        <li className='dropdown'>
                            <a href="/">Consultas e exames</a>
                            <ul className='dropdown-menu'>
                                <li><a href="/">teste</a></li>
                                <li><a href="/">teste</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Projeto mãos que Ajudam</a></li>
                        <li><a href="/">Quem somos nós</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/">Cadastro</a></li>
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
                                <li><a href="/">teste</a></li>
                                <li><a href="/">teste</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Projeto mãos que Ajudam</a></li>
                        <li><a href="/">Quem somos nós</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/">Cadastro</a></li>
                    </ul>

            </div>
        </>
    )
}

export default Header
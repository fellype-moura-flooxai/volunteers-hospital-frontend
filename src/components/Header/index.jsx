import React from 'react'
import './Header.css'

const Header = () => (
    <div className='header'>
        <img src="logo.png" alt="logo do hospital" className='logo-img-header' />

        <nav className='nav-menu'>
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
                <li><a href="/">Login</a></li>
                <li><a href="/">Cadastro</a></li>
            </ul>
        </nav>
    </div>
)

export default Header
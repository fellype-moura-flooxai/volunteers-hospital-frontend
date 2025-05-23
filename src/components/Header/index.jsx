import React from 'react'
import './Header.css'

const Header = () => (
    <div className='header'>
        <img src="logo.png" alt="logo do hospital" className='logo-img-header' />
        <div className='links'>
            <a href="/">Home</a>
            <a href="/">Login</a>
            <a href="/">Cadastro</a>
            <a href="/">Projeto mãos que Ajudam</a>
            <a href="/">Quem somos nós</a>
        </div>
    </div>
)

export default Header
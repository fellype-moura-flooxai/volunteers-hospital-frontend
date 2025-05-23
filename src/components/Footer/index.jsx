import React from 'react'
import './Footer.css'

const Footer = () => (
    <footer className='footer'>
        <section className='logo-endereco'>
            <img src="logo.png" alt="logo do hospital" className='logo-img-footer' />
            <section className='endereço'>
                <address>
                    Rua Doutor sla oq tanto faz, 123<br />
                    Santos/SP<br />
                    Cep 123456789
                </address>
                <br />
                <p>Central de Atendimento 24h<br />
                    +55 (13) 123456789 | +55(13) 123456789</p>
                <br />
                <p>Ouvidoria</p>
                <p>+55 (13) 123456789</p>
            </section>
        </section>

        <section className='institucional'>
            <h4>Institucional</h4>
            <ul>
                <li>Quem Somos</li>
                <li>Corpo Clínico</li>
                <li>Serviço Social</li>
            </ul>
        </section>

        <section className='paciente'>
            <h4>Sou Paciente</h4>
            <li><a href="/">Guia do Paciente</a></li>
            <li>Resultados de Exames</li>
            <li>Especialidades Médicas </li>
        </section>

        <section className='junte_se'>
            <li><a href="/">trabalhe conosco</a></li>
            <li><a href="/">Projeto mão que ajudam</a></li>
        </section>
    </footer>
)

export default Footer
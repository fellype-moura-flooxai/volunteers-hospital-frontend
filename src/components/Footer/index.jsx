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
                    +55 (13) 123456789</p>
                <br />
                <p>Ouvidoria</p>
                <p>+55 (13) 123456789</p>
            </section>
        </section>

        <section className='Voluntariado'>
            <a href="/"><h4>Seja Voluntario</h4></a>
            <br />
            <p>Cada gesto importa. Vamos juntos cuidar de quem precisa</p>
            <button className='btnSaibaMais'>Saiba Mais</button>
        </section>
    </footer>
)

export default Footer
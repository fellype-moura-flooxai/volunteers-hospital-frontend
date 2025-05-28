import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (

    <>
        <footer className='footer-desktop'>
            <section className='endereco'>
                <img src="/logo.png" alt="logo do hospital" className='logo-img-footer' />
                <div className='endereco-text'>
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
                </div>
            </section>

            <section className='Voluntariado'>
                <a href="/"><h4>Seja Voluntario</h4></a>
                <br />
                <p>Cada gesto importa. Vamos juntos cuidar de quem precisa</p>
                <button className='btnSaibaMais'>Saiba Mais</button>
            </section>
        </footer>



        <footer className='footer-mobile'>
            <section className='agendamento'>
                <button className='btn-contact'>
                    <a href="https://wa.me/5513981362813"><FontAwesomeIcon icon={faWhatsapp} style={{
                        width: '15px'
                        , height: '15px', color: '#fff'
                    }} /> Agende por WhatsApp</a>
                </button>
            </section>

            <div className='contact-mobile'>
                <img src="/logo.png" alt="logo-mobile" className='logo-mobile' />
                <div className='divcentral'>
                </div>
                <FontAwesomeIcon icon={faPhoneAlt} /><a href="tel: 123456789" className='sla'><p>(13) 123456789</p></a>
            </div>
            <div className='social-icons'>
                <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} style={{
                    width: '25px'
                    , height: '25px', color: '#fff'
                }} /></a>
                <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} style={{
                    width: '20px'
                    , height: '20px', color: '#fff'
                }} /></a>
                <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedinIn} style={{
                    width: '25px'
                    , height: '25px', color: '#fff'
                }} /></a>
            </div>

        </footer>
        <div className='copyright'>
            <p>© 2025 Site Desenvolvido por Fellype Moura. Todos os direitos reservados.</p>
        </div>
    </>
)

export default Footer
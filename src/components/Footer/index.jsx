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
                        Rua Doutor coloque seu endereco, 123<br />
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
                <br />
                <a href="/vagas">
                    <button className='btnSaibaMais'>Quero Ajudar</button>
                </a>
            </section>

            <section className="footer-extra">
                <div className="footer-links">
                    <h4>Links Úteis</h4>
                    <ul>
                        <li><a href="/">Política de Privacidade</a></li>
                        <li><a href="/">Termos de Uso</a></li>
                        <li><a href="/">Contato</a></li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h4>Receba novidades</h4>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Seu e-mail" required />
                        <button type="submit">Inscrever</button>
                    </form>
                </div>
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

            <section className="footer-extra">
                <div className="footer-links">
                    <h4>Links Úteis</h4>
                    <ul>
                        <li><a href="/politica">Política de Privacidade</a></li>
                        <li><a href="/termos">Termos de Uso</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </div>

                <div className="footer-newsletter">
                    <h4>Receba novidades</h4>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Seu e-mail" required />
                        <button type="submit">Inscrever</button>
                    </form>
                </div>
            </section>

        </footer>
        <div className='copyright'>
            <p>© 2025 Site Desenvolvido por Fellype Moura. Todos os direitos reservados.</p>
        </div>
    </>
)

export default Footer
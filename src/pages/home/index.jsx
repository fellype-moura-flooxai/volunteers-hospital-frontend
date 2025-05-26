import React from 'react'
import './home.css'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

const Home = () => (
    <div className='container'>
        <header>
            <Header />
        </header>
        <main className="home-content">
            <section className='section1'>
                <img src="banner1.png" alt="imagem-da-home" className='banner-home' />
            </section>

            <section className='section2'>
                <img src="imgVoluntarios.png"
                    alt="imagem-banner-voluntarios" className='banner-voluntarios' />
            </section>
        </main >
        <footer>
            <Footer />
        </footer>
    </div>
)

export default Home
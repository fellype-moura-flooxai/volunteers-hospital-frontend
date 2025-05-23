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
            <h1>isso é um teste da pagina home</h1>
            <section className='section1'>

            </section>
            <section className='section2'>

            </section>
        </main >
        <footer>
            <Footer />
        </footer>
    </div>
)

export default Home
import Contato from './components/Contato'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import styles from '../styles/contatoPagina.module.scss'

export default function ContatoPagina() {
    return (
        <>
            <Head>
                <title>Contato</title>
                <meta name="viewport" content="width=device-width" charSet="utf-8" />
            </Head>
            <Navbar />
            <Contato />
            <Footer />
        </>
    )
}
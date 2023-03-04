import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import styles from '../styles/contatoPagina.module.scss'
import Contato from './components/Contato'
import InfoBox from './components/Contato'
import SocialBox from './components/Contato'
import TituloContato from './components/Contato/TituloContato'


export default function ContatoPagina() {
    return (
        <div className={styles.contatoPaginaDiv}>
            <Head>
                <title>Contato</title>
                <meta name="viewport" content="width=device-width" charSet="utf-8" />
            </Head>
            <Navbar />
            <TituloContato />
            <SocialBox twitter={'GamesEmporium'} email={'GamesEmporium@gmail.com'} instagram={'GamesEmporiumOficial'} facebook={'GamesEmporium'} />
            <Footer />
        </div>
    )
}
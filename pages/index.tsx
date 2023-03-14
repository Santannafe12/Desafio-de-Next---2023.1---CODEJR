import styles from '../styles/Home.module.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Destaques from './components/Destaques'
import Curiosidades from './components/Curiosidades'
import Busca from './components/Busca'
import Catalogo from './components/Catalogo'
import Categorias from './components/Categorias'
import Aguardados from './components/Aguardados'
import Populares from './components/Populares'
import { carouselImages } from './components/constants'
import Carousel2 from './components/CarouselMainSlider'
import Atualizados from './components/Atualizados'
import Indies from './components/Indies'
import Preferencias from './components/Preferencias'
import Display from './components/Display'
import Avaliados from './components/Avaliados'

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <main>
        <Busca />
        <Carousel images={carouselImages} />
        <Carousel2 />
        <Populares />
        <Categorias />
        <Destaques />
        <Aguardados />
        <Atualizados />
        <Indies />
        <Preferencias />
        <Display />
        <Avaliados />
        <Catalogo />
        <Curiosidades />
      </main>
      <Footer />
    </div>
  )
}

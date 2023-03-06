import { Inter } from '@next/font/google'
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

const inter = Inter({ subsets: ['latin'] })

const images = [
  "/images/deadspace.jpg",
  "/images/returnal.jpg",
  "/images/tlou.jpg",
  "/images/battlefield.jpg",
  "/images/halflife.jpg"
];

const imagesDestaques = [
  "/images/thelast1.jpg",
  "/images/thelou2.jpg",
  "/images/resident.jpg",
  "/images/hogwarts.jpg"
]

const paragrafos = [
  "The Last of Us. Part I",
  "The Last of Us. Part II",
  "Resident Evil 4",
  "Hogwarts Legacy"
]

const desconto = [
  "15%",
  "30%",
  "45%",
  "20%"
]

const antigoValor = [
  "R$249,99",
  "R$199,99",
  "R$149,99",
  "R$199,99"
]



const imagesNovidades = [
  "/images/sons.jpg",
  "/images/atomic.jpg",
  "/images/frostpunk.jpg",
  "/images/call.jpg",
]

const tituloNovidades = [
  "Sons of The Forest",
  "Atomic Hearts",
  "Frostpunk 2",
  "Call of Duty"
]

const paragrafoNovidades = [
  "Enviado para encontrar um bilionário desaparecido em uma ilha remota, você se encontra em uma paisagem infernal infestada de canibais. Crie, construa e lute para sobreviver, sozinho ou com amigos, neste novo e assustador simulador de horror de sobrevivência em mundo aberto.",
  "Em um mundo utópico, insano e deslumbrante, trave batalhas explosivas. Adapte seu estilo de luta a cada novo oponente, tire vantagem do espaço e aprimore seus equipamentos para completar a missão. O preço da verdade será pago com sangue.",
  "Frostpunk 2 é a sequência do aclamado jogo de sobrevivência em sociedade indicado ao BAFTA. A era do vapor já passou e agora o petróleo é tido como a mais nova salvação da humanidade. No entanto, com novas ameaças a caminho, o futuro da cidade parece ainda mais sombrio do que antes.",
  "O Call of Duty®: Modern Warfare® II coloca os jogadores dentro de um conflito global sem precedentes que conta com o retorno dos Operadores icônicos da Força-Tarefa 141."
]

const lancamentoNovidades = [
  "23/02/2023",
  "20/02/2023",
  "28/10/2022",
  "28/10/2022"
]

const curiosidadesTexto = "Você sabia? A Games Emporium está no mercado desde 2007 te trazendo o melhor que existe no mundo dos jogos. Possuímos  promoções diárias e ofertas imperdíveis. Recomende o nosso site!"

const imagesCuriosidades = [
  "/images/facebook.png",
  "/images/instagram.png",
  "/images/twitter.png",
]

const boxes = [
  {
    image: '/images/action_shooter.jpg',
    text: 'Ação',
  },
  {
    image: '/images/survivalgames.jpg',
    text: 'Sobrevivência',
  },
  {
    image: '/images/roguelike.jpg',
    text: 'Roguelike',
  },
  {
    image: '/images/strategy.jpg',
    text: 'Estratégia',
  },
  {
    image: '/images/horror.jpg',
    text: 'Terror',
  },
  {
    image: '/images/cooperative.jpg',
    text: 'Cooperativo',
  },
  {
    image: '/images/racing.jpg',
    text: 'Corrida',
  },
  {
    image: '/images/sport.jpg',
    text: 'Esportes',
  },
  {
    image: '/images/fight.jpg',
    text: 'Luta',
  },
  {
    image: '/images/simulation.jpg',
    text: 'Simulação',
  },
  {
    image: '/images/futuristic.jpg',
    text: 'Futurista',
  },
  {
    image: '/images/indie.jpg',
    text: 'Indie',
  },
];

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <main>
        <Busca />

        <div className={styles.carousel}>
          <Carousel images={images} />
        </div>

        <Destaques />

        <Categorias boxes={boxes} />
        
        <Populares />

        <Aguardados />

          <Catalogo imageUrl={'/images/neonMescla.png'} text={'Explore nosso catalogo'}/>

        <div className={styles.curiosidades}>
          <Curiosidades curiosidades={curiosidadesTexto} imagesCuriosidades={imagesCuriosidades} />
        </div>

      </main>
      <Footer />
    </div>
  )
}

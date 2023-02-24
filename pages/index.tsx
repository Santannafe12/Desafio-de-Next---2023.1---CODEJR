import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Destaques from './components/Destaques'
import Novidades from './components/Novidades'
import Curiosidades from './components/Curiosidades'
import Busca from './components/Busca'
import Display from './components/Display'
import Sidebar from './components/Sidebar'
import Catalogo from './components/Catalogo'
import Categorias from './components/Categorias'
import TextoCategoria from './components/Categorias/TextoCategoria'
import Slider from './carouselSlider'

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

function calcularDesconto(preco: number, desconto: number) {
  const precoDescontado = preco * (1 - desconto / 100);
  return `R$${precoDescontado.toFixed(2).replace(".", ",")}`;
}

const novoValor = antigoValor.map(function (price, index) {
  const matches = price.match(/R\$(\d+,\d+)/);
  const numericPrice = matches ? parseFloat(matches[1].replace(",", ".")) : null;
  const numericDiscount = parseInt(desconto[index], 10);
  return calcularDesconto(numericPrice!, numericDiscount);
});

const imagesNovidades = [
  "/images/sons.jpg",
  "/images/atomic.jpg",
  "/images/call.jpg"
]

const paragrafoNovidades = [
  "Enviado para encontrar um bilionário desaparecido em uma ilha remota, você se encontra em uma paisagem infernal infestada de canibais. Crie, construa e lute para sobreviver, sozinho ou com amigos, neste novo e assustador simulador de horror de sobrevivência em mundo aberto.",
  "Em um mundo utópico, insano e deslumbrante, trave batalhas explosivas. Adapte seu estilo de luta a cada novo oponente, tire vantagem do espaço e aprimore seus equipamentos para completar a missão. O preço da verdade será pago com sangue.",
  "O Call of Duty®: Modern Warfare® II coloca os jogadores dentro de um conflito global sem precedentes que conta com o retorno dos Operadores icônicos da Força-Tarefa 141."
]

const lancamentoNovidades = [
  "23/02/2023",
  "20/02/2023",
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
    image: '/images/survivor.jpg',
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
];

export default function Home() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Busca />
      <main>
        <div className={styles.carousel}>
          <Carousel images={images} />
        </div>
        <div className={styles.destaqueBox}>
          <div className={styles.destaque}><h1>Destaque dos descontos dessa semana</h1></div>
          <Destaques imagesDestaque={imagesDestaques} paragrafo={paragrafos} desconto={desconto} antigoValor={antigoValor} novoValor={novoValor} />
        </div>
        <div className={styles.novidades}><h1>Novidades populares</h1></div>
        <Novidades imagesNovidades={imagesNovidades} paragrafoNovidades={paragrafoNovidades} lancamentoNovidades={lancamentoNovidades} />
        <div className={styles.catalogo}>
          <Catalogo imageUrl={'/images/neonMescla.png'} text={'Se preferir, explore nosso catálogo'} text2={'Pesquise por gênero, características, preço e muito mais para encontrar seu próximo jogo favorito.'} />
        </div>
        <TextoCategoria />
        <Categorias boxes={boxes} />
        <div className={styles.curiosidades}>
          <Curiosidades curiosidades={curiosidadesTexto} imagesCuriosidades={imagesCuriosidades} />
        </div>
        <Footer />
      </main>
      <Slider images={images} />

    </div>
  )
}

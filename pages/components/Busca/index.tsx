import styles from './busca.module.scss'
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';

const buscaParametros = [
  { name: 'Descobrir', url: '/' },
  { name: 'Navegar', url: '/' },
  { name: 'Novidades', url: '/' },
];

export default function Busca() {

  return (
    <div className={styles.container__busca}>
      <div className={styles.box__busca}>
        <div className={styles.search}>
          <input type="text" placeholder="Procurar jogos" />
          <button type="submit"><AiOutlineSearch /></button>
        </div>
        <ul className={styles.parametros}>
          {buscaParametros.map((item) => (
            <li key={item.url}>
              <Link href={item.url}>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
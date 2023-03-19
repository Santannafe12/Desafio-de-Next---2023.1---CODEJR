import styles from './busca.module.scss'
import { AiOutlineSearch } from 'react-icons/ai';

export default function Busca() {

  return (
    <div className={styles.container__busca}>
      <div className={styles.box__busca}>
        <div className={styles.search}>
          <input type="text" placeholder="Procurar jogos" />
          <button><AiOutlineSearch /></button>
        </div>
      </div>
    </div>
  )
}
import Image from 'next/image'
import Link from 'next/link'
import styles from './navbar.module.scss'

export default function Navbar() {

  return (
    <nav className={styles.navbar}>
      <Link href={'/'}><Image src="/images/Text.png" width={320} height={76} quality={100} alt="Nome da Loja" className={styles.navbar__logo} /></Link>
      <div className={styles.navbar__itens}>
        <Link href={'/'}> <p className={styles.texto}> Home </p> </Link>
        <Link href={'/contato'}> <p className={styles.texto}> Contato </p> </Link>
        <Link href={'/membros'}> <p className={styles.texto}>Funcionários</p> </Link>
        <Link href={'/admin'}> <p className={styles.texto}> Admin </p> </Link>
        <Link href={'/login'}> <p className={styles.texto}> Login </p> </Link>
      </div>
    </nav>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import styles from './navbar.module.scss'

export default function Navbar() {
	const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
		{
			text: "Home",
			icon: "/images/home1.png",
		},
		{
			text: "Contato",
			icon: "/images/call.png",
		},
		{
			text: "Funcionários",
			icon: "/images/employees.png",
		},
		{
			text: "Admin",
			icon: "/images/administrator.png",
		},
		{
			text: "Login",
			icon: "/images/login.png",
		},
	];

  return (
    <nav className={styles.navbar}>
	<Link href={'/'}><Image src="/images/Text.png" width={320} height={76} quality={100} alt="Nome da Loja" className={styles.navbar__logo}/></Link>
      <div className={styles.navbar__itens}>
        <Link href={'/'}> <p className={styles.texto}> Home </p> </Link>
        <Link href={'/contato'}> <p className={styles.texto}> Contato </p> </Link>
        <Link href={'/funcionarios'}> <p className={styles.texto}>Funcionários</p> </Link>
        <Link href={'/admin'}> <p className={styles.texto}> Admin </p> </Link>
        <Link href={'/login'}> <p className={styles.texto}> Login </p> </Link>
      </div>
    </nav>
  )
}

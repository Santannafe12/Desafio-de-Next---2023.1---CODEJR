import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import Sidebar from '../Sidebar';
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
      <span className={styles.navbar__logo}><Image src="/images/Text.png" width={320} height={76} quality={100} alt="Nome da Loja" /></span>
      <div className={styles.navbar__itens}>
        <Link href={'/'}> <p className={styles.texto}> Home </p> </Link>
        <Link href={'/contato'}> <p className={styles.texto}> Contato </p> </Link>
        <Link href={'/funcionarios'}> <p className={styles.texto}>Funcionários</p> </Link>
        <Link href={'/admin'}> <p className={styles.texto}> Admin </p> </Link>
        <Link href={'/login'}> <p className={styles.texto}> Login </p> </Link>
      </div>
      <div className={styles.hamburguer_sidenav}>
      <div className={isExpanded ? styles.hamburger_image_2 : styles.hamburger_out_2}><Image className={isExpanded ? styles.hamburger_in_nav : styles.hamburger_out_nav} src={"/images/menu_blue.png"} alt={"Minimizar a sidebar"} width={60} height={60} quality={100} onClick={() => setExpendState(!isExpanded)}/></div>
      <Image src="/images/Logo.png" width={60} height={60} quality={100} alt="Logo da Loja" className={styles.navbar__logo__2} />
      </div>
    </nav>
  )
}

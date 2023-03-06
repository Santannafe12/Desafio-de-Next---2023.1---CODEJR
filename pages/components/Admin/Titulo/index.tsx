import styles from './titulo.module.scss'
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { useState } from 'react';
import Criar from '../../Modal/Criar';
import Link from 'next/link';

export default function Titulo() {
    const [showCriarModal, setShowCriarModal] = useState(false);

    return (
        <nav className={styles.nav__titulo}>
            <Link href={'/'}><AiFillHome className={styles.admin_icon}/></Link>
            <h1>Gerenciamento de Funcionários</h1>
            <button onClick={() => setShowCriarModal(true)} className={styles.nav__titulo_botao}><BsPlusCircleFill className={styles.titulo__icons} />Adicionar Funcionário</button>
            {showCriarModal && <Criar onClose={ () => setShowCriarModal(false) } />}
        </nav>
    )
}
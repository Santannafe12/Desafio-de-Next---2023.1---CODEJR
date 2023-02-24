import styles from './titulo.module.scss'
import { BsPlusCircleFill } from "react-icons/bs";
import { useState } from 'react';
import Criar from '../../Modal/Criar';

export default function Titulo() {
    const [showCriarModal, setShowCriarModal] = useState(false);

    function handleConfirmModalAdicionar() {
        // Do something when the user confirms the modal
        setShowCriarModal(false);
    };


    return (
        <nav className={styles.nav__titulo}>
            <h1>Gerenciamento de Funcionários</h1>
            <button onClick={() => setShowCriarModal(true)} className={styles.nav__titulo_botao}><BsPlusCircleFill className={styles.titulo__icons} />Adicionar Funcionário</button>
            {showCriarModal && <Criar onClose={ () => setShowCriarModal(false) } />}
        </nav>
    )
}
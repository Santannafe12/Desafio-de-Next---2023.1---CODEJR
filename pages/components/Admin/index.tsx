import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './admin.module.scss'
import { BsPlusCircleFill } from "react-icons/bs";
import Editar from '../Modal/Editar';
import Visualizar from '../Modal/Visualizar';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import Criar from '../Modal/Criar';
import { useToast } from '@chakra-ui/react'

interface Funcionarios {
  aniversario: string;
  cargo: string;
  email: string;
  id: number;
  name: string;
  salario: number;
}

export default function AdminTabela() {
  const [showCriarModal, setShowCriarModal] = useState(false);
  const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([]);
  const [showVisualizarModal, setShowVisualizarModal] = useState(false);
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [showDeletarModal, setShowDeletarModal] = useState(false);
  const toast = useToast();

  useEffect(() => {
    fetch('/api/workers').then((response) => response.json().then((workers: { funcionarios: Funcionarios[] }) => setFuncionarios(workers.funcionarios)))
  }, [])


  return (
    <div className={styles.tableContainer}>
      <nav className={styles.nav__titulo}>
        <Link href={'/'}><AiFillHome className={styles.admin_icon} /></Link>
        <h1>Gerenciamento de Funcionários</h1>
        <button onClick={() => setShowCriarModal(true)} className={styles.nav__titulo_botao}><BsPlusCircleFill className={styles.titulo__icons} />Adicionar Funcionário</button>
        {showCriarModal && <Criar onClose={() => setShowCriarModal(false)} />}
      </nav>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Aniversário</th>
            <th>Cargo</th>
            <th>Salário</th>
            <th className={styles.adminAction}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) => (
            <tr key={funcionario.id}>
              <td><h2>{funcionario.id}</h2></td>
              <td>{funcionario.name}</td>
              <td>{funcionario.email}</td>
              <td>{funcionario.aniversario}</td>
              <td>{funcionario.cargo}</td>
              <td>{funcionario.salario}</td>
              <td className={styles.crud__box}>
                <button
                  className={styles.viewAdmin}
                  onClick={() => setShowVisualizarModal(true)}>
                    Visualizar
                </button>
                <button
                  className={styles.editAdmin}
                  onClick={() => setShowEditarModal(true)}>
                    Editar
                </button>
                <button
                  className={styles.deleteAdmin}
                  onClick={() => {
                    toast({
                      title: 'Funcionário excluido com sucesso!',
                      status: 'info',
                      duration: 8000,
                      isClosable: true,
                    });
                  }}>
                    Deletar
                </button>

                {showVisualizarModal && <Visualizar onClose={() => setShowVisualizarModal(false)} />}
                {showEditarModal && <Editar onClose={() => setShowEditarModal(false)} />}
                {/* {showDeletarModal && <Deletar onClose={() => setShowDeletarModal(false)} />} */}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
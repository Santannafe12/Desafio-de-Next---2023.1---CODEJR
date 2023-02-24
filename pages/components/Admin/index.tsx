import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './admin.module.scss'
import { BsFillTrashFill, BsPlusCircleFill, BsEyeFill } from "react-icons/bs";
import { RiEditBoxFill } from "react-icons/ri";
import Titulo from './Titulo';
import Deletar from '../Modal/Deletar/deletar';
import Editar from '../Modal/Editar';
import Visualizar from '../Modal/Visualizar';

interface Funcionarios {
  aniversario: string;
  cargo: string;
  email: string;
  id: number;
  name: string;
  salario: number;
}

export default function AdminTabela() {
  const [funcionarios, setFuncionarios] = useState<Funcionarios[]>([]);
  const [showVisualizarModal, setShowVisualizarModal] = useState(false);
  const [showEditarModal, setShowEditarModal] = useState(false);
  const [showDeletarModal, setShowDeletarModal] = useState(false);

  function handleConfirmModalEditar() {
    // Do something when the user confirms the modal
    setShowEditarModal(false);
  };

  function handleConfirmModalDeletar() {
    // Do something when the user confirms the modal
    setShowDeletarModal(false);
  };

  useEffect(() => {
    fetch('/api/workers').then((response) => response.json().then((workers: { funcionarios: Funcionarios[] }) => setFuncionarios(workers.funcionarios)))
  }, [])


  return (
    <div className={styles.box__admin}>
      <Titulo />
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Aniversário</th>
              <th>Cargo</th>
              <th>Salário</th>
              <th>Ferramentas</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((funcionario) => (
              <tr key={funcionario.id}> <td>{funcionario.id}</td>
                <td>{funcionario.name}</td>
                <td>{funcionario.email}</td>
                <td>{funcionario.aniversario}</td>
                <td>{funcionario.cargo}</td>
                <td>{funcionario.salario}</td>
                <td className={styles.crud__box}>
                  <BsEyeFill className={styles.crud__icons} onClick={() => setShowVisualizarModal(true)} />
                  <RiEditBoxFill className={styles.crud__icons} onClick={() => setShowEditarModal(true)} />
                  <BsFillTrashFill className={styles.crud__icons} onClick={() => setShowDeletarModal(true)} />

                  {showVisualizarModal && <Visualizar onClose={() => setShowVisualizarModal(false)} />}
                  {showEditarModal && <Editar onClose={() => setShowEditarModal(false)} />}
                  {showDeletarModal && <Deletar onClose={() => setShowDeletarModal(false)} />}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
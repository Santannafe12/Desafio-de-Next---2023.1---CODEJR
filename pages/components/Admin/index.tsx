import { useEffect, useState } from 'react';
import styles from './admin.module.scss';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal, useDisclosure, useToast } from '@chakra-ui/react';
import EditarModal from '../Modal/Editar';
import VisualizarModal from '../Modal/Visualizar';
import CreateModal from '../Modal/Criar';

interface Funcionario {
  aniversario: string;
  cargo: string;
  email: string;
  id: number;
  name: string;
  salario: number;
}

export default function AdminTabela() {
  const toast = useToast();
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  function handleDelete(id: number) {
    fetch(`http://localhost:3000/funcionarios/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setFuncionarios(funcionarios.filter((f) => f.id !== id));
        toast({
          title: 'Funcionário excluído com sucesso!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetch('http://localhost:3000/funcionarios')
      .then((response) => response.json())
      .then((data) => setFuncionarios(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.tableContainer}>
      <nav className={styles.nav__titulo}>
        <Link href="/"><AiFillHome className={styles.admin_icon} /></Link>
        <h1>Gerenciamento de Funcionários</h1>
      <CreateModal />
      </nav>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Aniversário</th>
            <th>Cargo</th>
            <th>Salário</th>
            <th className={styles.adminAction}>Ações</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {funcionarios.map((funcionario) => (
            <tr key={funcionario.id}>
              <td>{funcionario.name}</td>
              <td>{funcionario.email}</td>
              <td>{funcionario.aniversario}</td>
              <td>{funcionario.cargo}</td>
              <td>{funcionario.salario}</td>
              <td className={styles.crud__box}>
                <VisualizarModal id={funcionario.id} />
                <EditarModal id={funcionario.id} />
                <Popover>
                  <PopoverTrigger>
                    <Button className={styles.deleteAdmin}>Excluir</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader className={styles.popoverHeader}><h1>Deletar Funcionário</h1></PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody className={styles.popoverBody}>
                        <p>Você tem certeza? Você não poderá desfazer essa ação.</p>
                      </PopoverBody>
                      <PopoverFooter className={styles.popoverFooter}>
                        <Button onClick={() => handleDelete(funcionario.id)} colorScheme="red">Deletar</Button>
                      </PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
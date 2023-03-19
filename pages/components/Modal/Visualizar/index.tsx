import { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  ModalCloseButton,
} from '@chakra-ui/react';
import styles from './visualizar.module.scss'

interface Props {
  id: number;
}

interface Funcionario {
  aniversario: string;
  cargo: string;
  email: string;
  id: number;
  name: string;
  salario: number;
}

const VisualizarModal: React.FC<Props> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [funcionario, setFuncionario] = useState<Funcionario | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/funcionarios/${id}`)
      .then((response) => response.json())
      .then((data) => setFuncionario(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!funcionario) {
    return null;
  }

  return (
    <>
      <button onClick={onOpen} className={styles.viewAdmin}>
        Visualizar
      </button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent className={styles.modalContent}>
          <ModalHeader className={styles.modalHeader}>Detalhes do funcionário</ModalHeader>
          <ModalCloseButton className={styles.modalCloseButton}/>
          <ModalBody className={styles.modalBody}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input type="text" value={funcionario.name} isReadOnly />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={funcionario.email} isReadOnly />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Aniversário</FormLabel>
              <Input type="text" value={funcionario.aniversario} isReadOnly />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Cargo</FormLabel>
              <Input type="text" value={funcionario.cargo} isReadOnly />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Salário</FormLabel>
              <Input type="number" value={funcionario.salario} isReadOnly />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VisualizarModal;
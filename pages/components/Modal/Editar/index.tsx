import styles from "./editar.module.scss";
import React, { useState, useEffect } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { BsPlusCircleFill } from "react-icons/bs";

interface Funcionario {
  aniversario: string;
  cargo: string;
  email: string;
  id: number;
  name: string;
  salario: number;
}

type Props = {
  id: number;
};

const EditarModal = ({ id }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const [currentFuncionario, setCurrentFuncionario] = useState<Funcionario>({
    aniversario: "",
    cargo: "",
    email: "",
    id: 0,
    name: "",
    salario: 0,
  });

  useEffect(() => {
    fetch(`http://localhost:3000/funcionarios/${id}`)
      .then((response) => response.json())
      .then((data) => setCurrentFuncionario(data))
      .catch((error) => console.log(error));
  }, [id]);

  function handleSave() {
    localStorage.setItem("userEdited", "true");
    window.location.reload();

    fetch(`http://localhost:3000/funcionarios/${currentFuncionario.id}`, {
      method: "PUT",
      body: JSON.stringify(currentFuncionario),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        onClose();
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    const userEdited = localStorage.getItem("userEdited");
    if (userEdited === "true") {
      toast({
        title: "Ação feita com sucesso!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      localStorage.removeItem("userEdited");
    }
  }, []);


  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setCurrentFuncionario((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <button onClick={onOpen} className={styles.editAdmin}>
        Editar
      </button>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
      >
        <ModalOverlay />
        <ModalContent className={styles.modalContent}>
          <ModalHeader className={styles.modalHeader}>Editar Funcionário</ModalHeader>
          <ModalCloseButton className={styles.modalCloseButton}/>
          <ModalBody className={styles.modalBody}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                name="name"
                value={currentFuncionario.name}
                onChange={handleInputChange}
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                value={currentFuncionario.email}
                onChange={handleInputChange}
                type="email"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Aniversário</FormLabel>
              <Input
                name="aniversario"
                value={currentFuncionario.aniversario}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Cargo</FormLabel>
              <Input
                name="cargo"
                value={currentFuncionario.cargo}
                onChange={handleInputChange}
                type="text"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Salário</FormLabel>
              <Input
                name="salario"
                value={currentFuncionario.salario}
                onChange={handleInputChange}
                type="number"
                step="0.01"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancelar</Button>
            <Button colorScheme="blue" ml={3} onClick={handleSave}>
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditarModal;




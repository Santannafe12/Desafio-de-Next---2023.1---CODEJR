import styles from './criar.module.scss'
import React, { useEffect, useState } from "react";
import {
    Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, FormControl, FormLabel, Input, useDisclosure, ModalCloseButton, useToast,
} from "@chakra-ui/react";
import { BsPlusCircleFill } from 'react-icons/bs';

interface Funcionario {
    aniversario: string;
    cargo: string;
    email: string;
    id: number;
    name: string;
    salario: number;
}

const CreateModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();
    const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
    const [newFuncionario, setNewFuncionario] = useState<Funcionario>({
        aniversario: '',
        cargo: '',
        email: '',
        id: 0,
        name: '',
        salario: 0,
    });

    function handleCreate() {
        window.location.reload();
        fetch('http://localhost:3000/funcionarios', {
            method: 'POST',
            body: JSON.stringify(newFuncionario),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setFuncionarios([...funcionarios, data]);
                setNewFuncionario({
                    aniversario: '',
                    cargo: '',
                    email: '',
                    id: 0,
                    name: '',
                    salario: 0,
                });
                toast({
                    title: 'Funcionário criado com sucesso!',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
            })
            .catch((error) => console.log(error));
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setNewFuncionario((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    function handleCreateAndClose() {
        handleCreate();
        onClose();
      }

    return (
        <>
            <button onClick={onOpen} className={styles.nav__titulo_botao}><BsPlusCircleFill className={styles.titulo__icons} />Adicionar Funcionário</button>

            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
                <ModalOverlay />
                <ModalContent className={styles.modalContent}>
                    <ModalHeader className={styles.modalHeader}>Adicionar Funcionário</ModalHeader>
                    <ModalCloseButton className={styles.modalCloseButton} />
                    <ModalBody className={styles.modalBody}>
                        <FormControl>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                name="name"
                                value={newFuncionario.name}
                                onChange={handleInputChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>E-mail</FormLabel>
                            <Input
                                name="email"
                                value={newFuncionario.email}
                                onChange={handleInputChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Aniversário</FormLabel>
                            <Input
                                name="aniversario"
                                value={newFuncionario.aniversario}
                                onChange={handleInputChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Cargo</FormLabel>
                            <Input
                                name="cargo"
                                value={newFuncionario.cargo}
                                onChange={handleInputChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Salário</FormLabel>
                            <Input
                                name="salario"
                                type="number"
                                value={newFuncionario.salario}
                                onChange={handleInputChange} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter className={styles.modalFooter}>
                        <Button onClick={onClose} className={styles.modalButton}>Cancelar</Button>
                        <Button colorScheme="green" onClick={handleCreateAndClose} className={styles.modalButton}>Adicionar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateModal;

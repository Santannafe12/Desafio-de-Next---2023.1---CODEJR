import styles from './deletar.module.scss'
import { useToast } from '@chakra-ui/react'

export default function DeletarModal() {
    const toast = useToast();
    return (
        <>
            <button
                className={styles.deleteAdmin}
                onClick={() => { toast({ title: 'Excluído com sucesso!', status: 'info', duration: 8000, isClosable: true, }); }}> Deletar </button>
        </>
    )
}
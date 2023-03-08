import styles from './criar.module.scss'
import { useToast } from '@chakra-ui/react'

type CriarProps = {
  onClose: () => void;
};

export default function Criar(props: CriarProps) {
  const toast = useToast();

  return (
    <div className={styles.overlay} onClick={props.onClose}>
      <div className={styles.formApp} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalContent}>
          <form>
            <label htmlFor="input1">Nome</label>
            <input type="text" name="input1" placeholder='Digite o nome' />

            <label htmlFor="input2">E-mail</label>
            <input type="text" name="input2" placeholder='Digite o e-mail' />

            <label htmlFor="input3">Aniversário</label>
            <input type="text" name="input3" placeholder='Digite o aniversário' />

            <label htmlFor="input4">Cargo</label>
            <input type="text" name="input4" placeholder='Digite o cargo' />

            <label htmlFor="input5">Salário</label>
            <input type="text" name="input5" placeholder='Digite o salário' />
          </form>
          <div className={styles.buttonCreateApp}>
            <button type="button" onClick={props.onClose} className={styles.cancelButton}>
              Fechar
            </button>
            <button className={styles.createButton} onClick={() => {
              props.onClose();
              toast({
                title: 'Funcionário adicionado com sucesso!',
                status: 'success',
                duration: 8000,
                isClosable: true,
              });
            }}
            >Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  );
};
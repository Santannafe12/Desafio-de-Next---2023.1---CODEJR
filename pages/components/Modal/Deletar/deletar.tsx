import { AiOutlineCheck } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import styles from './excluir.module.scss'

type ExcluirProps = {
  onClose: () => void;
};

export default function Excluir(props: ExcluirProps) {

  return (
    <div className={styles.overlay} onClick={props.onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.content}>
          <p>Tem certeza que deseja excluir o funcionário?</p>
        </div>
        <div className={styles.footer}>
          <button className={styles.cancel} onClick={props.onClose}>Cancelar</button>
          <button className={styles.confirm} onClick={props.onClose}>Excluir</button>
        </div>
      </div>
    </div>
  );
};
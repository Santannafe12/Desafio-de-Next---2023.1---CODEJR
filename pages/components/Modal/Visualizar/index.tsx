import styles from './visualizar.module.scss'

type VisualizarProps = {
  onClose: () => void;
};

export default function Visualizar(props: VisualizarProps) {

  return (
    <div className={styles.overlay} onClick={props.onClose}>
      <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
      <div className={styles.criar__titulo} ><h1 className={styles.formTitle}>Dados do funcionário</h1></div>
      <form className={styles.form} >
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Nome</label>
          <input type="text" className={styles.formInput} placeholder='Nome' />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Email</label>
          <input type="email" className={styles.formInput} placeholder='Endereço de email' />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Aniversário</label>
          <input type="date" className={styles.formInput} placeholder='Aniversário' />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Cargo</label>
          <input type="text" className={styles.formInput} placeholder='Cargo' />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Salário</label>
          <input type="text" className={styles.formInput} placeholder='Salário' />
        </div>
      </form>
    </div>
    </div>
  );
};

import styles from './editar.module.scss'

type EditarProps = {
  onClose: () => void;
};

export default function Editar(props: EditarProps) {

    return(
        <div className={styles.overlay} onClick={props.onClose}>
          <div className={styles.formContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.criar__titulo} ><h1 className={styles.formTitle}>Edite os dados do funcionário</h1></div>
        <form className={styles.form} >
          <div className={styles.formGroup}>
            <label htmlFor="input1" className={styles.formLabel}>Nome</label>
            <input type="text" id="input1" className={styles.formInput} placeholder='Nome' />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="input2" className={styles.formLabel}>Email</label>
            <input type="email" id="input2" className={styles.formInput} placeholder='Endereço de email' />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="input3" className={styles.formLabel}>Aniversário</label>
            <input type="date" id="input3" className={styles.formInput} placeholder='Aniversário' />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="input4" className={styles.formLabel}>Cargo</label>
            <input type="text" id="input4" className={styles.formInput} placeholder='Cargo' />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="input5" className={styles.formLabel}>Salário</label>
            <input type="text" id="input5" className={styles.formInput} placeholder='Salário' />
          </div>
          <div className={styles.Botao__Criar}>
          <button className={styles.cancelButton} onClick={props.onClose}>Cancelar</button>
          <button type="submit" className={styles.formButton} onClick={props.onClose}>Atualizar</button>
          </div>
        </form>
      </div>
      </div>
    );
}
import { useState } from 'react';
import Link from 'next/link';
import Botao from '../Botao';
import styles from './login.module.scss'

export default function Login() {
  const [lembrar, setLembreMe] = useState(false);

  const LembreMe = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLembreMe(event.target.checked);
  };

  return (
    <div className={styles.login}>
        <h1>Fazer Login</h1>
        <div className={styles.login__box}>
        <form>
                <div className={styles.login__principal}>
                <label>Email</label>
                <input type="email"/>
                <label>Senha</label>
                <input type="password"/>
            </div>
            <div className={styles.login__lembrar}>
                <input type="checkbox" checked={lembrar} onChange={LembreMe}/>
                <label>Lembre-me</label>
            </div>
            <div className={styles.login__botao}>
                <Botao texto={'Iniciar Sessão'} href={'/admin'}/>
            </div>
            <div className={styles.login__cadastro}>
                <Link href="/forgot-password"><p className={styles.login__link}>Esqueceu a senha?</p></Link>
                <Link href="/login"><p className={styles.login__link}>Cadastrar-se</p></Link>
            </div>
        </form>
        </div>
    </div>
  );
}


import Login from './components/Login'
import Head from 'next/head'
import styles from '../styles/loginPagina.module.scss'
import Sidebar from './components/Sidebar'

export default function LoginPagina() {
    return (
        <>
            <Sidebar />
            <Head>
                <title>Login</title>
                <meta name="viewport" content="width=device-width" charSet="utf-8" />
            </Head>
            <div className={styles.box__login}>
                <Login />
            </div>
        </>

    )
}
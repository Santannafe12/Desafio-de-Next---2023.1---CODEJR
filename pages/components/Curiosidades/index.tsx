import Image from 'next/image';
import { curiosidadesObjetos } from '../constants';
import styles from './curiosidades.module.scss'


export default function Curiosidades() {
    return (
        <div className={styles.box}>
            {curiosidadesObjetos.map((item, index) => (
                <div className={styles.CuriosidadesApp} key={index}>
                    <div className={styles.CuriosidadesBox}>
                        <p>{item.text}</p>
                        <div className={styles.CuriosidadesSocialMedia}>
                            {item.imageUrl.map((imageUrl, index) => (
                                <Image key={index} src={imageUrl} alt={''} width={70} height={70} quality={100} className={styles.CuriosidadesImage} />
                            ))}
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}


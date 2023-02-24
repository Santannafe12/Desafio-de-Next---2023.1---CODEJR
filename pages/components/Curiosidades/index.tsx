import Image from 'next/image';
import styles from './curiosidades.module.scss'

type CuriosidadesProps = {
    curiosidades: string;
    imagesCuriosidades: string[];
};

export default function Curiosidades({ curiosidades, imagesCuriosidades }: CuriosidadesProps) {
    return (
        <div className={styles.box}>
            <div className={styles.div__texto}><p>{curiosidades}</p></div>
            <div className={styles.socialMedia}>
                <Image src={imagesCuriosidades[0]} alt="Facebook" width={70} height={70} className={styles.image} />
                <Image src={imagesCuriosidades[1]} alt="Twitter" width={70} height={70} className={styles.image} />
                <Image src={imagesCuriosidades[2]} alt="Instagram" width={70} height={70} className={styles.image} />
            </div>
        </div>
    )
}


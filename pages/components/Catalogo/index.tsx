import styles from './catalogo.module.scss'
import Image from 'next/image';

interface BoxProps {
    imageUrl: string;
    text: string;
    text2: string;
}

export default function Catalogo({ imageUrl, text, text2, }: BoxProps ) {
    return (
        <div className={styles.box}>
            <div className={styles.image}>
                <Image src={imageUrl} alt="Image" fill className={styles.imagem_catalogo} quality={100} />
            </div>
            <div className={styles.text}>
                <h1>{text}</h1>
                <p className={styles.alternativo_catalogo}>{text2}</p>
                <div><button className={styles.botao_catalogo}>Catálogo completo</button></div>
            </div>
        </div>
    );
}
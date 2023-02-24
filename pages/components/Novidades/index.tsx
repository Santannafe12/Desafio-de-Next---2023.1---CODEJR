import Image from 'next/image'
import styles from './novidades.module.scss'

type NovidadesProps = {
    imagesNovidades: string[];
    paragrafoNovidades: string[];
    lancamentoNovidades: string[];
}

export default function Novidades({ imagesNovidades, paragrafoNovidades, lancamentoNovidades }: NovidadesProps) {
    return (
        <div>
            <div className={styles.div__Novidades}>
                <div className={styles.div__NovidadesImagens}>
                    <Image src={imagesNovidades[0]} alt={paragrafoNovidades[0]} width={460} height={240} quality={100} className={styles.imagem_redonda} />
                    <div className={styles.div__NovidadesParagrafo}><p>{paragrafoNovidades[0]}</p></div>
                    <div className={styles.div__NovidadesLancamento}><p>{lancamentoNovidades[0]}</p></div>
                </div>
                <div className={styles.div__NovidadesImagens}>
                    <Image src={imagesNovidades[1]} alt={paragrafoNovidades[1]} width={460} height={240} quality={100} className={styles.imagem_redonda} />
                    <div className={styles.div__NovidadesParagrafo}><p>{paragrafoNovidades[1]}</p></div>
                    <div className={styles.div__NovidadesLancamento}><p>{lancamentoNovidades[1]}</p></div>
                </div>
                <div className={styles.div__NovidadesImagens}>
                    <Image src={imagesNovidades[2]} alt={paragrafoNovidades[2]} width={460} height={240} quality={100} className={styles.imagem_redonda} />
                    <div className={styles.div__NovidadesParagrafo}><p>{paragrafoNovidades[2]}</p></div>
                    <div className={styles.div__NovidadesLancamento}><p>{lancamentoNovidades[2]}</p></div>
                </div>
            </div>
        </div>
    );
}
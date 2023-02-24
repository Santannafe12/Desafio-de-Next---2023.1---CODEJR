import Image from 'next/image';
import styles from './destaques.module.scss';

type DestaquesProps = {
    imagesDestaque: string[];
    paragrafo: string[];
    desconto: string[];
    antigoValor: string[];
    novoValor: string[];
};

export default function Destaques({ imagesDestaque, paragrafo, desconto, antigoValor, novoValor }: DestaquesProps) {
    return (
        <div className={styles.div__Destaque}>
            <div className={styles.div__DestaqueImagens}>
                <Image src={imagesDestaque[0]} alt={paragrafo[0]} width={280} height={420} quality={100} className={styles.imagem_redonda} />
                <div className={styles.div__DestaqueParagrafo}><p>{paragrafo[0]}</p></div>
                <div className={styles.div__DestaqueDesconto}>
                    <div className={styles.div__Desconto}><p>-{desconto[0]}</p></div>
                    <div><p className={styles.div__antigoValor}>{antigoValor[0]}</p></div>
                    <div><p>{novoValor[0]}</p></div>
                </div>
            </div>
            <div className={styles.div__DestaqueImagens}>
                <Image src={imagesDestaque[1]} alt={paragrafo[1]} width={280} height={420} quality={100} className={styles.imagem_redonda} />
                <div className={styles.div__DestaqueParagrafo}><p>{paragrafo[1]}</p></div>
                <div className={styles.div__DestaqueDesconto}>
                    <div className={styles.div__Desconto}><p>-{desconto[1]}</p></div>
                    <div><p className={styles.div__antigoValor}>{antigoValor[1]}</p></div>
                    <div><p>{novoValor[1]}</p></div>
                </div>
            </div>
            <div className={styles.div__DestaqueImagens}>
                <Image src={imagesDestaque[2]} alt={paragrafo[2]} width={280} height={420} quality={100} className={styles.imagem_redonda} />
                <div className={styles.div__DestaqueParagrafo}><p>{paragrafo[2]}</p></div>
                <div className={styles.div__DestaqueDesconto}>
                    <div className={styles.div__Desconto}><p>-{desconto[2]}</p></div>
                    <div><p className={styles.div__antigoValor}>{antigoValor[2]}</p></div>
                    <div><p>{novoValor[2]}</p></div>
                </div>
            </div>
            <div className={styles.div__DestaqueImagens}>
                <Image src={imagesDestaque[3]} alt={paragrafo[3]} width={280} height={420} quality={100} className={styles.imagem_redonda} />
                <div className={styles.div__DestaqueParagrafo}><p>{paragrafo[3]}</p></div>
                <div className={styles.div__DestaqueDesconto}>
                    <div className={styles.div__Desconto}><p>-{desconto[3]}</p></div>
                    <div><p className={styles.div__antigoValor}>{antigoValor[3]}</p></div>
                    <div><p>{novoValor[3]}</p></div>
                </div>
            </div>
        </div>
    );
}
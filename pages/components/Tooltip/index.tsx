import Image from 'next/image'
import styles from './tooltip.module.scss'

export default function Tooltip1() {
    return (
            <div className={styles.tooltipApp}>
                <div className={styles.tooltipName}>
                    <p>Nome do jogo</p>
                </div>
                <div className={styles.tooltipInfo}>
                    <p>Lançamento 01/01/2001</p>
                    <span>Windows</span>
                </div>
                <div className={styles.tooltipImage}>
                    <Image src={'/images/diabloo.jpg'} alt={''} width={1920} height={1080} className={styles.imageTooltip} quality={100}/>
                </div>
                <div className={styles.tooltipReviews}>
                    <p>Análise de usuários:</p>
                    <div className={styles.reviewsInfo}>
                        <p className={styles.infoValue}>Positivas</p>
                        <p className={styles.reviewValue}>(200,000 análises)</p>
                    </div>
                </div>
                <div className={styles.tooltipCategories}>
                    <p>Categorias:</p>
                    <div className={styles.categoriesValue}>
                        <p>Sobrevivência</p>
                        <p>Ação</p>
                        <p>Construção</p>
                        <p>Construção</p>
                    </div>
                </div>
                <div className={styles.tooltipFriends}>
                    <p>3 amigos possuem este jogo:</p>
                    <div className={styles.friendsImage}>
                        <Image src={'/images/dst.jpg'} alt={''} width={50} height={50} />
                    </div>
                </div>
            </div>
    )
}
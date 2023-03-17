import Image from 'next/image'
import { indies } from '../constants';
import styles from './tooltip.module.scss'

type Tooltip1Props = {
    name: string;
    releaseDate: string;
    totalReviews: string;
    positiveReviews: string;
    valueReviews: string;
    categories: string[];
    devices: JSX.Element[];
    description: string;
    friends: string[];
}


export default function Tooltip1({ name, releaseDate, totalReviews, positiveReviews, valueReviews, categories, description, devices, friends }: Tooltip1Props) {
    return (
        <div className={styles.tooltipApp}>
            <div className={styles.tooltipName}>
                <p>{name}</p>
            </div>
            <div className={styles.tooltipInfo}>
                <p>{releaseDate}</p>
            </div>
            <div className={styles.tooltipDescription}>
                <p>{description}</p>
            </div>
            <div className={styles.tooltipReviews}>
                <p>Análise de usuários:</p>
                <div className={styles.reviewsInfo}>
                    <p className={styles.infoValue} style={{ color: valueReviews === 'Negativas' ? 'red' : valueReviews === 'Neutras' ? 'yellow' : '#0bb3c9' }}>
                        {valueReviews}
                    </p>
                    <p className={styles.reviewValue}>({totalReviews})</p>
                </div>
            </div>
            <div className={styles.tooltipDevices}>
                    {devices.map(item => (
                    <span>{item}</span>
                    ))}
            </div>            
            <div className={styles.tooltipCategories}>
                <p>Categorias:</p>
                <div className={styles.categoriesValue}>
                    {categories.map(item => (
                    <p>{item}</p>
                    ))}
                </div>
            </div>
            <div className={styles.tooltipFriends}>
                <p>3 amigos possuem este jogo:</p>
                <div className={styles.friendsImage}>
                    {friends.map(item => (
                        <Image className={styles.friendImage} src={item} alt={''} width={40} height={40}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
import Image from 'next/image'
import { displayBestSellers } from '../constants'
import styles from './teste.module.scss'

export default function Teste1() {
    return(
        <div className={styles.displayApp}>
            {displayBestSellers.map(bestSeller => (
                <div className={styles.displayGeneral}>
                    <div><Image src={bestSeller.imageUrl} alt={''} width={200} height={160} quality={100} /></div>
                    <div className={styles.displayInfo}>
                        <div>
                            <p>{bestSeller.name}</p>
                        </div>
                        <div>
                            <p>-40%</p>
                            <p>R$ 100,00</p>
                            <p>{bestSeller.price}</p>
                        </div>
                        <div>
                            {bestSeller.devices.map(device => (
                                <span>{device}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
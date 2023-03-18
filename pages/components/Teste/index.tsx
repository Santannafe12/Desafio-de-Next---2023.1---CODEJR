import Image from 'next/image'
import { useEffect, useState } from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { carouselImage } from '../constants';
import styles from './teste.module.scss'

export default function Teste1() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  let timeout: any = null

  useEffect(() => {
    timeout = autoPlay && setTimeout(() => { slideRight() }, 850000)
  })

  const slideRight = () => {
    setCurrent(current === carouselImage.length - 1 ? 0 : current + 1)
  }

  const slideLeft = () => {
    setCurrent(current === 0 ? carouselImage.length - 1 : current - 1)
  }

  return (
    <div className={styles.carouselApp}
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeout)
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}>
      <div className={styles.carousel}>
        {carouselImage.map((item, index) => (
          <div
            key={index}
            className={index == current
              ? `${styles.carouselCard} ${styles.carouselCardActive}`
              : `${styles.carouselCard}`
            }
          >
            <Image src={item.imageUrl} alt={''} width={2560} height={1440} className={styles.carouselImg} quality={100} />
            <div className={styles.carouselInfo}>
              <p>{item.releaseDate}</p>
              <div className={styles.carouselItensInfo}>
                <p>{item.info1}</p>
                <p>{item.info2}</p>
                <p>{item.info3}</p>
              </div>
              <p>{item.name}</p>
              <p className={styles.carouselDescription}>{item.description}</p>
              <p className={styles.carouselPriceText}>{item.priceText}</p>
              <div className={styles.carouselButtons}>
                <button className={styles.buttonPurchase}>{item.price}</button>
                <button className={styles.buttonWishlist}>{item.wishlist}</button>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.carouselArrowLeft}>
          <AiOutlineArrowLeft onClick={slideLeft} />
        </div>
        <div className={styles.carouselArrowRight}>
          <AiOutlineArrowRight onClick={slideRight} />
        </div>
        <div className={styles.carouselPagination}>
          {carouselImage.map((item, index) => (
            <div
              key={index}
              className={index == current
                ? `${styles.carouselDots} ${styles.carouselDotsActive}`
                : `${styles.carouselDots}`
              }
              onClick={() => setCurrent(index)}
            >
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

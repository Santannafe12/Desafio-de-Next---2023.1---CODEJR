import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import { applyDiscount, carouselImage } from '../constants';
import styles from './teste.module.scss'

export default function Teste1() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    timeoutRef.current = autoPlay && setTimeout(() => { slideRight() }, 8000);
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [autoPlay, current]);

  const slideRight = () => {
    setCurrent(current === carouselImage.length - 1 ? 0 : current + 1)
  }

  const slideLeft = () => {
    setCurrent(current === 0 ? carouselImage.length - 1 : current - 1)
  }

  return (
    <div className={styles.carouselApp}>
      <div className={styles.carousel}>
        {carouselImage.map((item, index) => (
          <div
            onMouseEnter={() => {
              setAutoPlay(false);
              clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={() => {
              setAutoPlay(true);
              clearTimeout(timeoutRef.current);
            }}
            key={index}
            className={index == current
              ? `${styles.carouselCard} ${styles.carouselCardActive}`
              : `${styles.carouselCard}`
            }
          >
            <Image src={item.imageUrl} alt={''} width={2560} height={1440} className={styles.carouselImg} quality={100} />
            <div className={styles.carouselInfo}>
              {item.logoUrl !== '' ?
                <div className={styles.carouselLogo}>
                  <Image src={item.logoUrl} alt={''} width={600} height={160} quality={100} className={styles.carouselLogoImg} />
                </div>
                :
                <></>
              }
              <div className={styles.carouselReleaseDate}>
                <p>{item.releaseDate}</p>
              </div>

              <div className={styles.carouselItensInfo}>
                <p>{item.info1}</p>
              </div>

              <div className={styles.carouselDescription}>
                <p>{item.description}</p>
              </div>

              <div className={styles.carouselPrice}>
                <p className={styles.carouselPriceText}>{item.priceText}</p>
                {item.discount !== '' ?
                  <div className={styles.carouselDiscount}>
                    <p className={styles.oldPrice}>{item.price}</p>
                    <p className={`${styles.carouselPriceValue} ${styles.discountedPrice}`}>{applyDiscount(item.price, item.discount)}</p>
                  </div>
                  :
                  <p className={styles.carouselPriceValue}>{item.price}</p>
                }
              </div>

              <div className={styles.carouselButtons}>
                <button className={styles.buttonPurchase}>{item.priceButton}</button>
                <button className={styles.buttonWishlist}>{item.wishlist}</button>
              </div>

            </div>
          </div>
        ))}
      </div>
      <div className={styles.carouselPaginationApp}>
        {carouselImage.map((item, index) => (
          <div
            key={index}
            className={index == current
              ? `${styles.carouselPaginationImage} ${styles.carouselPaginationImageActive}`
              : `${styles.carouselPaginationImage}`
            }
            onClick={() => {
              setCurrent(index); clearTimeout(timeoutRef.current);
            }}
          >
            <div className={styles.paginationImg}>
              <Image src={item.paginationUrl} alt={''} width={1440} height={2160} className={styles.paginationImage} />
            </div>
            <div className={styles.paginationName}>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

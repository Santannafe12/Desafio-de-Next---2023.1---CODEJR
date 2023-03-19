import Image from 'next/image';
import styles from './carousel2.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../Utils';
import { useRef, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { applyDiscount, carousel } from '../constants';
import { AiOutlineRight } from 'react-icons/ai';

export default function CarouselMainSlider() {
  const sliderRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToNext = () => {
    sliderRef?.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef?.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: false,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.AppDestaques}>
      <div className={styles.DestaquesTop}>
        <div>
          <h1>Jogos em destaques</h1>
          <AiOutlineRight className={styles.DestaquesTopIcon} />
        </div>
        <div className={styles.arrowButtonsDestaques}>
          < IoIosArrowDropleftCircle className={styles.prevButtonIconDestaques} onClick={goToPrev} />
          < IoIosArrowDroprightCircle className={styles.nextButtonIconDestaques} onClick={goToNext} />
        </div>
      </div>
      <Slider {...settings} ref={sliderRef} >
        {carousel.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.cardTopDestaques}>
              <Image src={item.imageUrl} alt={''} width={1440} height={2160} className={styles.DestaquesImg} quality={100} />
            </div>
            <div className={styles.gameInformationDestaques}>
              <h5>{item.name}</h5>
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
        ))}
      </Slider>
    </div>
  );
}
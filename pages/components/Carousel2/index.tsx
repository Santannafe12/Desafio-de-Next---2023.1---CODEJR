import Image from 'next/image';
import styles from './carousel2.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from '../Utils';
import { useRef, useState } from 'react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { carouselObjects, destaqueDescontos } from '../constants';
import { AiOutlineRight } from 'react-icons/ai';

export default function Destaques() {
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
        <AiOutlineRight className={styles.DestaquesTopIcon}/>
        </div>
        <div className={styles.arrowButtonsDestaques}>
          < IoIosArrowDropleftCircle className={styles.prevButtonIconDestaques} onClick={goToPrev} />
          < IoIosArrowDroprightCircle className={styles.nextButtonIconDestaques} onClick={goToNext} />
        </div>
      </div>
      <Slider {...settings} ref={sliderRef} >
        {carouselObjects.map(item => (
          <div className={styles.card}>
            <div className={styles.cardTopDestaques}>
              <Image src={item.imageUrl} alt={''} width={1440} height={2160} className={styles.DestaquesImg} quality={100} />
            </div>
            <div className={styles.gameInformationDestaques}>
              <p>{item.description}</p>
            </div>
            <div className={styles.carouselPurchaseTop}>
              <p>{item.price}</p>
              <div className={styles.carouselPurchaseButton}>
                <button className={styles.carouselBuyNow}>{item.purchaseButton}</button>
                <button className={styles.carouselWishlist}>+ Lista de desejos</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
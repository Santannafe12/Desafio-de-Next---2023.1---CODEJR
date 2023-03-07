import Slider from 'react-slick';
import React, { useRef, useState } from 'react';
import { BsFillCalendarFill } from 'react-icons/bs';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import Image from 'next/image';
import styles from './aguardados.module.scss';
import { NextArrow, PrevArrow } from '../Utils';
import { jogosAguardados } from '../constants';
import { AiOutlineRight } from 'react-icons/ai';

export default function Aguardados() {
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
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
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
    <div className={styles.AppAguardados}>
      <div className={styles.upperAguardados}>
        <h1>JOGOS MAIS AGUARDADOS</h1>
        <h6>ANO DE 2023</h6>
      </div>
      <div className={styles.AguardadosTop}>
        <div>
          <h1>Exibir coleção completa</h1>
          <AiOutlineRight className={styles.AguardadosTopIcon} />
        </div>
        <div className={styles.arrowButtonsAguardados}>
          < IoIosArrowDropleftCircle className={styles.prevButtonIconAguardados} onClick={goToPrev} />
          < IoIosArrowDroprightCircle className={styles.nextButtonIconAguardados} onClick={goToNext} />
        </div>
      </div>

      <Slider {...settings} ref={sliderRef}>
        {jogosAguardados.map(item => (
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <Image src={item.imageUrl} alt="" width={1920} height={1080} className={styles.AguardadosImg} quality={100} />
            </div>
            <div className={styles.cardTitle}><h1>{item.nomePop}</h1></div>
            <div className={styles.cardMiddle}>
              <p className={styles.cardPrice}>{item.price}</p>
              <div>
                <BsFillCalendarFill className={styles.cardDate} />
                <p>{item.releaseDate}</p>
              </div>
            </div>
            <div className={styles.cardMiddleBottom}>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.cardBottom}>
              <p>{item.developer}</p>
              <div className={styles.cardBottomIcons}>
                {item.devices.map(device => (
                  <span>{device}</span>
                ))}
              </div>
            </div>
            <div className={styles.cardCategories}>
              {item.categories.map(categorie => (
                <p>{categorie}</p>
              ))}
            </div>
            <div className={styles.cardAguardadosWishlist}><button>+ Lista de desejos</button></div>
          </div>
        ))}
      </Slider>
    </div>
  )
} 
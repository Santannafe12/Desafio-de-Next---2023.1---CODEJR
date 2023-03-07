import Slider from "react-slick";
import React, { useRef, useState } from 'react';
import { NextArrow, PrevArrow } from "../Utils";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import Image from 'next/image';
import styles from './populares.module.scss';
import { novidadesPopulares } from "../constants";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

export default function Populares() {
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
    <div className={styles.NovidadesApp}>
      <div className={styles.PopularesTop}>
        <div>
        <h1>Populares entre jogadores</h1>
        <AiOutlineRight className={styles.PopularesTopIcon}/>
        </div>
        <div className={styles.arrowButtonsPopulares}>
          < IoIosArrowDropleftCircle className={styles.prevButtonIconPopulares} onClick={goToPrev} />
          < IoIosArrowDroprightCircle className={styles.nextButtonIconPopulares} onClick={goToNext} />
        </div>
      </div>
      <Slider {...settings} ref={sliderRef} >
        {novidadesPopulares.map(item => (
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <Image src={item.imageUrl} alt={item.alt} width={1920} height={1080} className={styles.PopularesImg} quality={100} />
            </div>
            <div className={styles.cardTitle}><h1>{item.nomePop}</h1></div>
            <div className={styles.cardMiddle}>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.gameInformationPop}>
              <p>{item.gameInformation}</p>
            </div>
            <div className={styles.gameBox}>
              <div className={styles.gameName}>{item.nomePop}</div>
              <div className={styles.gameInfo}>
                <div className={styles.gameText}>{item.price}</div>
                <button className={styles.gameButton}><FaShoppingCart/> +Carrinho</button>
              </div>
            </div>
          </div>
        ))
        }
      </Slider >
    </div >
  )
}

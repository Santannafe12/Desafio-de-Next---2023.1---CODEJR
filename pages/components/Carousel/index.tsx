import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from './carousel.module.scss';
import { carouselObjects, carouselText, carouselPrice, purchaseButton } from "../constants";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../Utils";
import Carousel2 from "../Carousel2";

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
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
                  dots: true,
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
  
  const [currentImage, setCurrentImage] = useState(0);

  function handleIndicatorClick(index: number) {
    setCurrentImage(index);
  };

  useEffect(function () {
    const intervalId = setInterval(function () {
      setCurrentImage((currentImage + 1) % images.length);
    }, 8000);

    return function () {
      clearInterval(intervalId);
    };
  }, [currentImage]);

  return (
    <div className={styles.carouselApp}>   
    <Carousel2/>
    <div className={styles.carousel__Box}>
      <div className={styles.carousel}>
        <div className={styles.imageContainer}>
          <Image src={images[currentImage]} alt={"Imagem do carousel"} fill quality={100} className={styles.imagem_redonda} />
          <div className={styles.carousel__text}>
            <div className={styles.carouselTextTop}>
              <h1></h1>
              <p>{carouselText[currentImage]}</p>
            </div>
            <div className={styles.carouselPurchaseTop}>
              <p>{carouselPrice[currentImage]}</p>
              <div className={styles.carouselPurchaseButton}>
                <button className={styles.carouselBuyNow}>{purchaseButton[currentImage]}</button>
                <button className={styles.carouselWishlist}>+ Lista de desejos</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.indicatorsImage}>
          {images.map((image, index,) => (
            <Image key={index} className={`${styles.indicatorImage} ${currentImage === index ? styles.activeIndicatorImage : ""}`} onClick={() => handleIndicatorClick(index)} src={image} alt={''} width={250} height={160} quality={100} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
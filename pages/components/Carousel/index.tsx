import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from './carousel.module.scss';
import { carouselText, carouselPrice, purchaseButton, carouselTitle, carouselWishlist } from "../constants";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../Utils";
import CarouselMainSlider from "../CarouselMainSlider";

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
      slidesToShow: 5,
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
                  slidesToShow: 5,
                  slidesToScroll: 5,
                  infinite: false,
                  dots: false,
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
    <CarouselMainSlider/>
    <div className={styles.carousel__Box}>
      <div className={styles.carousel}>
        <div className={styles.imageContainer}>
          <Image src={images[currentImage]} 
          alt={"Imagem do carousel"} 
          fill 
          quality={100} 
          sizes=" 100vw, 50vw, 33.3vw" 
          className={styles.imagem_redonda} 
          priority={true}/>
          <div className={styles.carousel__text}>
            <div className={styles.carouselTextTop}>
              <h1>{carouselTitle[currentImage]}</h1>
              <p>{carouselText[currentImage]}</p>
            </div>
            <div className={styles.carouselPurchaseTop}>
              <p>{carouselPrice[currentImage]}</p>
              <div className={styles.carouselPurchaseButton}>
                <button className={styles.carouselBuyNow}>{purchaseButton[currentImage]}</button>
                <button className={styles.carouselWishlist}>{carouselWishlist[currentImage]}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className={styles.indicatorsImage}>
          {images.map((image, index,) => (
            <><Image className={`${styles.indicatorImage} ${currentImage === index ? styles.activeIndicatorImage : ""}`} onClick={() => handleIndicatorClick(index)} src={image} alt={''} width={200} height={120} quality={100} />
            <button onClick={() => handleIndicatorClick(index)} className={styles.indicatorButton}></button></>
          ))}
        </div>
    </div>
    </div>
  );
};
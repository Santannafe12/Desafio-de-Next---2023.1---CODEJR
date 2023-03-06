import { useState, useEffect } from "react";
import Image from "next/image";
import styles from './carousel.module.scss'

type Props = {
  images: string[];
};

export default function Carousel({ images }: Props) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleIndicatorClick(index: number) {
    setCurrentImage(index);
  };

  useEffect(function () {
    const intervalId = setInterval(function () {
      setCurrentImage((currentImage + 1) % images.length);
    }, 4000);

    return function () {
      clearInterval(intervalId);
    };
  }, [currentImage]);

  return (
    <div className={styles.carousel__Box}>
      <div className={styles.carousel}>
        <div className={styles.imageContainer}>
          <Image src={images[currentImage]} alt={"Imagem do carousel"} fill quality={100} className={styles.imagem_redonda} />
        </div>
        <div className={styles.controls__Botao}>
          {images.map((image, index) => (
            <button key={index} className={`${styles.indicatorBotao} ${currentImage === index ? styles.activeIndicatorBotao : ""}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles.indicatorsImage}>
          {images.map((image, index,) => (
            <Image key={index} className={`${styles.indicatorImage} ${currentImage === index ? styles.activeIndicatorImage : ""}`} onClick={() => handleIndicatorClick(index)} src={image} alt={''} width={190} height={110} quality={100} />
          ))}
        </div>
      </div>
    </div>
  );
};
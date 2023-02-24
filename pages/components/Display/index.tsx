import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './display.module.scss'

interface ImageGalleryProps {
  images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(function() {
    const intervalId = setInterval(function() {
      setCurrentImage((currentImage + 1) % images.length); }, 4000);

    return function() {
      clearInterval(intervalId);
    }; }, [currentImage]);

    function handleIndicatorClick(index: number) {
      setCurrentImage(index);
    };
  
  return (
    <div className={styles.imageGallery}>
      <div className={styles.indicators}>
      {images.slice(0, 5).map((image, index) => (
        <Image key={index} className={`${styles.indicator} ${
          currentImage === index ? styles.activeIndicator : "" }`} onClick={() => handleIndicatorClick(index)} src={image}  alt={''} width={190} height={110} quality={100} />
      ))}
      </div>
    </div>
  );
};
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/slider.module.scss'


type SliderProps = {
    images: string[];
  };
  
  const Slider = ({ images }: SliderProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const handlePrevClick = () => {
      setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
    };
  
    const handleNextClick = () => {
      setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
    };
  
    return (
      <div className={styles.slider}>
        {/* <motion.button
          className={styles.button}
          onClick={handlePrevClick}
          whileTap={{ scale: 0.9 }}
        >
          &lt;
        </motion.button>
        <motion.button
          className={styles.button}
          onClick={handleNextClick}
          whileTap={{ scale: 0.9 }}
        >
          &gt;
        </motion.button> */}
        <motion.div
          className={styles.images}
          style={{ width: `${images.length * 100}%`, transform: `translateX(-${activeIndex * (100 / images.length)}%)` }}
          transition={{ duration: 0.5 }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.imageWrapper} style={{ width: `${100 / images.length}%` }}>
              <Image src={image} fill alt={''} className={styles.imagemslider}/>
            </div>
          ))}
        </motion.div>
      </div>
    );
  };
  
  export default Slider;
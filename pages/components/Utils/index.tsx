import styles from './utils.module.scss'
import { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function NextArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.nextArrow}`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }
  
  export function PrevArrow(props: CustomArrowProps) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ${styles.prevArrow}`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }
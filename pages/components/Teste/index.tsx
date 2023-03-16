import Image from 'next/image'
import { displayBestSellers } from '../constants'
import styles from './teste.module.scss'

  
export default function Teste() {
    return (
      <div className={styles.container}>
        <img src={'/images/diabloo.jpg'} alt={''} className={styles.image} />
        <div className={styles.tab}>Hover over me!</div>
      </div>
    );
  };
  

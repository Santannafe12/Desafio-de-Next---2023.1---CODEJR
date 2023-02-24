import styles from './categorias.module.scss'
import Image from 'next/image';

type BoxProps = {
    image: string;
    text: string;
  };
  
  function Box(props: BoxProps) {
    return (
      <div className={styles.box}>
        <div className={styles.container}>
            <div className={styles.image}>
              <Image src={props.image} alt="box" fill className={styles.image_categorias}/>
            </div>
            <p className={styles.text}>{props.text}</p>
        </div>
      </div>
    );
  }
  
  type BoxContainerProps = {
    boxes: BoxProps[];
  };
  
  function BoxContainer(props: BoxContainerProps) {
    return (
      <div className={styles.boxContainer}>
        {props.boxes.map((box, index) => (
          <Box key={index} image={box.image} text={box.text} />
        ))}
      </div>
    );
  }
  
  export default BoxContainer;
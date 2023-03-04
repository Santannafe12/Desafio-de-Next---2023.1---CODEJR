import styles from './contato.module.scss'
import { AiOutlineMail, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

type SocialBoxProps = {
    twitter: string;
    email: string;
    instagram: string;
    facebook: string;
  };
  
  const SocialBox: React.FC<SocialBoxProps> = ({
    twitter,
    email,
    instagram,
    facebook,
  }) => {
    return (
      <div className={styles.socialBox}>
        <div className={styles.socialItem}>
        <AiFillTwitterCircle className={styles.icon} />
          <span>Twitter</span>
          <p>{twitter}</p>
        </div>
        <div className={styles.socialItem}>
        <AiOutlineMail className={styles.icon} />
          <span>Email</span>
          <p>{email}</p>
        </div>
        <div className={styles.socialItem}>
        <AiFillInstagram className={styles.icon} />
          <span>Instagram</span>
          <p>{instagram}</p>
        </div>
        <div className={styles.socialItem}>
        <AiFillFacebook className={styles.icon} />
          <span>Facebook</span>
          <p>{facebook}</p>
        </div>
      </div>
    );
  };
  
  export default SocialBox;
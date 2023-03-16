import styles from './contato.module.scss'
import { AiOutlineMail, AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import Image from 'next/image';

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
        <Image src="/images/icons/twitter.png" alt="Twitter" width={80} height={80} className={styles.icon} />
        <span>Twitter</span>
        <p>{twitter}</p>
      </div>
      <div className={styles.socialItem}>
        <Image src="/images/icons/gmail.png" alt="Instagram" width={80} height={80} className={styles.icon} />
        <span>Email</span>
        <p>{email}</p>
      </div>
      <div className={styles.socialItem}>
        <Image src="/images/icons/instagram_box.png" alt="Instagram" width={80} height={80} className={styles.icon} />
        <span>Instagram</span>
        <p>{instagram}</p>
      </div>
      <div className={styles.socialItem}>
        <Image src="/images/icons/facebook.png" alt="Facebook" width={80} height={80} className={styles.icon} />
        <span>Facebook</span>
        <p>{facebook}</p>
      </div>
    </div>
  );
};

export default SocialBox;
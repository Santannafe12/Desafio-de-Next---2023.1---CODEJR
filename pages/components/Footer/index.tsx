import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section__padding}>
        <div className={styles.footer_links}>
          <div className={styles.footer__links_div}>
            <h4>Recursos</h4>
            <Link href={''} className={styles.footer__links_next}><p>Lojas Físicas</p></Link>
            <Link href={''} className={styles.footer__links_next}><p>Apoie Nossa Loja</p></Link>
            <Link href={''} className={styles.footer__links_next}><p>Marcas Registradas</p></Link>
          </div>
          <div className={styles.footer__links_div}>
            <h4>Links úteis</h4>
            <Link href={''} className={styles.footer__links_next}><p>Home</p></Link>
            <Link href={''} className={styles.footer__links_next}><p>Contato</p></Link>
            <Link href={''} className={styles.footer__links_next}><p>Login</p></Link>
          </div>
          <div className={styles.footer__links_div}>
            <h4>Nosso catálogo</h4>
            <Link href={''} className={styles.footer__links_next}><p>Exibir Todos</p></Link>
          </div>
          <div className={styles.footer__links_div}>
            <h4>Nossas redes</h4>
            <div className={styles.socialmedia}>
              <p><Image src={'/images/youtube.png'} alt={'youtube'} width={35} height={35} quality={100} className={styles.footer__imagem}/></p>
              <p><Image src={'/images/facebook.png'} alt={'facebook'} width={35} height={35} quality={100} className={styles.footer__imagem}/></p>
              <p><Image src={'/images/twitter.png'} alt={'twitter'} width={35} height={35} quality={100} className={styles.footer__imagem}/></p>
              <p><Image src={'/images/instagram.png'} alt={'instagram'} width={35} height={35} quality={100} className={styles.footer__imagem}/></p>
            </div>
          </div>
        </div>
      <hr></hr>
      <div className={styles.footer__below}>
        <div className={styles.footer__copyright}>
          <p>
             © 2023, Games Emporium, Inc. Todos os direitos reservados. Games Emporium.
          </p>
        </div>
        <div className={styles.footer__below_links}>
          <Link href={''} className={styles.footer__links_next}><div><p>Termos de Serviço</p></div></Link>
          <Link href={''} className={styles.footer__links_next}><div><p>Política de Privacidade</p></div></Link>
          <Link href={''} className={styles.footer__links_next}><div><p>Política de Reembolso da Loja</p></div></Link>
          <Link href={''} className={styles.footer__links_next}><div><p>Política de Cookies</p></div></Link>
        </div>
      </div>
      </div>
    </footer>
  );
};


import Link from 'next/link';
import styles from './botao.module.scss'

interface BotaoProps {
  texto: string;
  href: string;
}

export default function Botao(props: BotaoProps) {
  const { texto, href } = props;

  return (
    <Link href={href}>
        <button className={styles.botao}>{texto}</button>
    </Link>
  );
}


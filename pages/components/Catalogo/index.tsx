import React from 'react';
import styles from './catalogo.module.scss';

interface Props {
  imageUrl: string;
  text: string;
}

const Catalogo: React.FC<Props> = ({ imageUrl, text }) => {
  return (
    <div className={styles.AppCatalogo}>
      <div className={styles.TextCatalogo}>
        <h1>Explore nosso catálogo!</h1>
        <p>Pesquise por gênero, características, preço e muito mais para encontrar seu próximo jogo favorito.</p>
        <button>Catálogo Completo</button>
      </div>
    </div>
  );
};

export default Catalogo;
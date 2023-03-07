import React from 'react';
import styles from './catalogo.module.scss';

export default function Catalogo() {
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

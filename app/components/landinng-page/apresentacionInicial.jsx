import React from 'react';
import stylesIndex from '../../../src/Sass/index.module.sass';

export function ApresentacionInicial() {
  return (
    <section className={stylesIndex.main__apresentacao}>
      <div className={stylesIndex.apresentacao__informacoes}>
        <h1 className={stylesIndex.main__h1}>
          <span className={stylesIndex.h1__span}>Control</span>
          {' '}
          your Money, Achieve your
          {' '}
          <span className={stylesIndex.h1__span}>Dreams</span>
          , Live free
          <span className={stylesIndex.h1__span}>!</span>
        </h1>
        <p
          className={stylesIndex.informacoes__p}
        >
          Explore, enjoy and achieve your financial freedom.
          Transform your dreams and goals
          finances into reality with Gedf.
        </p>

        <button className={stylesIndex.main__button}>Start My Financial Freedom</button>
      </div>

      <img className={stylesIndex.main__img} src="/img/Screenshot 2024-07-20 110005.png" alt="Image de apresentação" />
    </section>
  );
}

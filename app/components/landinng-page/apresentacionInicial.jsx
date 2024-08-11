import React from 'react';
import stylesIndex from '../../../src/Sass/index.module.sass';
import useStringParts from '../../../hooks/useStringParts';

export function ApresentacionInicial({ str, description, textButton, alt }) {
  const stringParts = useStringParts(props.str) || [];
  const selectedIcon = '/img/Screenshot 2024-07-20 110005.png';

  const combinedString = `${stringParts.part1 || ''} ${stringParts.part2 || ''} ${stringParts.part3 || ''} ${stringParts.part4 || ''} ${stringParts.part6 || ''} ${stringParts.part7 || ''}`;
  return (
    <section className={stylesIndex.main__apresentacao}>
      <div className={stylesIndex.apresentacao__informacoes}>
        <h1 className={stylesIndex.main__h1}>
          <span className={stylesIndex.h1__span}> {stringParts.part0}</span>
           {combinedString}
          <span className={stylesIndex.h1__span}> {stringParts.part4} </span>
          {` ${stringParts.part6} ${stringParts.part7}`}
          <span className={stylesIndex.h1__span}>!</span>
        </h1>
        <p
          className={stylesIndex.informacoes__p}
        >
          {description}
        </p>

        <button className={stylesIndex.main__button}> {textButton} </button>
      </div>

      <img className={stylesIndex.main__img} src={selectedIcon} alt={props.alt} />
    </section>
  );
}

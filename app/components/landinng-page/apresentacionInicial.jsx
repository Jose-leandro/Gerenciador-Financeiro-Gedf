import React from 'react';
import stylesIndex from '../../../src/Sass/index.module.sass';
import useStringParts from '../../../hooks/useStringParts';

export function ApresentacionInicial(  {props}  ) {
      const stringParts = useStringParts(props.str, false) || [];
  return (
    <section className={stylesIndex.main__apresentacao}>
      <div className={stylesIndex.apresentacao__informacoes}>
        <h1 className={stylesIndex.main__h1}>
          <span>{stringParts.part0}</span>
          {' '}
          {stringParts.part1 + stringParts.part2 + stringParts.part3 + stringParts.part4}
          {' '}
          <span> {stringParts.part5} </span>
          {stringParts.part6 + stringParts.part7}
          <span>!</span>
        </h1>
        <p
          className={stylesIndex.informacoes__p}
        >
          {props.description}
        </p>

        <button className={stylesIndex.main__button}> {props.textButton} </button>
      </div>

      <img className={stylesIndex.main__img} src="/img/Screenshot 2024-07-20 110005.png" alt={props.alt} />
    </section>
  );
}

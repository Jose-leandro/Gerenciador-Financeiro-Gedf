import React from 'react';
import stylesIndex from '../../../src/Sass/index.module.sass';
import useStringParts from '../../../hooks/useStringParts';
import Image from 'next/image';

export function ApresentacionInicial({ dataInformationApresentacion }) {
  const { str, description, textButton, alt } = dataInformationApresentacion;
  // console.log(str)
  const stringParts = useStringParts(str) || [];
  // console.log(stringParts)
  // console.log(stringParts.part1)
  const selectedIcon = '/img/Screenshot 2024-07-20 110005.png';

  const combinedString = `${stringParts.part1 || ''} ${stringParts.part2 || ''} ${stringParts.part3 || ''}`;
  return (
    <section className={stylesIndex.main__apresentacao}>
      <div className={stylesIndex.apresentacao__informacoes}>
        <h1 className={stylesIndex.main__h1}>
           {stringParts.part0 + " "}
          <span className={stylesIndex.h1__span}> {combinedString}</span>
          {` ${stringParts.part4} ${stringParts.part5}`}
          <span className={stylesIndex.h1__span}> {stringParts.part6 + " " + stringParts.part7} </span>
          <span className={stylesIndex.h1__span}>!</span>
        </h1>
        <p
          className={stylesIndex.informacoes__p}
        >
          {description}
        </p>

        <button className={stylesIndex.main__button}> {textButton} </button>
      </div>

      <Image className={stylesIndex.main__img} src={selectedIcon} alt={alt}  width={1000} height={600} />
    </section>
  );
}

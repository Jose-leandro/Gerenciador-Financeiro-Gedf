import React from "react";
import stylesIndex from '../../../src/Sass/index.module.sass';

export function CardComponent({ informationCardValue }) {
  console.log(informationCardValue)
  if (!informationCardValue) {
    return null; 
  }

  const { imgFunct, titleFunct, textFunct } = informationCardValue;
  const isCardFuncionalidades = informationCardValue === 'cardFuncionalidades';
  console.log(isCardFuncionalidades)

  return (
    <div className={isCardFuncionalidades ? stylesIndex.contener__gastos : stylesIndex.contener__gedf}>
      <div className={isCardFuncionalidades ? stylesIndex.gastos__titulos : stylesIndex.gedf__titulo}>
        <img src={`/img/${imgFunct}`} className={stylesIndex.titulos__img} alt={titleFunct} />
        {isCardFuncionalidades ? (
          <h3 className={stylesIndex.gastos__h3}>{titleFunct}</h3>
        ) : (
          <h5 className={stylesIndex.titulo__h5}>O que é gedf</h5>
        )}
      </div>
      <p className={isCardFuncionalidades ? stylesIndex.gastos__p : stylesIndex.gedf__p}>{textFunct}</p>
    </div>
  );
}

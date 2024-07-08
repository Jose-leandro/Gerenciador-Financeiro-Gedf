import React, { useState } from "react";
import stylesIndex from '../../../src/Sass/index.module.sass';

export function CardComponent({ informationCardValue }) {
  const [wichiCardComponent, setWichiCardComponent] = useState(false);
  
    console.log(informationCardValue)
  if (!informationCardValue) {
    return null; 
  }

  const { imgFunct, titleFunct, textFunct } = informationCardValue;

  return (
    <div className={
      stylesIndex.contener__gastos
      }>
      <div className={stylesIndex.gastos__titulos}>
        <img src={`/img/${imgFunct}`} className={stylesIndex.titulos__img} />
        <h3 className={stylesIndex.gastos__h3}>{titleFunct}</h3>
      </div>
      <p className={stylesIndex.gastos__p}>{textFunct}</p>
    </div>
  );
}

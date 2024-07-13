import React from 'react';
import stylesIndex from '../../../src/Sass/index.module.sass';

export function CardComponent({ cardFuncionalidades, cardQuestions }) {
  if (!cardFuncionalidades && !cardQuestions) {
    return null;
  }

  const renderCard = (cardData, containerStyle, tituloStyle, titleTag, titleText) => {
    const { imgFunct, titleFunct, textFunct } = cardData;

    return (
      <div className={containerStyle}>
        <div className={tituloStyle}>
          <img src={`/img/${imgFunct}`} className={stylesIndex.titulos__img} alt={titleFunct} />
          {React.createElement(titleTag, { className: stylesIndex.titulo__h3 }, titleFunct || titleText)}
        </div>
        <p className={stylesIndex.texto}>{textFunct}</p>
      </div>
    );
  };

  return (
    <>
      {cardFuncionalidades
       && renderCard(
         cardFuncionalidades,
         stylesIndex.contener__gastos,
         stylesIndex.gastos__titulos,
         'h3',
       )}

      {cardQuestions
      && renderCard(
        cardQuestions,
        stylesIndex.contener__gedf,
        stylesIndex.gedf__titulo,
        'h5',
        'O que é gedf',
      )}
    </>
  );
}

import React from 'react';
import stylesIndex from '../../../src/Sass/index.module.sass';

export function CardComponent({ cardFuncionalidades, cardQuestions }) {
  if (!cardFuncionalidades && !cardQuestions) {
    return null;
  }

  const renderCard = (cardData, containerStyle, tituloStyle, titleTag, isQuestion) => {
    console.log(isQuestion)
    console.log(cardData)
    const { imgFunct, titleFunct, textFunct } = cardData;
    const TitleComponent = titleTag || 'h3';

    return (
      <div className={isQuestion ? stylesIndex.contener__gastos_div : containerStyle}>
        <div className={tituloStyle}>
          {imgFunct && (
            <img
              src={`/img/${imgFunct}`}
              className={stylesIndex.titulos__img}
              alt={titleFunct}
            />
          )}
          <TitleComponent className={stylesIndex.titulo__h3}>
            {titleFunct}
          </TitleComponent>
        </div>
        <p className={isQuestion ? stylesIndex.titulo__p : ''}>{textFunct}</p>
      </div>
    );
  };

  return (
    <>
      {cardFuncionalidades && renderCard(
        cardFuncionalidades,
        stylesIndex.contener__gastos,
        stylesIndex.gastos__titulos,
        'h3',
        true,
      )}

      {cardQuestions && renderCard(
        cardQuestions,
        stylesIndex.contener__gedf,
        stylesIndex.gedf__titulo,
        'h5',
        false,
      )}
    </>
  );
}

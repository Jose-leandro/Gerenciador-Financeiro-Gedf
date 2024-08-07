import React from 'react';
import stylesIndex from '../../../src/Sass/index.module.sass';

export function CardComponent({ cardFuncionalidades, cardQuestions }) {
 
  if (!cardFuncionalidades && !cardQuestions) {
    return null;
  }
   
  const renderCard = (cardData, containerStyle, tituloStyle, titleTag, isQuestion) => {
    console.log(isQuestion)
   
    const { icon, title, description,} = cardData;
    console.log(cardData)
   
    const TitleComponent = titleTag || 'h3';

    return (
      <div className={isQuestion ? stylesIndex.contener__gastos : containerStyle}>
        <div className={tituloStyle}>
          {icon && (
            <img
              src={`/img/${icon}`}
              className={stylesIndex.titulos__img}
              alt={title}
            />
          )}
          <TitleComponent className={stylesIndex.titulo__h3}>
            {title}
          </TitleComponent>
        </div>
        <p className={isQuestion ? stylesIndex.titulo__p : ''}>{description}</p>
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

import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import stylesIndex from '../../../src/Sass/index.module.sass';

function CardComponent({ cardFuncionalidades, cardQuestions }) {
  if (!cardFuncionalidades && !cardQuestions) {
    return null;
  }
  const renderCard = (cardData, containerStyle, tituloStyle, isQuestion, TitleComponent = 'h3') => (
    <div className={isQuestion ? stylesIndex.contener__gastos : containerStyle}>
      <div className={tituloStyle}>
        {cardData?.icon && (
        <Image
          src={`/img/${cardData.icon}`}
          className={stylesIndex.titulos__img}
          alt={cardData?.title}
        />
        )}
        <TitleComponent className={stylesIndex.titulo__h3}>
          {cardData?.title}
        </TitleComponent>
      </div>
      <p className={isQuestion ? stylesIndex.titulo__p : ''}>{cardData?.description}</p>
    </div>
  );

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

CardComponent.propTypes = {
  cardFuncionalidades: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  cardQuestions: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

CardComponent.defaultProps = {
  cardFuncionalidades: null,
  cardQuestions: null,
};

export default React.memo(CardComponent);

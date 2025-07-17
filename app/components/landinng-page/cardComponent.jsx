import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import stylesIndex from '../../../src/Sass/index.module.scss';

export default function CardComponent({ wichTypeOfCard, dataInformationCards }) {
  // console.log(dataInformationCards)

  if (typeof dataInformationCards !== 'object' || dataInformationCards === null) {
    // console.error('Invalid dataInformationCards prop:', dataInformationCards);
    return null; // or handle the error accordingly
  }

  const { icon, title, description } = dataInformationCards;
  // console.log(icon)

  const renderCard = (containerStyle, tituloStyle, isQuestion, TitleComponent = 'h3') => (
    <div className={isQuestion ? stylesIndex.contener__gastos : containerStyle}>
      <div className={tituloStyle}>
        {icon && (
          <Image 
          src={`/img/${icon}`}
          className={stylesIndex.titulos__img}
          alt={title} width={0} height={0} />

        )}
        <TitleComponent className={stylesIndex.titulo__h3}>
          {title}
        </TitleComponent>
      </div>
      <p className={isQuestion ? stylesIndex.titulo__p : ''}>{description}</p>
    </div>
  );

  return (
    <>
      {wichTypeOfCard === "cardBenefits" ? renderCard(
        stylesIndex.contener__gastos,
        stylesIndex.gastos__titulos,
        true,
        'h3'
      ) : renderCard(
        stylesIndex.contener__gedf, // containerStyle
        stylesIndex.gedf__titulo,   // tituloStyle
        false,                       // isQuestion
        'h5'                   // TitleComponent
      )
    }
    </>
  );
}

CardComponent.propTypes = {
  dataInformationCards: PropTypes.object, // Adjust as necessary
};

// export default React.memo(CardComponent);

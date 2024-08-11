import React from 'react';
import PropTypes from 'prop-types';
import stylesIndex from '../../../src/Sass/index.module.sass';
import useStringParts from '../../../hooks/useStringParts';
import { CardComponent } from './cardComponent';

function SectionBenefits({ cardInformationBenefits, cardBenefits }) {
  const stringParts = useStringParts(cardInformationBenefits?.str, true) || [];

  const renderCardComponents = () => (
    Object.entries(cardBenefits).map(([key, value]) => (
      <CardComponent key={key} cardFuncionalidades={value} />
    ))
  );

  return (
    <section className={stylesIndex.main__section}>
      <div className={stylesIndex.main__funcionalidades}>
        <h2 className={stylesIndex.funcionaliddaes__h2}>
          {` ${stringParts.part0} `}
          <span className={stylesIndex.h2__span}>
            {`${stringParts.part1} ${stringParts.part2}`}
          </span>
          {` ${stringParts.part3} `}
          <span className={stylesIndex.h2__span}>
            {stringParts.part4}
          </span>
          {` ${stringParts.part5} ${stringParts.part6} ${stringParts.part7}`}
        </h2>
        <div className={stylesIndex.funcionalidades__contener}>
          {cardBenefits && renderCardComponents()}
        </div>
      </div>
    </section>
  );
}

SectionBenefits.propTypes = {
  cardInformationBenefits: PropTypes.shape({
    str: PropTypes.string.isRequired,
  }).isRequired,
  cardBenefits: PropTypes.object,
};

SectionBenefits.defaultProps = {
  cardBenefits: null,
};

export default SectionBenefits;

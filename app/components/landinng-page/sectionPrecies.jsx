import React from 'react';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import stylesIndex from '../../../src/Sass/index.module.sass';
import Image from 'next/image';

const useStringParts = dynamic(() => import('../../../hooks/useStringParts'));

function SectionPrices({ dataCardPricies }) {
  // console.log(dataCardPricies)

  const { str, titlePlan, description, textBenefits,
    funcio1, funcio2, funcio3, funcio4, funcio5, funcio6,
    PlanP, pricer, textBtn, } = dataCardPricies;

  const stringParts = useStringParts(str) || [];

  const selectedIcon = '/img/icons8-selecionado-24.png';

  const funcionalidades = [
    { id: 1, name: funcio1 },
    { id: 2, name: funcio2 },
    { id: 3, name: funcio3 },
    { id: 4, name: funcio4 },
    { id: 5, name: funcio5 },
    { id: 6, name: funcio6 },
  ];

  return (
    <section className={stylesIndex.precos}>
      <h4 className={stylesIndex.precos__h4}>
        <span className={stylesIndex.h4__span}>{stringParts.part0}</span>
        {` ${stringParts.part1} `}
        <span className={stylesIndex.h4__span}>{stringParts.part2}</span>
        {` ${stringParts.part3}`}
      </h4>

      <div className={stylesIndex.precos__div}>
        <div className={stylesIndex.precos__informacoes}>
          <h4 className={stylesIndex.informacoes__h4}>{titlePlan}</h4>
          <p className={stylesIndex.informacoes__p}>{description}</p>

          <h4 className={stylesIndex.informacoes__titulo}>{textBenefits}</h4>
          <ul className={stylesIndex.informacoes__contener}>
            {funcionalidades.map((funcio) => (
              <li key={funcio.id} className={stylesIndex.contener__funcionalidades}>
                <h4>{funcio.name}</h4>
                 <Image src={selectedIcon} alt="Icone de seleção" width={24} height={24} />
              </li>
            ))}
          </ul>
        </div>

        <div className={stylesIndex.informacoes__preco}>
          <p className={stylesIndex.preco__p}>{PlanP}</p>
          <h4 className={stylesIndex.preco__valor}>{pricer}</h4>

          <button type="button" className={stylesIndex.preco__button}>
            {textBtn}
          </button>
        </div>
      </div>
    </section>
  );
}

// PropTypes validation
SectionPrices.propTypes = {
  str: PropTypes.string.isRequired,
  titlePlan: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textBenefits: PropTypes.string.isRequired,
  funcio1: PropTypes.string.isRequired,
  funcio2: PropTypes.string.isRequired,
  funcio3: PropTypes.string.isRequired,
  funcio4: PropTypes.string.isRequired,
  funcio5: PropTypes.string.isRequired,
  funcio6: PropTypes.string.isRequired,
  PlanP: PropTypes.string.isRequired,
  pricer: PropTypes.string.isRequired,
  textBtn: PropTypes.string.isRequired,
};

export default SectionPrices;
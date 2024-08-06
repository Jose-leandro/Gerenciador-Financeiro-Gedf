import React from 'react';
import stylesIndex from '../../../src/Sass/index.module.sass';
import useStringParts from "../../../hooks/useStringParts";
import { CardComponent } from './cardComponent';

export function SectionBenefits({props} ) {
    const stringParts = useStringParts(props.cardInformationBenefits.str) || [];

  return (
    <section>
       <div className={stylesIndex.main__funcionalidades}>
          <h2 className={stylesIndex.funcionaliddaes__h2}>
          {stringParts.part0}
            {' '}
            <span className={stylesIndex.h2__span}>{stringParts.part1} </span>
            {' '}
            {stringParts.part2}
            {' '}
            <span className={stylesIndex.h2__span}> {stringParts.part3} </span>
            {' '}
            {stringParts.part4}
          </h2>

          <div className={stylesIndex.funcionalidades__contener}>

            {props.cardBenefits
              && Object.entries(props.cardBenefits).map(([key, value]) => (
                <CardComponent key={key} cardFuncionalidades={value} />
              ))}

          </div>
        </div>
    </section>
  );
}

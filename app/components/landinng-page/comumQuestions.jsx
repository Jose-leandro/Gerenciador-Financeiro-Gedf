import React from "react";
import useStringParts from "../../../hooks/useStringParts";
import stylesIndex from '../../../src/Sass/index.module.sass';
import { CardComponent } from "./cardComponent";

export function ComumQuestions( {props} ) {
    const stringParts = useStringParts(props.cardInformationQuestions.str) || [];
    console.log(props.cardQuestions)

    return (
        <section>
             <div className={stylesIndex.perguntas}>
          <h4 className={stylesIndex.perguntas__h4}>
          {stringParts.part0}
            {' '}
            <span className={stylesIndex.h4__span}> {stringParts.part1}</span>
            {' '}
            {stringParts.part2} 
            {' '}
            <sapan className={stylesIndex.h4__span}>{stringParts.part3} </sapan>
            {' '}
            {stringParts.part4} 
            {' '}
            <span className={stylesIndex.h4__span}>{stringParts.part5} </span>
          </h4>
          <p className={stylesIndex.perguntas__p}>
            {props.cardInformationQuestions.description}
          </p>

          <div className={stylesIndex.perguntas__contener}>

            {props.cardQuestions
              && Object.entries(props.cardQuestions).map(([key, value]) => (
                <CardComponent key={key} cardQuestions={value} />
              ))}
          </div>
        </div>
        </section>
    )
}
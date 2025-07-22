import React from "react";
import PropTypes from 'prop-types';
import useStringParts from "../../../hooks/useStringParts";
import stylesIndex from '../../../src/Sass/index.module.scss';
import CardComponent from "./cardComponent";

function ComumQuestions({ cardInformationQuestions, cardQuestions }) {
  // const { cardInformationQuestions, cardQuestions } = dataCardQuestions;

  // Destructure properties as needed
  const { str, description } = cardInformationQuestions;

  const stringParts = useStringParts(str) || [];

  const renderCardComponents = () => {
    const components = [];
  
    Object.entries(cardQuestions).forEach(([keyCardQuestions, valueCardQuestions]) => {
      // console.log(keyCardQuestions, valueCardQuestions);
    
      // Check if valueCardQuestions is an object
      if (typeof valueCardQuestions === 'object' && !Array.isArray(valueCardQuestions) && valueCardQuestions !== null) {
        components.push(<CardComponent wichTypeOfCard={"cardQuestions"}  dataInformationCards={valueCardQuestions} />);
      } else {
        // console.error(`Unexpected type for key ${keyCardQuestions}:`, typeof valueCardQuestions);
      }
      
      Object.entries(valueCardQuestions).forEach(([key, value]) => {
        // console.log(key, value);
      });
    });
    
  
    // console.log(components);
    return components;
  };
  

  return (
    <section>
      <div className={stylesIndex.perguntas}>
        <h4 className={stylesIndex.perguntas__h4}>
        {` ${stringParts.part0} `}
          <span className={stylesIndex.h4__span}> {stringParts.part1}</span>
          {` ${stringParts.part2} `}
          <sapan className={stylesIndex.h4__span}>{stringParts.part3} </sapan>
          {` ${stringParts.part4} `}
          <span className={stylesIndex.h4__span}>{stringParts.part5} </span>
        </h4>
        <p className={stylesIndex.perguntas__p}>
          {cardQuestions?.description}
        </p>
        <div className={stylesIndex?.perguntas__contener}>
          {cardQuestions && renderCardComponents()}
        </div>
      </div>
    </section>
  )
}

ComumQuestions.propTypes = {
  dataCardQuestions: PropTypes.shape({
    cardInformationQuestions: PropTypes.shape({
      str: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    cardQuestions: PropTypes.object.isRequired,
  }).isRequired,
};


export default ComumQuestions;
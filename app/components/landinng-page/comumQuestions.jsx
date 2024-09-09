import React from "react";
import PropTypes from 'prop-types';
import useStringParts from "../../../hooks/useStringParts";
import stylesIndex from '../../../src/Sass/index.module.sass';
import CardComponent from "./cardComponent";

function ComumQuestions({ cardInformationQuestions,cardQuestions }) {
  // const { cardInformationQuestions, cardQuestions } = dataCardQuestions;

  // Destructure properties as needed
  const { str, description } = cardInformationQuestions;

  // // Destructure the properties of cardQuestions
  // const {
  //   question1: { icon: icon1, title: title1, description: desc1 },
  //   question2: { icon: icon2, title: title2, description: desc2 },
  //   question3: { icon: icon3, title: title3, description: desc3 },
  //   question4: { icon: icon4, title: title4, description: desc4 },
  //   question5: { icon: icon5, title: title5, description: desc5 },
  //   question6: { icon: icon6, title: title6, description: desc6 },
  // } = cardQuestions;

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
import React from "react";
import useStringParts from "../../../hooks/useStringParts";
import stylesIndex from '../../../src/Sass/index.module.sass';
import { CardComponent } from "./cardComponent";

function ComumQuestions({ cardInformationQuestions, cardQuestions }) {
  const stringParts = useStringParts(cardInformationQuestions?.str) || [];

  const renderCardComponents = () => (
    Object.entries(cardQuestions).map(([key, value]) => (
      <CardComponent key={key} cardQuestions={value} />
    ))
  );

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
          {cardInformationQuestions?.description}
        </p>
        <div className={stylesIndex?.perguntas__contener}>
          {cardQuestions && renderCardComponents()}
        </div>
      </div>
    </section>
  )
}

ComumQuestions.propTypes = {
  cardInformationQuestions: PropTypes.shape({
      str: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
  }).isRequired,
  cardQuestions: PropTypes.object,
};

ComumQuestions.defaultProps = {
  cardQuestions: null,
};

export default ComumQuestions;
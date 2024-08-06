import React from "react";
import useStringParts from "../../../hooks/useStringParts";
import stylesIndex from '../../../src/Sass/index.module.sass';

export function SectionPrices( {props} ) {
  

    const stringParts = useStringParts(props.str) || [];

    return (
        <section className={stylesIndex.precos}>
        <h4 className={stylesIndex.precos__h4}>
          <span className={stylesIndex.h4__span}> {stringParts.part0} </span>
          {' '}
          {stringParts.part1}
          {' '}
          <span className={stylesIndex.h4__span}> {stringParts.part2} </span>
          {' '}
          {stringParts.part3}
        </h4>

        <div className={stylesIndex.precos__div}>
          <div className={stylesIndex.precos__informacoes}>
            <h4 className={stylesIndex.informacoes__h4}>{props.titlePlan}</h4>
            <p className={stylesIndex.informacoes__p}>
           {props.description}
            </p>

            <h4 className={stylesIndex.informacoes__titulo}> {props.textBenefits} </h4>
            <div className={stylesIndex.informacoes__contener}>
              <div className={stylesIndex.contener__funcionalidades}>
                <h4 className={stylesIndex.funcionalidades__h4}> {props.funcio1} </h4>
                <img className={stylesIndex.funcionalidades__img} src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
              </div>

              <div className={stylesIndex.contener__funcionalidades}>
                <h4 className={stylesIndex.funcionalidades__h4}> {props.funcio2} </h4>
                <img className={stylesIndex.funcionalidades__img} src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
              </div>

              <div className={stylesIndex.contener__funcionalidades}>
                <h4 className={stylesIndex.funcionalidades__h4}> {props.funcio3} </h4>
                <img className={stylesIndex.funcionalidades__img} src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
              </div>

              <div className={stylesIndex.contener__funcionalidades}>
                <h4 className={stylesIndex.funcionalidades__h4}> {props.funcio4} </h4>
                <img className={stylesIndex.funcionalidades__img} src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
              </div>

              <div className={stylesIndex.contener__funcionalidades}>
                <h4 className={stylesIndex.funcionalidades__h4}> {props.funcio5} </h4>
                <img className={stylesIndex.funcionalidades__img} src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
              </div>

              <div className={stylesIndex.contener__funcionalidades}>
                <h4 className={stylesIndex.funcionalidades__h4}> {props.funcio6} </h4>
                <img className={stylesIndex.funcionalidades__img} src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
              </div>
            </div>
          </div>

          <div className={stylesIndex.informacoes__preco}>
            <p className={stylesIndex.preco__p}> {props.PlanP} </p>
            <h4 className={stylesIndex.preco__valor}> {props.pricer} </h4>

            <button className={stylesIndex.preco__button}>
            {props.textBtn}
            </button>
          </div>
        </div>
      </section>
    )
}
import React, { useEffect, useRef, useState } from 'react';
import Header from '../app/components/header';
import Footer from '../app/components/footer';
import stylesIndex from '../src/Sass/index.module.scss';
import { ApresentacionInicial } from '../app/components/landinng-page/apresentacionInicial';
import SectionBenefits from '../app/components/landinng-page/sectionBenefits';
import informationCardPrecies from '@/data/informationCardPrecies';
import informationCardFooter from '@/data/informationCardFooter';
import informationCreateCardQuestions from '@/data/informationCardQuestions';
import informationCardBenefits from '@/data/informationCardBenefits';
import informationCardApresentacion from '@/data/informationCardApresentacion';
import Head from 'next/head';
import SectionPrices from '../app/components/landinng-page/sectionPrecies';
import ComumQuestions from '../app/components/landinng-page/comumQuestions';


function Index() {

  const dataInformationApresentacion = informationCardApresentacion;

  const dateInformationFooter = informationCardFooter;


  const dataCardPricies = informationCardPrecies;

  const dataCardQuestions = informationCreateCardQuestions;


  const dataCardBenefits = informationCardBenefits;


  const { spendManagement } = dataCardBenefits

  return (
    <>
      <Head>
        <title>Welcome To Gedf!</title>
        <meta
          name="description"
          content="Welcome To Gedf!" />
      </Head>

        <header>
          <Header />
        </header>

        <main className={stylesIndex.main}>

          <ApresentacionInicial dataInformationApresentacion={dataInformationApresentacion} />

          <SectionBenefits cardInformationBenefits={dataCardBenefits.cardInformationBenefits} 
          cardBenefits={dataCardBenefits.cardBenefits}  />

          <SectionPrices dataCardPricies={dataCardPricies} /> 

          <ComumQuestions cardInformationQuestions={dataCardQuestions.cardInformationQuestions}
           cardQuestions={dataCardQuestions.cardQuestions} />

        </main>

          <footer>
          <Footer dateInformationFooter={dateInformationFooter} />
          </footer>
    </>

  );
}

export default Index;

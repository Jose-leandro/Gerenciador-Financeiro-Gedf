import React, { useEffect, useRef, useState } from 'react';
import Header from '../app/components/header';
import Footer from '../app/components/footer';
import stylesIndex from '../src/Sass/index.module.sass';
import { CardComponent } from '../app/components/landinng-page/cardComponent';
import { ApresentacionInicial } from '../app/components/landinng-page/apresentacionInicial';
import { SectionPrices } from '../app/components/landinng-page/sectionPrecies';
import informationCardPrecies from '@/data/informationCardPrecies';
import informationCardFooter from '@/data/informationCardFooter';
import { ComumQuestions } from '../app/components/landinng-page/comumQuestions';
import informationCreateCardQuestions from '@/data/informationCardQuestions';
import Head from 'next/head';
import { SectionBenefits } from '../app/components/landinng-page/sectionBenefits';
import informationCardBenefits from '@/data/informationCardBenefits';
import informationCardApresentacion from '@/data/informationCardApresentacion';

function Index() {

  const dataInformationApresentacion = informationCardApresentacion;

  const dateInformationFooter = informationCardFooter;
  console.log(dateInformationFooter)

  const dataCardPricies = informationCardPrecies;

  const dataCardQuestions = informationCreateCardQuestions;

  const dataCardBenefits = informationCardBenefits;

  return (
    <>
      <Head>
        <title>Bem-vindo ao Gedf</title>
        <meta name="description" content="Bem-vindo ao meu Gedf!" />
      </Head>
      <div>
        <Header />
        <main className={stylesIndex.main}>
          <ApresentacionInicial props={dataInformationApresentacion} />
          <SectionBenefits props={dataCardBenefits} />
          <SectionPrices props={dataCardPricies} />
          <ComumQuestions props={dataCardQuestions} />
        </main>
        <Footer props={dateInformationFooter} />
      </div>
    </>

  );
}

export default Index;

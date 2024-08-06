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

function Index() {

  const dateInformationFooter = informationCardFooter;
  console.log(dateInformationFooter)

  const dataCardPricies = informationCardPrecies;

  const dataCardQuestions = informationCreateCardQuestions;

  const dataCardBenefits = informationCardBenefits;

  return (
    <>
      <Head>
        <title>Bem vindo ao Gedf </title>
        <meta
          name="description"
          content="Bem-vindo ao meu Gedf!" />
      </Head>
      <body>
        <header>
          <Header />
        </header>

        <main className={stylesIndex.main}>

          <ApresentacionInicial
            str={'Control your Money, Achieve your Dreams, Live free'}
            descrition={`Explore, enjoy and achieve your financial freedom.
            Transform your dreams and goals
            finances into reality with Gedf.`}
            textBtn={'Start My Financial Freedom'}
            alt={'Imagem of apresentaciojn of the gedf'}
          />

          <SectionBenefits props={dataCardBenefits}  />

          <SectionPrices props={dataCardPricies} />

          <ComumQuestions props={dataCardQuestions} />

        </main>

        <footer className={stylesIndex.footer}>
          <Footer props={dateInformationFooter} />
        </footer>
      </body>
    </>

  );
}

export default Index;

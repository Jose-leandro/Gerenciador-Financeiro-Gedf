import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import stylesIndex from '../src/Sass/index.module.sass';
import Head from 'next/head';

// Dynamic component imports
const Header = dynamic(() => import('../app/components/header'));
const Footer = dynamic(() => import('../app/components/footer'));
const ApresentacionInicial = dynamic(() => import('../app/components/landinng-page/apresentacionInicial'));
const SectionBenefits = dynamic(() => import('../app/components/landinng-page/sectionBenefits'));
const ComumQuestions = dynamic(() => import('../app/components/landinng-page/comumQuestions'));
const SectionPrices = dynamic(() => import('../app/components/landinng-page/sectionPrecies'));

// Static data imports (these are fine as-is)
import informationCardPrecies from '@/data/informationCardPrecies';
import informationCardFooter from '@/data/informationCardFooter';
import informationCreateCardQuestions from '@/data/informationCardQuestions';
import informationCardBenefits from '@/data/informationCardBenefits';
import informationCardApresentacion from '@/data/informationCardApresentacion';


function Index() {

  const dataInformationApresentacion = informationCardApresentacion;
  console.log(dataInformationApresentacion)

  const dateInformationFooter = informationCardFooter;
  console.log(dateInformationFooter)

  const dataCardPricies = informationCardPrecies;

  const dataCardQuestions = informationCreateCardQuestions;
  console.log(dataCardQuestions)

  const dataCardBenefits = informationCardBenefits;
  console.log(dataCardBenefits)

  const { spendManagement } = dataCardBenefits
  console.log(spendManagement)


//   spendManagement: {
//     icon: any;
//     title: any;
//     description: any;
// };
// mySpendReports: {
//     icon: any;
//     title: any;
//     description: any;
// };
// mySpendPlanning: {
//     icon: any;
//     title: any;
//     description: any;
// };
// mySpendAccounts: {
//     icon: any;
//     title: any;
//     description: any;
// };
// mySpendLimit: {
//     icon: any;
//     title: any;
//     description: any;
// };
// mySpendAFree: {
//     icon: any;
//     title: any;
//     description: any;
// };
// }

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

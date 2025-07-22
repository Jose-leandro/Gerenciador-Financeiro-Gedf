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

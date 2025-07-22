import React, { useEffect, useRef, useState } from 'react';
import Header from '../app/components/header';
import Footer from '../app/components/footer';
import stylesIndex from '../src/Sass/index.module.scss';
import { CardComponent } from '../app/components/landinng-page/cardComponent';

function Index() {
  const [wichiCardComponent, setWichiCardComponent] = useState(false);

  const createCardInfo = (imgFunct, titleFunct, textFunct) => ({
    imgFunct,
    titleFunct,
    textFunct,
  });

  const defaultText = 'Discover a prosperous financial life: manage expenses and achieve your dreams!';

  const informationCreateCard = {
    cardFuncionalidades: {
      spendManagement: createCardInfo(
        'icons8-analysis-64.png',
        'Discover a Prosperous Financial Life: Manage Your Expenses and Achieve Your Dreams!',
        'Take control of your expenses and plan for your future with our tools. Achieve financial freedom and live a prosperous life. Start today!'
      ),
      mySpendReports: createCardInfo(
        'icons8-relatórios-externos-produtividade-icons-64.png',
        'Reports',
        'Gain insights into your financial habits with our detailed reports. Understand your spending, find savings, and make informed decisions. Start your journey to smarter money management today!'
      ),
      mySpendPlanning: createCardInfo(
        'icons8-pay-date-100.png',
        'Financial Planning',
        'Create a personalized financial roadmap. Set goals, track progress, and make informed financial decisions. Plan for purchases, vacations, or retirement with our intuitive platform.'
      ),
      mySpendAccounts: createCardInfo(
        'icons8-conta-de-teste-100.png',
        'Account Management',
        'Create and manage multiple accounts tailored to your needs. Track income, expenses, and savings separately for clearer financial insights. Customize each account for effective management.'
      ),
      mySpendLimit: createCardInfo(
        'icons8-alerta-100.png',
        'Spending Limit',
        'Set and manage spending limits to keep your finances on track. Establish budget thresholds, receive alerts, and avoid overspending. Cultivate better financial discipline.'
      ),
      mySpendAFree: createCardInfo(
        'icons8-dinheiro-100.png',
        'GEDF: Your Free Financial Manager',
        'GDEF is a free financial manager with no limitations or ads. It helps you budget, track expenses, and plan for the future. Join us for a user-friendly, ad-free experience.'
      ),
    },
    cardQuestions: {
      question1: createCardInfo(
        false,
        'What is GDEF?',
        'Manage your expenses to achieve your financial goals and make your dreams come true. Start today to transform your finances for a better future.'
      ),
      question2: createCardInfo(
        false,
        'What Does the Word GDEF Mean?',
        'GDEF comes from the Portuguese "Gerenciador Financeiro," combining the letters G, E, D, and F. It reflects our mission to provide an effective, user-friendly financial management tool.'
      ),
      question3: createCardInfo(
        false,
        'How Much Does GDEF Cost?',
        'GDEF is completely free. No hidden fees, subscriptions, or ads. Enjoy all features and benefits at no cost.'
      ),
      question4: createCardInfo(
        false,
        'Where Can I Access My GDEF Account?',
        'Access your GDEF account from any device with an internet connection. Visit our website and log in with your credentials.'
      ),
      question5: createCardInfo(
        false,
        'Is My Data Safe on GDEF?',
        'We prioritize your data security. GDEF ensures your personal and financial data remains confidential and protected from unauthorized access.'
      ),
      question6: createCardInfo(
        false,
        'Can I Achieve Financial Freedom with GDEF?',
        'GDEF helps you manage your finances, but your dedication and effort are crucial. GDEF supports you, but achieving financial freedom requires your commitment.'
      ),
    },
  };
  
  return (
    <>
      <header>
        <Header />
      </header>

      <main className={stylesIndex.main}>
      

        <div className={stylesIndex.main__funcionalidades}>
          <h2 className={stylesIndex.funcionaliddaes__h2}>
            Discover
            {' '}
            <span className={stylesIndex.h2__span}>The unique</span>
            {' '}
            Benefits
            {' '}
            <span className={stylesIndex.h2__span}>Gedf</span>
            {' '}
            Brings to You
          </h2>

          <div className={stylesIndex.funcionalidades__contener}>

            {informationCreateCard
              && Object.entries(informationCreateCard.cardFuncionalidades).map(([key, value]) => (
                <CardComponent key={key} cardFuncionalidades={value} />
              ))}

          </div>
        </div>

        <section className={stylesIndex.precos}>
          <h4 className={stylesIndex.precos__h4}>
            <span className={stylesIndex.h4__span}>How much</span>
            {' '}
            Does
            {' '}
            <span className={stylesIndex.h4__span}>Gedf</span>
            {' '}
            cost
          </h4>

          <div className={stylesIndex.precos__div}>
            <div className={stylesIndex.precos__informacoes}>
              <h4 className={stylesIndex.informacoes__h4}>Free Plan</h4>
              <p className={stylesIndex.informacoes__p}>
              With effective expense management, you can achieve your financial goals and realize 
              your dreams without worries. This service plan offers you a range of benefits designed to 
              bring you financial tranquility and success. It provides everything you need 
              to manage your finances effectively and reach your aspirations.
              </p>

              <h4 className={stylesIndex.informacoes__titulo}>Benefits</h4>
              <div className={stylesIndex.informacoes__contener}>
                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>All features released</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Goal Setting</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Budget Planning</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Expense Tracking</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Free without ads</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Use on any device</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>
              </div>
            </div>

            <div className={stylesIndex.informacoes__preco}>
              <p className={stylesIndex.preco__p}>For only</p>
              <h4 className={stylesIndex.preco__valor}>$ 0</h4>

              <button className={stylesIndex.preco__button}>
              Start My Financial Freedom
              </button>
            </div>
          </div>
        </section>

        <div className={stylesIndex.perguntas}>
          <h4 className={stylesIndex.perguntas__h4}>
            What
            {' '}
            <span className={stylesIndex.h4__span}>People</span>
            {' '}
            most
            {' '}
            <sapan className={stylesIndex.h4__span}>Want to know</sapan>
            {' '}
            About
            {' '}
            <span className={stylesIndex.h4__span}>Gedf</span>
          </h4>
          <p className={stylesIndex.perguntas__p}>
          In FAQ section provides answers to the most common questions about our service. 
          Here, you can find quick and helpful information on various topics such as:
          </p>

          <div className={stylesIndex.perguntas__contener}>

            {informationCreateCard
              && Object.entries(informationCreateCard.cardQuestions).map(([key, value]) => (
                <CardComponent key={key} cardQuestions={value} />
              ))}
          </div>
        </div>
      </main>

      <footer className={stylesIndex.footer}>
        <Footer />
      </footer>
    </>

  );
}

export default Index;

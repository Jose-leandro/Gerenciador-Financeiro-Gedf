import React, { useEffect, useRef, useState } from 'react';
import Header from '../app/components/header';
import Footer from '../app/components/footer';
import stylesIndex from '../src/Sass/index.module.sass';
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
      spendManagement: createCardInfo('icons8-analysis-64.png', 'Spend management', defaultText),
      mySpendReports: createCardInfo('icons8-relatórios-externos-produtividade-icons-64.png', 'Reports', defaultText),
      mySpendPlanning: createCardInfo('icons8-pay-date-100.png', 'Financial Planning', defaultText),
      mySpendAccounts: createCardInfo('icons8-conta-de-teste-100.png', 'Create and manage custom accounts', defaultText),
      mySpendLimit: createCardInfo('icons8-alerta-100.png', 'Create and manage custom accounts', defaultText),
      mySpendAFree: createCardInfo('icons8-dinheiro-100.png', 'Create and manage custom accounts', defaultText),
    },
    const cardQuestions = {
      question1: createCardInfo(
        false,
        'What is Gedf',
        `Discover the secret to a peaceful and prosperous financial life! By managing your expenses, 
    you can achieve your financial goals and make your dreams come true without worries. The time has 
    come to take control of your financial life and gain the freedom you deserve. Start today to transform 
    your expenses into opportunities for a better future`
      ),
      question2: createCardInfo(
        false,
        'Create and manage custom accounts',
        defaultText
      ),
      question3: createCardInfo(
        false,
        'Create and manage custom accounts',
        defaultText
      ),
      question4: createCardInfo(
        false,
        'Create and manage custom accounts',
        defaultText
      ),
      question5: createCardInfo(
        false,
        'Create and manage custom accounts',
        defaultText
      ),
      question6: createCardInfo(
        false,
        'Create and manage custom accounts',
        defaultText
      ),
    };
    
  };

  return (
    <>
      <header>
        <Header />
      </header>

      <main className={stylesIndex.main}>
        <section className={stylesIndex.main__apresentacao}>
          <div className={stylesIndex.apresentacao__informacoes}>
            <h1 className={stylesIndex.main__h1}>
              <span className={stylesIndex.h1__span}>Controle</span>
              {' '}
              seu dinheiro, conquiste seus
              {' '}
              <span className={stylesIndex.h1__span}>sonhos</span>
              , viva livre
              <span className={stylesIndex.h1__span}>!</span>
            </h1>
            <p
              className={stylesIndex.informacoes__p}
            >
              Explore, aproveite e alcance sua liberdade financeira.
              Transforme seus sonhos e objetivos
              financeiros em realidade com Gedf.
            </p>

            <button className={stylesIndex.main__button}>Iniciar minha liberdade financeira</button>
          </div>

          <img className={stylesIndex.main__img} src="/img/Screenshot-Gedf.png" alt="Image de apresentação" />
        </section>

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
            <span className={stylesIndex.h4__span}>Quanto</span>
            {' '}
            custa o
            {' '}
            <span className={stylesIndex.h4__span}>Gedf</span>
            {' '}
          </h4>

          <div className={stylesIndex.precos__div}>
            <div className={stylesIndex.precos__informacoes}>
              <h4 className={stylesIndex.informacoes__h4}>Plano Graituito</h4>
              <p className={stylesIndex.informacoes__p}>
                Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
              </p>

              <h4 className={stylesIndex.informacoes__titulo}>Beneficios</h4>
              <div className={stylesIndex.informacoes__contener}>
                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Todas as funcionalidades liberads</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Todas as funcionalidades liberads</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Todas as funcionalidades liberads</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Todas as funcionalidades liberads</h4>
                  <img src="/img/icons8-selecionado-24.png" alt="Icone de seleção" />
                </div>
              </div>
            </div>

            <div className={stylesIndex.informacoes__preco}>
              <p className={stylesIndex.preco__p}>Por apenas</p>
              <h4 className={stylesIndex.preco__valor}>R$ 0</h4>

              <button className={stylesIndex.preco__button}>
                Começar minha jornada financeira
              </button>
            </div>
          </div>
        </section>

        <div className={stylesIndex.perguntas}>
          <h4 className={stylesIndex.perguntas__h4}>
            O que as
            {' '}
            <span className={stylesIndex.h4__span}>pessoas</span>
            {' '}
            mais
            {' '}
            <sapan className={stylesIndex.h4__span}>querem saber</sapan>
            {' '}
            sobre o
            {' '}
            <span className={stylesIndex.h4__span}>Gedf</span>
          </h4>
          <p className={stylesIndex.perguntas__p}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, alias
            ipsa nisi quae ullam autem laboriosam
            harum ducimus omnis consequuntur accusantium. Cum esse quidem,
            totam consequuntur consectetur earum neque repellendus.
          </p>

          <div className={stylesIndex.perguntas__contener}>

            {informationCreateCard
              && Object.entries(informationCreateCard.cardQuestions).map(([key, value]) => (
                <CardComponent key={key} cardQuestions={value} />
              ))}
            {/* <div className={stylesIndex.contener__gedf}>
              <div className={stylesIndex.gedf__titulo}>
                <h5 className={stylesIndex.titulo__h5}>O que é gedf </h5>
                <img src='/img/icons8-seta-para-cima-48.png' className={stylesIndex.titulo__img}></img>
              </div>
              <p>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
                Chegou a hora de tomar as rédeas da sua vida financeira e conquistar a liberdade que você merece.
                Comece hoje mesmo a transformar seus gastos em oportunidades para um futuro melhor</p>
            </div>

            <div className={stylesIndex.contener__significado}>
              <div className={stylesIndex.significado__titulo}>
                <h5 className={stylesIndex.titulo__h5}>O que significa a palavra gedf </h5>
                <img src='/img/icons8-seta-para-cima-48.png' className={stylesIndex.titulo__img}></img>
              </div>
              <p>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
                Chegou a hora de tomar as rédeas da sua vida financeira e conquistar a liberdade que você merece.
                Comece hoje mesmo a transformar seus gastos em oportunidades para um futuro melhor</p>
            </div>

            <div className={stylesIndex.contener__preco}>
              <div className={stylesIndex.preco__titulo}>
                <h5 className={stylesIndex.titulo__h5}>Quanto custa o gedf </h5>
                <img src='/img/icons8-seta-para-cima-48.png' className={stylesIndex.titulo__img}></img>
              </div>
              <p>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
                Chegou a hora de tomar as rédeas da sua vida financeira e conquistar a liberdade que você merece.
                Comece hoje mesmo a transformar seus gastos em oportunidades para um futuro melhor</p>
            </div>

            <div className={stylesIndex.contener__conta}>
              <div className={stylesIndex.conta__titulo}>
                <h5 className={stylesIndex.titulo__h5}>Onde posso acessar minha conta no gedf </h5>
                <img src='/img/icons8-seta-para-cima-48.png' className={stylesIndex.titulo__img}></img>
              </div>
              <p>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
                Chegou a hora de tomar as rédeas da sua vida financeira e conquistar a liberdade que você merece.
                Comece hoje mesmo a transformar seus gastos em oportunidades para um futuro melhor</p>
            </div>

            <div className={stylesIndex.contener__seguranca}>
              <div className={stylesIndex.seguranca__titulo}>
                <h5 className={stylesIndex.titulo__h5}>Os meus daos estão seguro no Gedf </h5>
                <img src='/img/icons8-seta-para-cima-48.png' className={stylesIndex.titulo__img}></img>
              </div>
              <p>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
                Chegou a hora de tomar as rédeas da sua vida financeira e conquistar a liberdade que você merece.
                Comece hoje mesmo a transformar seus gastos em oportunidades para um futuro melhor</p>
            </div> */}

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

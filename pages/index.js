import React, { useEffect, useRef } from 'react'
import Header from '../app/components/header'
import Footer from '../app/components/footer'
import stylesIndex from '../src/Sass/index.module.sass'
import { CardComponent } from '../app/components/landinng-page/cardComponent'

function Index() {

  let informationCreateCard = {
    spendManagement: {
      imgFunct: 'icons8-analysis-64.png',
      titleFunct: 'Spend management',
      textFunct: 'Discover a prosperous financial life: manage expenses and achieve your dreams!'
    },
    mySpendReports: {
      imgFunct: 'icons8-relatórios-externos-produtividade-icons-64.png',
      titleFunct: 'Reports',
      textFunct: 'Discover a prosperous financial life: manage expenses and achieve your dreams!'
    },
    mySpendPlanning: {
      imgFunct: 'icons8-pay-date-100.png',
      titleFunct: 'Financial Planning',
      textFunct: 'Discover a prosperous financial life: manage expenses and achieve your dreams!'
    },
    mySpendAccounts: {
      imgFunct: 'icons8-conta-de-teste-100.png',
      titleFunct: 'Create and manage custom accounts',
      textFunct: 'Discover a prosperous financial life: manage expenses and achieve your dreams!'
    },
    mySpendLimit: {
      imgFunct: 'icons8-alerta-100.png',
      titleFunct: 'Create and manage custom accounts',
      textFunct: 'Discover a prosperous financial life: manage expenses and achieve your dreams!'
    },
    mySpendAFree: {
      imgFunct: 'icons8-dinheiro-100.png',
      titleFunct: 'Create and manage custom accounts',
      textFunct: 'Discover a prosperous financial life: manage expenses and achieve your dreams!'
    },
  }

  return (
    <>
      <header>
        <Header />
      </header>

      <main className={stylesIndex.main}>
        <section className={stylesIndex.main__apresentacao}>
          <div className={stylesIndex.apresentacao__informacoes}>
            <h1 className={stylesIndex.main__h1}><span className={stylesIndex.h1__span}>Controle</span> seu dinheiro, conquiste seus <span className={stylesIndex.h1__span}>sonhos</span>, viva livre<span className={stylesIndex.h1__span}>!</span></h1>
            <p className={stylesIndex.informacoes__p} >Explore, aproveite e alcance sua liberdade financeira. Transforme seus sonhos e objetivos financeiros em realidade com Gedf.</p>

            <button className={stylesIndex.main__button}>Iniciar minha liberdade</button>
          </div>

          <img className={stylesIndex.main__img} src="/img/Screenshot-Gedf.png" alt="Image de apresentação" />
        </section>

        <div className={stylesIndex.main__funcionalidades}>
          <h2 className={stylesIndex.funcionaliddaes__h2}>
            O que o Gedf por oferecer a você</h2>

          <div className={stylesIndex.funcionalidades__contener}>

            {informationCreateCard &&
              Object.entries(informationCreateCard).map(([key, value]) => (
                <CardComponent key={key} informationCardValue={value} />
              ))}

          </div>
        </div>

        <section className={stylesIndex.precos}>
          <h4 className={stylesIndex.precos__h4}><span className={stylesIndex.h4__span}>Quanto</span> custa o <span className={stylesIndex.h4__span}>Gedf</span> </h4>

          <div className={stylesIndex.precos__div}>
            <div className={stylesIndex.precos__informacoes}>
              <h4 className={stylesIndex.informacoes__h4}>Plano Graituito</h4>
              <p className={stylesIndex.informacoes__p}>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.</p>

              <h4 className={stylesIndex.informacoes__titulo}>Beneficios</h4>
              <div className={stylesIndex.informacoes__contener}>
                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Todas as funcionalidades liberads</h4>
                  <img src='/img/icons8-selecionado-24.png' alt='Icone de seleção'></img>
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Todas as funcionalidades liberads</h4>
                  <img src='/img/icons8-selecionado-24.png' alt='Icone de seleção'></img>
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Todas as funcionalidades liberads</h4>
                  <img src='/img/icons8-selecionado-24.png' alt='Icone de seleção'></img>
                </div>

                <div className={stylesIndex.contener__funcionalidades}>
                  <h4>Todas as funcionalidades liberads</h4>
                  <img src='/img/icons8-selecionado-24.png' alt='Icone de seleção'></img>
                </div>
              </div>
            </div>

            <div className={stylesIndex.informacoes__preco}>
              <p className={stylesIndex.preco__p}>Por apenas</p>
              <h4 className={stylesIndex.preco__valor}>R$ 0</h4>

              <button className={stylesIndex.preco__button}>Começar minha jornada financeira</button>
            </div>
          </div>
        </section>

        <div className={stylesIndex.perguntas}>
          <h4 className={stylesIndex.perguntas__h4}>O que as <span className={stylesIndex.h4__span}>pessoas</span> mais <sapan className={stylesIndex.h4__span}>querem saber</sapan> sobre o <span className={stylesIndex.h4__span}>Gedf</span></h4>
          <div className={stylesIndex.perguntas__contener}>
            <div className={stylesIndex.contener__gedf}>
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
            </div>

          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>

  )
};

export default Index

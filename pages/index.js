import React, { useEffect, useRef } from 'react'
import Header from '../app/components/header'
import Footer from '../app/components/footer'
import stylesIndex from '../src/Sass/index.module.sass'
import Image from 'next/image'

function Index() {
  const gastosh3 = useRef(null)
  const gastosDiv = useRef(null)

  useEffect(() => {
    if (gastosh3.current) {
      let widthGastosh3 = gastosh3.current.offsetWidth
      console.log(widthGastosh3)
      gastosDiv.current.style.width = (widthGastosh3 - 25) + 'px';
    }
  }, [gastosh3]);

  return (
    <>
      <header>
        <Header />
      </header>

      <main className={stylesIndex.main}>
        <h1 className={stylesIndex.main__h1}>Transforme o controle do seu dinheiro em liberdade e conquiste seus sonhos a partir de agora</h1>

        <button className={stylesIndex.main__button}>Iniciar minha liberdade</button>

        <img className={stylesIndex.main__img} src="/img/Screenshot-Gedf.png" alt="Image de apresentação" />

        <div className={stylesIndex.main__funcionalidades}>
          <h2 className={stylesIndex.funcionaliddaes__h2}>O que o <span className={stylesIndex.h2__span}>Gedf</span> por <span className={stylesIndex.h2__span}>oferecer </span>a você</h2>
          <div className={stylesIndex.funcionalidades__contener}>
            <div className={stylesIndex.contener__gastos}>
              <h3 className={stylesIndex.gastos__h3}>Gerenciamentod dos seus gatos</h3>
              <p>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
                Chegou a hora de tomar as rédeas da sua vida financeira e conquistar a liberdade que você merece.
                Comece hoje mesmo a transformar seus gastos em oportunidades para um futuro melhor</p>
            </div>

            <div className={stylesIndex.contener__gastos}>
              <div className={stylesIndex.gastos__titulos}>
                <h3 ref={gastosh3} className={stylesIndex.gastos__h3}>Gerenciamentod dos seus gatos</h3>
                <div className={stylesIndex.gastos__div} ref={gastosDiv}></div>
              </div>
              <p>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
                Chegou a hora de tomar as rédeas da sua vida financeira e conquistar a liberdade que você merece.
                Comece hoje mesmo a transformar seus gastos em oportunidades para um futuro melhor</p>
            </div>

            <div className={stylesIndex.contener__gastos}>
              <h3>Gerenciamentod dos seus gatos</h3>
              <p>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
                Chegou a hora de tomar as rédeas da sua vida financeira e conquistar a liberdade que você merece.
                Comece hoje mesmo a transformar seus gastos em oportunidades para um futuro melhor</p>
            </div>

            <div className={stylesIndex.contener__gastos}>
              <h3>Gerenciamentod dos seus gatos</h3>
              <p>Descubra o segredo para uma vida financeira tranquila e próspera! Com o gerenciamento dos seus gastos,
                você pode alcançar seus objetivos financeiros e realizar seus sonhos sem preocupações.
                Chegou a hora de tomar as rédeas da sua vida financeira e conquistar a liberdade que você merece.
                Comece hoje mesmo a transformar seus gastos em oportunidades para um futuro melhor</p>
            </div>
          </div>
        </div>

        <section className={stylesIndex.precos}>
          <h4 className={stylesIndex.precos__h4}><span className={stylesIndex.h4__span}>Quanto</span> custa o <span className={stylesIndex.h4__span}>Gedf</span> </h4>
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

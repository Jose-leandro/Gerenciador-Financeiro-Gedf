import React from 'react';

import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';
import stylesFooter from '../../src/Sass/footer.module.sass';

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ['normal'], weight: ['300'] });

export default function Footer( { props } ) {

  return (
    <>
    <div className={stylesFooter.footer__contener}>
      <div className={stylesFooter.footer__logo}>
        <Image src="/img/logo.png" width={70} height={80} alt="logo do site" />
        <h1 className={` ${cormorant_garamond.className} ${stylesFooter.logo__h1}`}>Gedf</h1>
      </div>

      <div className={stylesFooter.desenvolvedor}>
        <h3 className={stylesFooter.desenvolvedor__nome}>&copy; {props.nameDevelop} </h3>
      </div>
    </div>

      <div className={stylesFooter.footer__informacoes}>

        <div>
          <h2 className={stylesFooter.footer__titulo}>  {props.titleAbout}  </h2>
          <ul>
            <li className={stylesFooter.titulo__li}> {props.aboutGedf}  </li>
          </ul>
        </div>

        <div>
          <h2 className={stylesFooter.footer__titulo}> {props.titleContact}  </h2>
          <ul>
            <li className={stylesFooter.titulo__li}> {props.contact1} </li>
            <li className={stylesFooter.titulo__li}> {props.contact2} </li>
            <li className={stylesFooter.titulo__li}> {props.contact3} </li>
            <li className={stylesFooter.titulo__li}> {props.contact4} </li>
          </ul>
        </div>

        <div>
          <h2 className={stylesFooter.footer__titulo}> {props.TermsPolicies}  </h2>
          <ul>

            <li className={stylesFooter.titulo__li}>{props.termsUse} </li>
            <li className={stylesFooter.titulo__li}>{props.privacyPolicy} </li>
            <li className={stylesFooter.titulo__li}>{props.cookiePolicy} </li>
          </ul>
        </div>

        <div>
          <h2 className={stylesFooter.footer__titulo}> {props.CopyrightTitle} </h2>
          <ul>
            <li> {props.useOfImages} </li>
          </ul>
        </div>
      </div>


    </>
  );
}

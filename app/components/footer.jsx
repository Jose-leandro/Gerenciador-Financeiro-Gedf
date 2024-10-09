import React from 'react';

import { Cormorant_Garamond } from 'next/font/google';
import stylesFooter from '../../src/Sass/footer.module.sass';

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ['normal'], weight: ['300'] });

export default function Footer({ dateInformationFooter }) {

  const { nameDevelop, titleAbout, aboutGedf, titleContact,
    contact1, contact2, contact3, contact4, TermsPolicies, termsUse, privacyPolicy,
    cookiePolicy, CopyrightTitle, useOfImages } = dateInformationFooter;
    
  return (
    <div className={stylesFooter.footer}>
      <div className={stylesFooter.footer__contener}>
        <div className={stylesFooter.footer__logo}>
          <img src="/img/logo.png" alt="logo do site" />
          <h1 className={` ${cormorant_garamond.className} ${stylesFooter.logo__h1}`}>Gedf</h1>
        </div>

        <div className={stylesFooter.desenvolvedor}>
          <h3 className={stylesFooter.desenvolvedor__nome}>&copy; {nameDevelop} </h3>
        </div>
      </div>

      <div className={stylesFooter.footer__informacoes}>

        <div>
          <h2 className={stylesFooter.footer__titulo}>  {titleAbout}  </h2>
          <ul>
            <li className={stylesFooter.titulo__li}> {aboutGedf}  </li>
          </ul>
        </div>

        <div>
          <h2 className={stylesFooter.footer__titulo}> {titleContact}  </h2>
          <ul>
            <li className={stylesFooter.titulo__li}> {contact1} </li>
            <li className={stylesFooter.titulo__li}> {contact2} </li>
            <li className={stylesFooter.titulo__li}> {contact3} </li>
            <li className={stylesFooter.titulo__li}> {contact4} </li>
          </ul>
        </div>

        <div>
          <h2 className={stylesFooter.footer__titulo}> {TermsPolicies}  </h2>
          <ul>

            <li className={stylesFooter.titulo__li}>{termsUse} </li>
            <li className={stylesFooter.titulo__li}>{privacyPolicy} </li>
            <li className={stylesFooter.titulo__li}>{cookiePolicy} </li>
          </ul>
        </div>

        <div>
          <h2 className={stylesFooter.footer__titulo}> {CopyrightTitle} </h2>
          <ul>
            <li> {useOfImages} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

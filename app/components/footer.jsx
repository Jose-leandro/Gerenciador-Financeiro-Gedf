import React from 'react';

import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';
import stylesFooter from '../../src/Sass/footer.module.sass';

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ['normal'], weight: ['300'] });

export default function Footer() {
  return (
    <>
      <div className={stylesFooter.footer__contener}>
        <div className={stylesFooter.footer__logo}>
          <Image src="/img/logo.png" width={70} height={80} alt="logo do site" />
          <h1 className={` ${cormorant_garamond.className} ${stylesFooter.logo__h1}`}>Gedf</h1>
        </div>

        <div className={stylesFooter.desenvolvedor}>
          <h3 className={stylesFooter.desenvolvedor__nome}>&copy; Developed by José Leandro</h3>
        </div>
      </div>

      <div className={stylesFooter.footer__informacoes}>

        <div>
          <h2 className={stylesFooter.footer__titulo}>About Us</h2>
          <ul>
            <li className={stylesFooter.titulo__li}>What is GEDF</li>
          </ul>
        </div>

        <div>
          <h2 className={stylesFooter.footer__titulo}>Contact</h2>
          <ul>
            <li className={stylesFooter.titulo__li}>By Phone</li>
            <li className={stylesFooter.titulo__li}>By email</li>
            <li className={stylesFooter.titulo__li}>Whatsapp</li>
            <li className={stylesFooter.titulo__li}>And More</li>
          </ul>
        </div>

        <div>
          <h2 className={stylesFooter.footer__titulo}>Terms and policies</h2>
          <ul>

            <li className={stylesFooter.titulo__li}>Terms of use</li>
            <li className={stylesFooter.titulo__li}>Privacy Policy</li>
            <li className={stylesFooter.titulo__li}>Cookie Policy</li>
          </ul>
        </div>

        <div>
          <h2 className={stylesFooter.footer__titulo}>Copyright</h2>
          <ul>
            <li className={stylesFooter.titulo__imagens}>Use of images and icons</li>
          </ul>
        </div>
      </div>


    </>
  );
}

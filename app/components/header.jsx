import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';
import styles from '../../src/Sass/header.module.sass';

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ['normal'], weight: ['300'] });

export default function Header(props) {
  const divMenu = useRef(null);

  useEffect(() => {
    if (divMenu && divMenu.current) {
      divMenu.current.style.display = 'flex';
    }
  }, []);

  return (
    <div className={styles.div}>
      <div className={styles.div__logo}>
        <Image src="/img/logo.png" width={70} height={80} alt="logo do site" />
        <h1 className={` ${cormorant_garamond.className} ${styles.div__h1}`}>Gedf</h1>
      </div>
      <div className={styles.menu} ref={divMenu}>
        {props.estadoUsuario ? (
          <ul className={styles.div__ul}>
            <li>Overview</li>
            <li>Your performance</li>
            <li>Learn how to use</li>
            <li>Settings</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        ) : (
          <>
            <ul className={styles.div__ul}>
              <li className={styles.div__li}>About</li>
              <li className={styles.div__li}>Features</li>
              <li className={styles.div__li}>Plans and Prices</li>
              <li className={styles.div__li}>Contact</li>
            </ul>

            <div className={styles.menu__usuario}>
              <button className={styles.usuario__login}>
                Login
              </button>

              <button className={styles.usuario__sing}>
                Sing up
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

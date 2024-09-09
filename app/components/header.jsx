import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';
import styles from '../../src/Sass/header.module.sass';
import useAutoRespon from '../../lib/useAutoRespon';

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ['normal'], weight: ['300'] });

export default function Header(props) {
  const divMenu = useRef(null);

  useEffect(() => {
    if (divMenu && divMenu.current) {
      divMenu.current.style.display = 'flex';
    }
  }, []);

console.log(useAutoRespon("600px"))
  const renderResponsive = (containerStyle) => (


    <div className={styles.menu} ref={divMenu}>
    <h1 className={styles.div__li}>Overview</h1>
    <h2 className={styles.div__li}>Your performance</h2>
    <h3 className={styles.div__li}>Learn how to use</h3>
    <h4 className={styles.div__li}>Settings</h4>
    <h5 className={styles.div__li}>About</h5>
    <h6 className={styles.div__li}>Contact</h6>
  </div>
  );

  return (
    <div className={styles.div}>
      <div className={styles.div__logo}>
        <Image src="/img/logo.png" width={70} height={80} alt="logo do site" />
        <h1 className={` ${cormorant_garamond.className} ${styles.div__h1}`}>Gedf</h1>
      </div>
        {props.estadoUsuario ? (
        <h1>fdt</h1>
        ) : (
          <>
          <div className={styles.menu} ref={divMenu}>
            <h1 className={styles.div__li}>About</h1>
            <h2 className={styles.div__li}>Features</h2>
            <h3 className={styles.div__li}>Plans and Prices</h3>
            <h4 className={styles.div__li}>Contact</h4>
          </div>

            <div className={styles.menu__usuario}>
              <button className={styles.usuario__login}>
                Login
              </button>

              <button className={styles.usuario__sing}>
                Sign up
              </button>
            </div>
          </>
        )}
    </div>
  );
}

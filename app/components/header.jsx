import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';
import styles from '../../src/Sass/header.module.sass';
import useAutoRespon from '../../lib/useAutoRespon';
import { Menu } from 'lucide-react';

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ['normal'], weight: ['300'] });

const MenuItems = ({ items }) => (
  <>
    {items.map((item, index) => (
      <h1 key={index} className={styles.menu__item}>{item}</h1>
    ))}
  </>
);

export default function Header({ estadoUsuario }) {
  const divMenu = useRef(null);

  useEffect(() => {
    divMenu.current?.classList.add(styles.menuVisible);
  }, []);

  const autoRespon = useAutoRespon(
    "600px", "sass-mudule", "src/Sass/header.module.sass", 
    "menu__icon", "menu__list", "menu__item");

  console.log(autoRespon)

  return (
    <div className={styles.div}>
      <div className={styles.div__logo}>
        <img src="/img/logo.png" alt="logo do site"/>
        <h1 className={` ${cormorant_garamond.className} ${styles.div__h1}`}>Gedf</h1>
      </div>
      {estadoUsuario ? (         
          <div className={styles.menu} ref={divMenu}>
           <Menu className={styles.menu__icon} />
            <MenuItems className={styles.menu__list} items={["Overview", "Your performance", "Learn how to use", "Settings", "About", "Contact"]} />
          </div>
      ) : (
        <>
          <div className={styles.menu} ref={divMenu}>
            <Menu /> 
            <MenuItems items={["About", "Features", "Plans and Prices", "Contact"]} />
          </div>

          <div className={styles.menu__usuario}>
            <button className={styles.usuario__login}>Login</button>
            <button className={styles.usuario__sing}>Sign up</button>
          </div>
        </>
      )}
    </div>
  );
}

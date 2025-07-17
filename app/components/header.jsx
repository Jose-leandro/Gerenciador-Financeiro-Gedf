import React, { useRef, useEffect, forwardRef } from 'react';
import Image from 'next/image';
import { Cormorant_Garamond } from 'next/font/google';
import styles from '../../src/Sass/header.module.scss';
import useAutoRespon from '../../lib/autoRespon/useAutoRespon';
import { Menu } from 'lucide-react';

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ['normal'], weight: ['300'] });

const MenuItems = ({ items, setRef }) => (
  <>
    {items.map((item, index) => (
      <h1
        key={index}
        className={styles.menu__item}
        ref={(el) => setRef(el, index)} // Dynamically assign refs
      >
        {item}
      </h1>
    ))}
  </>
);


export default function Header({ estadoUsuario }) {
  const div = useRef(null);
  const menuIcon = useRef(null);
  const divMenu = useRef(null);
  const menu = useRef(null);
  const menuUsuario = useRef(null);
  const menuItem = useRef(null)
  const usuarioSing = useRef(null)
  const usuarioLogin = useRef(null)

  const menuItemRefs = useRef([]); // Array of refs

    // Initialize refs dynamically
    const setMenuItemRef = (el, index) => {
      menuItemRefs.current[index] = el; // Store each element in the array
    };
    
  // useEffect(() => {
  //   divMenu.current?.classList.add(styles.menuVisible);
  // }, []);

  const elements = {
    div: {
      classOfElement: div,
      type: 'div'
    },
    menuIcon: {
      classOfElement: menuIcon,
      type: 'image'
    },
    divMenu: {
      classOfElement: divMenu,
      type: 'div'
    },
    menu: {
      classOfElement: menu,
      type: 'div'
    },
    menuUsuario: {
      classOfElement: menuUsuario,
      type: 'div'
    }, 
    menuItem: {
      classOfElement: menuItemRefs.current,
      type: 'h1'
    },
    usuarioLogin: {
      classOfElement: usuarioLogin,
      type: 'button'
    },
    usuarioSing: {
      classOfElement: usuarioSing,
      type: 'button'
    }
  };
  // console.log(elements)

//   useEffect(() => {
//     console.log({
//         div: div.current,
//         menuIcon: menuIcon.current,
//         divMenu: divMenu.current,
//         menu: menu.current,
//         menuUsuario: menuUsuario.current,
//         menuItemRefs: menuItemRefs.current,
//         usuarioLogin: usuarioLogin.current,
//         usuarioSing: usuarioSing.current,
//     });
// }, []);

  // const autoRespon = useAutoRespon(
  //   600, elements, "menu");

    // useEffect(() => {
    //   console.log(menuItemRefs.current); // Logs all <h1> elements
    // }, []);

  // console.log(autoRespon)

  return (
    <div className={styles.div} ref={div} >
      <div className={styles.div__logo}>
        <Image  src="/img/logo.png" alt="logo do site" width={70} height={79} />
        <h1 className={` ${cormorant_garamond.className} ${styles.div__h1}`}>Gedf</h1>
      </div>
      {estadoUsuario ? (
        <>
          <Menu className={styles.menu__icon} ref={menuIcon} />
          <div className={styles.menu} ref={menu}>
            <MenuItems className={styles.menu__list} items={["Overview", "Your performance", "Learn how to use", "Settings", "About", "Contact"]}
            setRef={setMenuItemRef} />
          </div>
        </>
      ) : (
        <>
          <Menu className={styles.menu__icon} ref={menuIcon} />
          <div className={styles.div__menu} ref={divMenu}>
            <div className={styles.menu} ref={menu}>
              <MenuItems items={["About", "Features", "Plans and Prices", "Contact"]} 
                setRef={setMenuItemRef} />
            </div>

            <div className={styles.menu__usuario} ref={menuUsuario}>
              <button className={styles.usuario__login} ref={usuarioLogin}>Login</button>
              <button className={styles.usuario__sing} ref={usuarioSing}>Sign up</button>
            </div>
          </div>
        </>
      )}

      <div>
        <h1>EN</h1>
        <button>^</button>
      </div>
    </div>
  );
}

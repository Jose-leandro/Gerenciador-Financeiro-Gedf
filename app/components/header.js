import styles from "../../src/Sass/header.module.sass"
import Image from "next/image"
import { Cormorant_Garamond } from 'next/font/google'
import { useRef } from "react"
import { useEffect } from "react"

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ["normal"], weight: ['300'] })

export default function Header(props) {
    const divMenu = useRef(null)

    useEffect(() => {
    
        if (divMenu && divMenu.current) {
            divMenu.current.style.display = 'flex';
        }
    }, [])



    return (
        <div className={styles.div}>
            <div className={styles.div__logo}>
                <Image src="/img/logo.png" width={70} height={80} alt="logo do site" />
                <h1 className={` ${cormorant_garamond.className} ${styles.div__h1}`}>Gedf</h1>
            </div>
            <div className={styles.menu} ref={divMenu}>
                {props.estadoUsuario ? (
                    <ul className={styles.div__ul}>
                        <li>Visão geral</li>
                        <li>Seu desempenho</li>
                        <li>Aprenda como usar</li>
                        <li>Configurações</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                    </ul>
                ) : (
                    <>
                        <ul className={styles.div__ul}>
                            <li className={styles.div__li}>Sobre</li>
                            <li className={styles.div__li}>Funcionalidades</li>
                            <li className={styles.div__li}>Planos e preços</li>
                            <li className={styles.div__li}>Contato</li>
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
    )
}
import styles from "../../src/Sass/header.module.sass"
import Image from "next/image"
import { Cormorant_Garamond } from 'next/font/google'

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ["normal"], weight: ['300'] })

export default function Header(props) {
    return (
        <div className={styles.div}>
            <div className={styles.div__logo}>
                <Image src="/img/logo.png" width={70} height={80} alt="logo do site" />
                <h1 className={` ${cormorant_garamond.className} ${styles.div__h1}`}>Gedf</h1>
            </div>
            <div className={styles.menu}>
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
                    <ul className={styles.div__ul}>
                        <li>Sobre</li>
                        <li>Funcionalidades</li>
                        <li>Planos e preços</li>
                        <li>Contato</li>
                    </ul>
                )}
            </div>
        </div>
    )
}
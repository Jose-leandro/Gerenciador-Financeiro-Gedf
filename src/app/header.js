import  styles from "../sass/header.module.sass"
import Image from "next/image"
import { Cormorant_Garamond } from 'next/font/google'

 const cormorant_garamond = Cormorant_Garamond({  subsets: ['latin'], style: ["normal"], weight: ['300'] })

export default function Header() {
    return (
        <div className={styles.div}>
            <div className={styles.div__logo}>
                <Image src="/img/logo.png" width={70} height={80} alt="logo do site" />
                <h1 className={` ${cormorant_garamond.className} ${styles.div__h1}`}>Gedf</h1>
            </div>
            <div className={styles.menu}>
                <ul className={styles.div__ul}>
                    <li>Visão geral</li>
                    <li>Configurações</li>
                    <li>Sobre</li>
                </ul>
            </div>
        </div>
    )
}
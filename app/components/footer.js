
import stylesFooter from '../../src/Sass/footer.module.sass'

import Image from "next/image"
import { Cormorant_Garamond } from 'next/font/google'

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ["normal"], weight: ['300'] })

export default function Footer() {
    return (
        <>
            <div className={stylesFooter.footer__logo}>
                <Image src="/img/logo.png" width={70} height={80} alt="logo do site" />
                <h1 className={` ${cormorant_garamond.className} ${stylesFooter.logo__h1}`}>Gedf</h1>
            </div>

            <div className={stylesFooter.footer__informacoes}>

                <div>
                    <h2 className={stylesFooter.footer__titulo} >Sobre nós</h2>
                    <ul>
                        <li>O que é GEDF</li>
                    </ul>
                </div>

                <div>
                    <h2 className={stylesFooter.footer__titulo}>Contato</h2>
                    <ul>
                        <li>Por Telefone</li>
                        <li>Por email</li>
                        <li>Whatsapp</li>
                        <li>E Mais</li>
                    </ul>
                </div>

                <div>
                    <h2 className={stylesFooter.footer__titulo}>Termos e políticas</h2>
                    <ul>

                        <li>Termos de uso</li>
                        <li>Polítca de privadicade</li>
                        <li>Política de cookies</li>
                    </ul>
                </div>

                <div>
                    <h2 className={stylesFooter.footer__titulo}>Direitos autorais</h2>
                    <ul>
                        <li>Uso de imagens e icones</li>
                    </ul>
                </div>
            </div>

            <div className={stylesFooter.desenvolvedor}>
                <h3 className={stylesFooter.desenvolvedor__nome}>&copy; Desenvolvido por José Leandro</h3>
            </div>

        </>
    )
}
"use client"
import stylesMain from '../../../Sass/main.module.sass'
import Image from "next/image"

import React, { useRef, useEffect, useState } from 'react';
function Main() {

    const categoriaCasa = useRef(null);
    const categoriaSaude = useRef(null);

    const [botaoClicado, setBotaoClicado] = useState(false);

    useEffect(() => {
        if (botaoClicado) {

            const categoriasOcultas = { "categoriaCasa": categoriaCasa, "categoriaSaude": categoriaSaude }

            for (var chave in categoriasOcultas) {

                if (categoriasOcultas.hasOwnProperty(chave)) {
                    // console.log("Chave: " + chave + ", Valor: " + categoriasOcultas[chave]);
                    categoriasOcultas[chave].current.style.display = "flex";
                }
            }
        };
    }, [botaoClicado]);

    const handleClick = () => {
        setBotaoClicado(true);
    };

    return (
        <>
            <h1 className={stylesMain.main__h1}>Adicionar gasto</h1>
            <div className={stylesMain.main__container}>

                <div className={stylesMain.container__gasto}>

                    <label>Valor gasto</label>
                    <input type="text" placeholder='Digite o valor gastado' className={stylesMain.gasto__input}></input>

                    <label>Descrição</label>
                    <input type="text" placeholder='Descreva o seu gasto' className={stylesMain.gasto__input}></input>

                </div>

                <div className={stylesMain.container__categorias}>

                    <label>Selecione a categoria</label>

                    <button className={stylesMain.categorias__alimentacao}>
                        <Image src="/img/icons8-rice-bowl-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Alimentação
                    </button>

                    <button className={stylesMain.categorias__roupas}>
                        <Image src="/img/icons8-clothes-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Roupas
                    </button>

                    <button className={stylesMain.categorias__trasnporte}>
                        <Image src="/img/icons8-car-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Transporte
                    </button>

                    <button className={stylesMain.categorias__expandir} onClick={handleClick} data-testid="botao">
                        <Image src="/img/icons8-seta-para-expandir-32.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                    </button>

                    <button className={stylesMain.categorias__casa} ref={categoriaCasa} data-testid="categoriaCasa">
                        <Image src="/img/icons8-home-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Casa
                    </button>
                    
                    <button className={stylesMain.categorias__saude} ref={categoriaSaude} data-testid="categoriaSaude">
                        <Image src="/img/icons8-health-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Saúde
                    </button>

                </div>

                <div>
                    <div className={stylesMain.selecao__pagamento}>

                        <label>Pagado ou Pretende</label>
                        <button className={stylesMain.pagamento__button}>Já pague</button>
                        <button className={stylesMain.pagamento__button}>Ainda não pague</button>
                    </div>

                    <div className={stylesMain.container__mais}>
                        <label>Adicionar mais</label>
                        <Image src="/img/icons8-mais-96.png" width={40} height={40} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Main;


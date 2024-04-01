"use client"
import stylesMain from '../../../Sass/main.module.sass'
import Image from "next/image"

import React, { useRef, useEffect, useState } from 'react';
import supabase from '../../../../utils/dbConnection';


function AdicaoGastos() {

    const throwError = () => {
        throw new Error("Ocorreu um erro!");
    }

    const inputValor = useRef();

    const categoriaAlimentacao = useRef();
    const categoriaRoupa = useRef();
    const categoriaTrasnporte = useRef();
    const categoriaCasa = useRef();
    const categoriaSaude = useRef();

    const pagamentoPagado = useRef();
    const pagamentoNaoPagado = useRef();

    const inputDescricao = useRef();

    const selecionadoAlimentacao = useRef();
    const selecionadoRoupas = useRef();
    const selecionadoTransporte = useRef();
    const selecionadoCasa = useRef();
    const selecionadoSaude = useRef();

    const selecionadoPagado = useRef();
    const selecionadoNaoPagado = useRef();

    const [botaoClicado, setBotaoClicado] = useState(false);

    const [botaoClicadoAlimentacao, setBotaoClicadoAlimentacao] = useState(false);
    const [botaoClicadoRoupas, setBotaoClicadoRoupas] = useState(false);
    const [botaoClicadoTransporte, setBotaoClicadoTransporte] = useState(false);
    const [botaoClicadoCasa, setBotaoClicadoCasa] = useState(false);
    const [botaoClicadoSaude, setBotaoClicadoSaude] = useState(false);

    const [botaoClicadoPagado, setBotaoClicadoPagado] = useState(false);
    const [botaoClicadoNaoPagado, setBotaoClicadoNaoPagado] = useState(false);


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

    useEffect(() => {
        if (botaoClicadoAlimentacao) {
            selecionadoAlimentacao.current.style.display = "flex";

            return;
        };

        if (botaoClicadoCasa) {
            selecionadoCasa.current.style.display = "flex";
            
            return;
        };

        if (botaoClicadoRoupas) {
            selecionadoRoupas.current.style.display = "flex";

            return;
        };

        if (botaoClicadoSaude) {
            selecionadoSaude.current.style.display = "flex";

            return;
        };

        if (botaoClicadoTransporte) {
            selecionadoTransporte.current.style.display = "flex";

            return;
        };

    }, [botaoClicadoAlimentacao], [botaoClicadoCasa], [botaoClicadoRoupas], [botaoClicadoSaude], [botaoClicadoTransporte]);


    useEffect(() => {

        if (botaoClicadoPagado) selecionadoPagado.current.style.display = "flex";
        
        if (botaoClicadoNaoPagado) selecionadoNaoPagado.current.style.display = "flex";

    }, [botaoClicadoPagado], [botaoClicadoNaoPagado]);

    const handleClick = () => {
        setBotaoClicado(true);
    };

    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
    const [pagamentoSelecionado, setPagamentoSelecionado] = useState("");

    const handleClickSelecinadasCategorias = (valueBtnClicado) => {
        console.log(valueBtnClicado)
        if (valueBtnClicado == "roupas") setBotaoClicadoRoupas(true);
        if (valueBtnClicado == "alimentacao") setBotaoClicadoAlimentacao(true);
        if (valueBtnClicado == "trasnporte") setBotaoClicadoTransporte(true);
        if (valueBtnClicado == "casa") setBotaoClicadoCasa(true);
        if (valueBtnClicado == "saude") setBotaoClicadoSaude(true);

       setCategoriaSelecionada(valueBtnClicado)
    };

    const handleClickSelecinadasPagamento = (valueBtnClicado) => {
        console.log(valueBtnClicado)
        if (valueBtnClicado == "pagado") {
            setBotaoClicadoPagado(true);
        }

        if(valueBtnClicado == "naopagado") setBotaoClicadoNaoPagado(true);

        setPagamentoSelecionado(valueBtnClicado)
    };

    const armazenarGastosUsuarios = async () => {
        console.log(pagamentoSelecionado)
        console.log(categoriaSelecionada)

        const { data, error } = await supabase
            .from('Gastos')
            .insert([
                {
                    valor_gasto: inputValor.current.value ? inputValor.current.value : throwError(),
                    descricao: inputDescricao.current.value ? inputDescricao.current.value : throwError(),
                    categoria: pagamentoSelecionado ? pagamentoSelecionado : throwError(),
                    pendente_pagado: categoriaSelecionada ? categoriaSelecionada : throwError()
                },
            ])
            .select()

        // Armazenar um objeto no navegador
        let informacoesInsiridasGasto = {
            valorGasto: inputValor.current.value ? inputValor.current.value : throwError(),
            descricao: inputDescricao.current.value ? inputDescricao.current.value : throwError(),
            categoria: pagamentoSelecionado ? pagamentoSelecionado : throwError(),
            pendente_pagado: categoriaSelecionada ? categoriaSelecionada : throwError()
        };
        localStorage.setItem("informacoesInsiridasGasto", JSON.stringify(informacoesInsiridasGasto));

    }
    // armazenarGastosUsuarios();


    return (
        <>
            <h1 className={stylesMain.main__h1}>Adicionar gasto</h1>
            <div className={stylesMain.main__container}>

                <div className={stylesMain.container__gasto}>

                    <label>Valor gasto</label>
                    <input type="text" placeholder='Digite o valor gastado' className={stylesMain.gasto__input} ref={inputValor}></input>

                    <label>Descrição</label>
                    <input type="text" placeholder='Descreva o seu gasto' className={stylesMain.gasto__input} ref={inputDescricao}></input>

                </div>

                <div className={stylesMain.container__categorias}>

                    <label>Selecione a categoria</label>

                    <button className={stylesMain.categorias__alimentacao} ref={categoriaAlimentacao} value={"alimentacao"} onClick={() => {
                        if (categoriaAlimentacao.current) {
                            handleClickSelecinadasCategorias(categoriaAlimentacao.current.value)
                        }
                    }}>
                        <Image src="/img/icons8-rice-bowl-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Alimentação
                        <Image src="/img/icons8-selecionado-48.png" className={stylesMain.alimentacao__selecionada} ref={selecionadoAlimentacao} width={25} height={25} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                    </button>

                    <button className={stylesMain.categorias__roupas} value={"roupas"} ref={categoriaRoupa} onClick={() => {
                        if (categoriaRoupa.current) {
                            handleClickSelecinadasCategorias(categoriaRoupa.current.value)
                        }
                    }}>
                        <Image src="/img/icons8-clothes-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Roupas
                        <Image src="/img/icons8-selecionado-48.png" className={stylesMain.roupas__selecionada} ref={selecionadoRoupas} width={25} height={25} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                    </button>

                    <button className={stylesMain.categorias__trasnporte} value={"trasnporte"} ref={categoriaTrasnporte} onClick={() => {
                        if (categoriaTrasnporte.current) {
                            handleClickSelecinadasCategorias(categoriaTrasnporte.current.value)
                        }
                    }}>
                        <Image src="/img/icons8-car-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Transporte
                        <Image src="/img/icons8-selecionado-48.png" className={stylesMain.transporte__selecionada} ref={selecionadoTransporte} width={25} height={25} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                    </button>

                    <button className={stylesMain.categorias__expandir} onClick={handleClick} data-testid="botaoExpandir">
                        <Image src="/img/icons8-seta-para-expandir-32.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                    </button>

                    <button className={stylesMain.categorias__casa} ref={categoriaCasa} data-testid="categoriaCasa" value={"casa"} onClick={() => {
                        if (categoriaCasa.current) {
                            handleClickSelecinadasCategorias(categoriaCasa.current.value)
                        }
                    }}>
                        <Image src="/img/icons8-home-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Casa
                        <Image src="/img/icons8-selecionado-48.png" className={stylesMain.casa__selecionada} ref={selecionadoCasa} width={25} height={25} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                    </button>

                    <button className={stylesMain.categorias__saude} ref={categoriaSaude} data-testid="categoriaSaude" value={"saude"} onClick={() => {
                        if (categoriaSaude.current) {
                            handleClickSelecinadasCategorias(categoriaSaude.current.value)
                        }
                    }}>
                        <Image src="/img/icons8-health-48.png" width={30} height={30} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        Saúde
                        <Image src="/img/icons8-selecionado-48.png" className={stylesMain.saude__selecionada} ref={selecionadoSaude} width={25} height={25} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                    </button>

                </div>

                <div>
                    <div className={stylesMain.selecao__pagamento}>

                        <label>Pagado ou Pretende</label>
                        <button className={stylesMain.pagamento__button} value={"pagado"} data-testid="botaoPagado" ref={pagamentoPagado} onClick={() => {
                            if (pagamentoPagado.current) {
                                handleClickSelecinadasPagamento(pagamentoPagado.current.value)
                            }
                        }}>
                            Já pague
                            <Image src="/img/icons8-selecionado-48.png" className={stylesMain.pagado__selecionado} data-testid="pagado_img-selecionado" ref={selecionadoPagado} width={25} height={25} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        </button>

                        <button className={stylesMain.pagamento__button} value={"naopagado"} data-testid="botaoNaoPagado" ref={pagamentoNaoPagado} onClick={() => {
                            if (pagamentoNaoPagado.current) {
                                handleClickSelecinadasPagamento(pagamentoNaoPagado.current.value)
                            }
                        }}>
                            Ainda não pague
                            <Image src="/img/icons8-selecionado-48.png" className={stylesMain.nao_pagado__selecionado} data-testid="nao_pagado_img-selecionado" ref={selecionadoNaoPagado} width={25} height={25} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                        </button>
                    </div>

                    <div className={stylesMain.container__mais}>
                        <label>Adicionar mais</label>
                        <Image src="/img/icons8-mais-96.png" width={40} height={40} alt="Icone para adicionar mais infromaçãoes ao seu gasto" />
                    </div>
                </div>

            </div >
            <button className={stylesMain.main__btn_registar} onClick={armazenarGastosUsuarios}>Registar gasto</button>
        </>
    )
}

export default AdicaoGastos;


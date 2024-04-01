import { Cormorant_Garamond } from 'next/font/google'

const cormorant_garamond = Cormorant_Garamond({ subsets: ['latin'], style: ["normal"], weight: ['300'] })


export default function TelaInicial() {
    return (
        <>
            <h1 className={`${cormorant_garamond.className} ${styles.main__h1}`}>Bem-vindo ao GEDF! Estamos felizes em ter você aqui</h1>

            <div className={styles.main__div}>
                <div className={styles.div__renda}>

                    <button className={styles.renda__button}>Minha Renda</button>
                    <p className={styles.renda__p}>
                        Para começar, queremos saber mais sobre sua renda.<br />
                        Dessa forma, poderemos apresentar-lhe uma análise mais completa e reveladora sobre suas finanças, <br />
                        ajudando você a ter mais controle e clareza sobre sua situação econômica.

                    </p>

                </div>

                <div className={styles.div__gastos}>

                    <button className={styles.gastos__button} oncli>Meus gastos</button>
                    <p className={styles.gastos__p}>
                        Para começar, queremos saber mais sobre seus gastos, seja qual for o tamanho. <br />
                        Cada detalhe conta! Vamos te mostrar onde, o quê e quanto você está gastando.  <br />
                        Assim, você terá um controle total e uma visão mais precisa das suas finanças.
                    </p>

                </div>

                <div className={styles.div__desempenho}>

                    <button className={styles.desempenho__button}>Meu desempenho</button>
                    <p className={styles.desempenho__p}>
                        Bem-vindo à sua área de desempenho financeiro! Aqui, você terá uma visão completa do seu desempenho ao longo do tempo. <br />
                        Mostraremos seus principais gastos, seus ganhos mensais e ofereceremos dicas valiosas para que você alcance seus objetivos financeiros.
                    </p>

                </div>
            </div>
        </>
    )
}
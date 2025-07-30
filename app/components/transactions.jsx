import React, { useEffect, useState } from "react";
import stylesIncomes from "../../src/Sass/transactions.module.scss";
import DialogSpends from "./ui/dialog-spends";

export default function Transactions({name, lastTransactions, transactionsId, mode}) {
    console.log(lastTransactions)

    return (
        <>
                <div className={stylesIncomes.lastTransactions}>    
                    <h2>
                        {lastTransactions?.name}
                        , This It is You Last Transactions</h2>

                    <div className={stylesIncomes.lastTransactions__container}>

                    {Array.isArray(lastTransactions) &&
                        lastTransactions.map((elements) => (
                            <div className={stylesIncomes.container}>
                                <div className={stylesIncomes.container__div}>
                                    <div>
                                        <h2>{elements.description}</h2>
                                        <span>R$ {elements.value}</span>
                                    </div>

                                    <div>
                                        <h3>{elements.name}</h3>
                                        <span>{elements.date}</span>
                                    </div>
                                </div>

                                <DialogSpends transactionsId={transactionsId} mode={mode}  />
                            </div>
                        ))}

                         </div>
                </div>
              </>
    )
}
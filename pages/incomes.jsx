import React from "react";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import informationCardFooter from "@/data/informationCardFooter";
import dataSpends from "@/data/dataSpends";
import stylesIncomes from "../src/Sass/incomes.module.sass"
import DialogDemo from "../app/components/ui/dialog-income";

function Incomes() {


    const dateInformationFooter = informationCardFooter;
    console.log(dateInformationFooter)

    const incomesTotal = 2000

    const dataSpendsInformation = ""

    return (
        <>
            <Header />
            <main>
                <div>

                    <h1 className={styles.main__title}  >Income Manager</h1>

                    <div>
                        <div className={stylesIncomes.title__total} >

                            <div>

                                <h2>Total Incomes</h2>
                                <h3> R${incomesTotal}</h3>
                            </div>
                            {/* <button> + Add Spend </button> */}
                            <DialogDemo />
                        </div>

                        {/* {
                            dataSpendsInformation.forEach((titleIncome, categoryIncome, amountIncomes, dataOfIncome) => {
                                <div>
                                    <img src="" alt="" />
                                    <div>

                                        <h3> {titleIncome} </h3>
                                        <span> {categoryIncome} </span>
                                    </div>

                                    <div>

                                        <h3> R${amountIncomes} </h3>

                                        <div>
                                            <img></img>
                                            <h3> {dataOfIncome} </h3>
                                        </div>

                                    </div>
                                </div>
                            })
                        } */}
                    </div>

                </div>

            </main>
            <Footer dateInformationFooter={dateInformationFooter} />
        </>
    )
}


export default Incomes;
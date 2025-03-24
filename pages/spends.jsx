import React from "react";
import Header from "../app/components/header";
import Footer from "../app/components/footer";
import informationCardFooter from "@/data/informationCardFooter";
import dataSpends from "@/data/dataSpends";
import styles from "../src/Sass/spends.module.sass"
import DialogDemo from "../app/components/ui/dialog";

function Spends() {


    const dateInformationFooter = informationCardFooter;
    console.log(dateInformationFooter)

    const dataSpendsInformation = dataSpends;

    return (
        <>
            <Header />
            <main>
                <div>

                    <h1 className={styles.main__title}  >My Spends</h1>

                    <div>
                        <div className={styles.title__btn} >

                            <h2>Recent Spends</h2>
                            {/* <button> + Add Spend </button> */}
                            <DialogDemo />
                        </div>

                        {
                            dataSpendsInformation.forEach((titleSpend, dataSpend, amountSpent) => {
                                <div>
                                    <div>

                                        <h3> {titleSpend} </h3>
                                        <span> {dataSpend} </span>
                                    </div>

                                    <h3> {amountSpent} </h3>
                                </div>
                            })
                        }
                    </div>

                </div>

            </main>
            <Footer dateInformationFooter={dateInformationFooter} />
        </>
    )
}


export default Spends;
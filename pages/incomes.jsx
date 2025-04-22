import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../app/components/header"));
const Footer = dynamic(() => import("../app/components/footer"));
const IncomeChart = dynamic(() => import("../app/components/incomeChart"));
const DialogIncome = dynamic(() => import("../app/components/ui/dialog-income"));

// Static imports
import informationCardFooter from "@/data/informationCardFooter";
import stylesIncomes from "../src/Sass/incomes.module.sass";
import Image from "next/image";


export default function Incomes() {

    const dateInformationFooter = informationCardFooter;
    console.log(dateInformationFooter)

    const incomesTotal = 2000
    const informatioAddcional = "Your Spender 20% more of last month"

    const dataSpendsInformation = [
        {
            titleIncome: 'Freelance Project',
            categoryIncome: 'Work',
            amountIncomes: 1200,
            dataOfIncome: '2025-04-21'
        },
        {
            titleIncome: 'Gift',
            categoryIncome: 'Other',
            amountIncomes: 200,
            dataOfIncome: '2025-04-15'
        },
        {
            titleIncome: 'Salary',
            categoryIncome: 'Work',
            amountIncomes: 3000,
            dataOfIncome: '2025-04-01'
        }
    ];

    const barData = [
        { category: 'Salary', amount: 3500 },
        { category: 'Freelance', amount: 1200 },
        { category: 'Gift', amount: 400 },
        { category: 'Investments', amount: 850 },
    ];

    const pieData = [
        { name: 'Salary', value: 3500 },
        { name: 'Freelance', value: 1200 },
        { name: 'Gift', value: 400 },
        { name: 'Investments', value: 850 },
    ];


    return (
        <>
            <Header />
            <main>
                <div>

                    <h1 className={stylesIncomes.main__title}  >Income Manager</h1>

                    <div className={stylesIncomes.income}>
                        <div className={stylesIncomes.total_income} >

                            <h2>Total Incomes</h2>
                            <h3> R${incomesTotal}</h3>

                            <span> {informatioAddcional} </span>
                        </div>

                        <div className={stylesIncomes.dialog}>
                            <DialogIncome />
                        </div>

                        <IncomeChart
                            type="bar"
                            title="Monthly Income by Category"
                            data={barData}
                            dataKey="amount"
                            xKey="category" />

                        <IncomeChart
                            type="pie"
                            title="Income Distribution"
                            data={pieData}
                            dataKey="value"
                            nameKey="name"
                        />

                        <div className={stylesIncomes.lastTransactions}>
                            {
                                dataSpendsInformation.map((item, index) => (
                                    <div key={index}>
                                        <Image src="" alt="" width={0} height={0} />

                                        <div>
                                            <h3>{item.titleIncome}</h3>
                                            <span>{item.categoryIncome}</span>
                                        </div>

                                        <div>
                                            <h3>R${item.amountIncomes}</h3>

                                            <div>
                                                <img alt="" />
                                                <h3>{item.dataOfIncome}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>

                </div>

            </main>
            <Footer dateInformationFooter={dateInformationFooter} />
        </>
    )
}

import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../app/components/header"));
const Footer = dynamic(() => import("../app/components/footer"));
const IncomeChart = dynamic(() => import("../app/components/incomeChart"));
const DialogIncome = dynamic(() =>
  import("../app/components/ui/dialog-income")
);

// Static imports
import informationCardFooter from "@/data/informationCardFooter";
import stylesIncomes from "../src/Sass/incomes.module.sass";
import Image from "next/image";

export default function Incomes() {
  const dateInformationFooter = informationCardFooter;
  console.log(dateInformationFooter);

  const incomesTotal = 2000;
  const informatioAddcional = "Your Spender 20% more of last month";

  const barData = [
    { category: "Salary", amount: 3500 },
    { category: "Freelance", amount: 1200 },
    { category: "Gift", amount: 400 },
    { category: "Investments", amount: 850 },
  ];

  const pieData = [
    { name: "Salary", value: 3500 },
    { name: "Freelance", value: 1200 },
    { name: "Gift", value: 400 },
    { name: "Investments", value: 850 },
  ];

  const dataSpendsInformation = [
    {
      type: {
        img: "img",
        category: "Groceries",
      },
      date: "2025-06-01",
      value: 120.5,
      status: "Paid",
      people: "Alice",
      action: {
        edit: "edit",
        delete: "delete",
      },
    },
    {
      type: {
        img: "img",
        category: "Transport",
      },
      date: "2025-06-02",
      value: 15.0,
      status: "Pending",
      people: "Bob",
      action: {
        edit: "edit",
        delete: "delete",
      },
    },
    {
      type: {
        img: "img",
        category: "Dining Out",
      },
      date: "2025-06-03",
      value: 60.0,
      status: "Paid",
      people: "Charlie",
      action: {
        edit: "edit",
        delete: "delete",
      },
    },
    {
      type: {
        img: "img",
        category: "Subscription",
      },
      date: "2025-06-04",
      value: 9.99,
      status: "Failed",
      people: "Dana",
      action: {
        edit: "edit",
        delete: "delete",
      },
    },
    {
      type: {
        img: "img",
        category: "Utilities",
      },
      date: "2025-06-05",
      value: 75.25,
      status: "Paid",
      people: "Evan",
      action: {
        edit: "edit",
        delete: "delete",
      },
    },
  ];

  const keys = Array.from(
    new Set(dataSpendsInformation.flatMap((item) => Object.keys(item)))
  );

  return (
    <>
      <Header />
      <main>
        <div>
          <h1 className={stylesIncomes.main__title}>Income Manager</h1>

          <div className={stylesIncomes.income}>
            <IncomeChart
              type="bar"
              title="Monthly Income by Category"
              data={barData}
              dataKey="amount"
              xKey="category"
            />

            <div className={stylesIncomes.income__contener}>
              <div className={stylesIncomes.total_income}>
                <h2>Total Incomes</h2>
                <h3> R${incomesTotal}</h3>

                <span> {informatioAddcional} </span>
              </div>

              <div className={stylesIncomes.dialog}>
                <DialogIncome />
              </div>
            </div>

            <IncomeChart
              type="pie"
              title="Income Distribution"
              data={pieData}
              dataKey="value"
              nameKey="name"
            />
          </div>

          <div className={stylesIncomes.lastTransactions}>
            <div></div>

            <div className={stylesIncomes.lastTransactions__dates}>
              <div>
                {keys.map((key) => (
                  <span className={stylesIncomes.lastTransactions__span}>
                    {key}
                  </span>
                ))}
              </div>

              {dataSpendsInformation.map((item, index) => (
                <div>
                  <>
                    {/* Access nested type.category and type.img */}
                    <span>
                      <img src={item.type.img} alt={item.type.category} />
                      {item.type.category}
                    </span>

                    <h3>{item.date}</h3>

                    <h3>{item.value}</h3>

                    <h3>{item.status}</h3>

                    <h3>{item.people}</h3>

                    {/* Access nested action.edit and action.delete */}
                    <h3>
                      <button>{item.action.edit}</button>
                      <button>{item.action.delete}</button>
                    </h3>
                  </>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer dateInformationFooter={dateInformationFooter} />
    </>
  );
}

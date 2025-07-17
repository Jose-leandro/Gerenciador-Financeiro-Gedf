import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../app/components/header"));
const Footer = dynamic(() => import("../app/components/footer"));
const IncomeChart = dynamic(() => import("../app/components/incomeChart"));
const DialogIncome = dynamic(() =>
  import("../app/components/ui/dialog-income")
);

// Static imports
import informationCardFooter from "@/data/informationCardFooter";
import stylesIncomes from "../src/Sass/incomes.module.scss";

export default function Incomes() {
const [incomesTotal, setIncomesTotal] = useState(0);
  const [informationalText, setInformationalText] = useState("");
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [dataSpendsInformation, setDataSpendsInformation] = useState([]);

   useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const userId = "leandro2";
        const res = await fetch(`https://26d0f7f0-e086-4c32-bc1f-00f90d20b01f-00-2rirapqo8k67l.riker.replit.dev/api/income/summary?userId=${userId}`);
        if (!res.ok) throw new Error("Failed to fetch dashboard data");

        const data = await res.json();

        setIncomesTotal(data.totalIncome);
        setInformationalText(data.infoText);
        setBarData(data.bar);
        setPieData(data.pie);
        setDataSpendsInformation(data.spends);
      } catch (err) {
        console.error("Error loading dashboard data:", err);
      }
    };

    fetchDashboardData();
  }, []);

  const dateInformationFooter = informationCardFooter;

  const informatioAddcional = "Your Spender 20% more of last month";

  // const dataSpendsInformation = [
  //   {
  //     type: {
  //       img: "img",
  //       category: "Groceries",
  //     },
  //     date: "2025-06-01",
  //     value: 120.5,
  //     status: "Paid",
  //     people: "Alice",
  //     action: {
  //       edit: "edit",
  //       delete: "delete",
  //     },
  //   },
  //   {
  //     type: {
  //       img: "img",
  //       category: "Transport",
  //     },
  //     date: "2025-06-02",
  //     value: 15.0,
  //     status: "Pending",
  //     people: "Bob",
  //     action: {
  //       edit: "edit",
  //       delete: "delete",
  //     },
  //   },
  //   {
  //     type: {
  //       img: "img",
  //       category: "Dining Out",
  //     },
  //     date: "2025-06-03",
  //     value: 60.0,
  //     status: "Paid",
  //     people: "Charlie",
  //     action: {
  //       edit: "edit",
  //       delete: "delete",
  //     },
  //   },
  //   {
  //     type: {
  //       img: "img",
  //       category: "Subscription",
  //     },
  //     date: "2025-06-04",
  //     value: 9.99,
  //     status: "Failed",
  //     people: "Dana",
  //     action: {
  //       edit: "edit",
  //       delete: "delete",
  //     },
  //   },
  //   {
  //     type: {
  //       img: "img",
  //       category: "Utilities",
  //     },
  //     date: "2025-06-05",
  //     value: 75.25,
  //     status: "Paid",
  //     people: "Evan",
  //     action: {
  //       edit: "edit",
  //       delete: "delete",
  //     },
  //   },
  // ];

  const keys = Array.from(
    new Set(dataSpendsInformation.flatMap((item) => Object.keys(item)))
  );

  return (
    <>
      <Header />
      <main>
        <div>
          <h1 className={stylesIncomes.main__title}>Income Manager</h1>

          <div className={stylesIncomes.container} >


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
                <span>Every income moves you closer to control.</span>
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
                {keys.map((key, index) => (
                  <span key={index} className={stylesIncomes.lastTransactions__span}>
                    {key}
                  </span>
                ))}
              </div>

              {dataSpendsInformation.map((item, index) => (
                <div>
                  <>
                    {/* Access nested type.category and type.img */}
                    <span>
                      {/* <img src={item.type.img} alt={item.type.category} /> */}
                      {/* {item.type.category} */}
                    </span>

                    {/* <h3>{item.date}</h3> */}

                    {/* <h3>{item.value}</h3> */}

                    {/* <h3>{item.status}</h3> */}

                    {/* <h3>{item.people}</h3> */}

                    {/* Access nested action.edit and action.delete */}
                    <h3>
                      {/* <button>{item.action.edit}</button> */}
                      {/* <button>{item.action.delete}</button> */}
                    </h3>
                  </>
                </div>
              ))}
            </div>
          </div>
           </div>
        </div>
      </main>
      <Footer dateInformationFooter={dateInformationFooter} />
    </>
  );
}

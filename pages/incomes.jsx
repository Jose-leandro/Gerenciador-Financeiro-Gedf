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
import Transactions from "../app/components/transactions";

export default function Incomes() {
const [incomesTotal, setIncomesTotal] = useState(0);
  const [informationalText, setInformationalText] = useState("");
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [dataSpendsInformation, setDataSpendsInformation] = useState([]);

   useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch(`https://gedf-backend.onrender.com/api/income/summary?userId=1`);
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

          <Transactions />

           </div>
        </div>
      </main>
      <Footer dateInformationFooter={dateInformationFooter} />
    </>
  );
}

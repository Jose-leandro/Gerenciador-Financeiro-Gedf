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
import stylesSpends from "../src/Sass/incomes.module.scss";
import DialogSpends from "../app/components/ui/dialog-spends";
import Transactions from "../app/components/transactions";

export default function Spends() {
const [SpendsTotal, setSpendsTotal] = useState(0);
  const [informationalText, setInformationalText] = useState("");
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [dataSpendsInformation, setDataSpendsInformation] = useState([]);

 const [transactions, setTransactions] = useState({ transactions: [], incomes: [], spends: [] });


   useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch(`https://gedf-backend.onrender.com/api/spends/summary?userId=1`);
        if (!res.ok) throw new Error("Failed to fetch dashboard data");

        const data = await res.json();

        setSpendsTotal(data.totalSpend);
        setInformationalText(data.infoText);
        setBarData(data.bar);
        setPieData(data.pie);
        setDataSpendsInformation(data.spends);

        console.log("✅ Dashboard data fetched:", data); // ✅ NOW you see the real data
        conso
      } catch (err) {
        console.error("Error loading dashboard data:", err);
      }
    };

    fetchDashboardData();

    const fetchTransactionsData = async () => {
      try {
        const res = await fetch(`https://gedf-backend.onrender.com/transactions?userId=1`);
        if (!res.ok) throw new Error("Failed to fetch transactions data");

        const data = await res.json();

        setTransactions(data)

        console.log("✅ Transactions data fetched:", data); // ✅ NOW you see the real data
      } catch (err) {
        console.error("Error loading Transactions data:", err);
      }
    };

    fetchTransactionsData()
  }, []);

  
  const dateInformationFooter = informationCardFooter;

  const informatioAddcional = "Your Spender 20% more of last month";

  const keys = Array.from(
    new Set(dataSpendsInformation.flatMap((item) => Object.keys(item)))
  );

  return (
    <>
      <Header />
      <main>
        <div>
          <h1 className={stylesSpends.main__title}>Spends Manager</h1>

          <div className={stylesSpends.container} >


          <div className={stylesSpends.income}>
            <IncomeChart
              type="bar"
              title="Monthly Spends by Category"
              data={barData}
              dataKey="amount"
              xKey="category"
            />

            <div className={stylesSpends.income__contener}>
              <div className={stylesSpends.total_income}>
                <h2>Total Spends</h2>
                <h3> R$ {SpendsTotal}</h3>

                <span> {informatioAddcional} </span>
              </div>

              <div className={stylesSpends.dialog}>
                <DialogSpends mode={"create"} />
                <span>Every Spends moves you closer to control.</span>
              </div>
            </div>

            <IncomeChart
              type="pie"
              title="Spends Distribution"
              data={pieData}
              dataKey="value"
              nameKey="name"
            />
          </div>

          {transactions?.transactions?.length > 0 && (
            <Transactions
              lastTransactions={transactions.transactions}
              transactionsId={transactions.transactions[0].id}
              mode="edit"
            />
          )}

           </div>
        </div>
      </main>
      <Footer dateInformationFooter={dateInformationFooter} />
    </>
  );
}

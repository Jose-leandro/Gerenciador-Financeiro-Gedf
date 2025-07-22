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

export default function Spends() {
const [SpendsTotal, setSpendsTotal] = useState(0);
  const [informationalText, setInformationalText] = useState("");
  const [barData, setBarData] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [dataSpendsInformation, setDataSpendsInformation] = useState([]);

   useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch(`https://gedf-backend.onrender.com/api/spends/summary?userId=1`);
        if (!res.ok) throw new Error("Failed to fetch dashboard data");

        const data = await res.json();

        setSpendsTotal(data.totalIncome);
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
                <h3> R${SpendsTotal}</h3>

                <span> {informatioAddcional} </span>
              </div>

              <div className={stylesSpends.dialog}>
                <DialogIncome />
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

          <div className={stylesSpends.lastTransactions}>
            <div></div>

            <div className={stylesSpends.lastTransactions__dates}>
              <div>
                {keys.map((key, index) => (
                  <span key={index} className={stylesSpends.lastTransactions__span}>
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

import { useEffect, useState } from "react";
import styles from "../src/Sass/Dashboard.module.scss";
import Footer from "../app/components/footer";
import Header from "../app/components/header";
import DynamicChart from "../app/components/incomeChart";
import Transactions from "../app/components/transactions";

// const defaultDashboardData = {
//   totalIncome: 0,
//   infoText: "No insights available.",
//   bar: [
//     { category: "Food", amount: 0 },
//     { category: "Transport", amount: 0 },
//     { category: "Utilities", amount: 0 },
//   ],
//   NameUser: "Leandro",
//   dailySprends: "200",
//   dailyIncome: "300",
//   totalIncome: "2000",
//   Balance: "3000",
//   totalSprends: "140"
// };

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState("");
  const [error, setError] = useState(null);
  const [dataLine, setDataLine] = useState([]);


  const today = new Date();
const options = { year: "numeric", month: "long", day: "numeric" };
const dateToday = today.toLocaleDateString("pt-BR", options);

useEffect(() => {
  const fetchDashboard = async () => {
    try {
  
      const res = await fetch(`https://gedf-backend.onrender.com/dashboard?userId=1`);

      if (!res.ok) {
        throw new Error("Failed to fetch dashboard data");
      }

      const data = await res.json();

      const formattedData = data.dailyData.map((item) => ({
        name: new Date(item.date).toLocaleDateString('en-GB'),    // X-Axis label (date)
        income: `${item.income}`, // Line 1
        spend: `${item.spend}`,   // Line 2
      }));

      console.log("✅ Dashboard data fetched:", data); // ✅ NOW you see the real data
      setDataLine(formattedData);

      setDashboardData(data)
      
      console.log("Response status:", res.status);
    } catch (err) {
      console.error("❌ Dashboard fetch error:", err);
      setError("Failed to load dashboard");
    }
  };

  fetchDashboard();
}, []);


//   if (error) return <p className="text-red-500 p-4">{error}</p>;
//   if (!dashboardData) return <p className="p-4">Loading...</p>;

  return (
   <>
  <header>
    <Header />
  </header>

  <main className={styles.dashboard}>
    <section className={styles.welcomeMessage}>
      <p className={styles.greeting}>
        Good morning, <strong>{dashboardData.nameUser}</strong>!<br />
        Today is <strong>{dateToday}</strong>. You've spent <strong>R$ {dashboardData.dailySpends}</strong> and earned <strong>R$ {dashboardData.dailyIncome}</strong>.
      </p>
    </section>

    <div className={styles.container}>
      {/* Summary Cards */}
      <section className={styles.cards}>
        <div className={styles.card}>
          <h2>Total Balance</h2>
          <p className={styles.balance}>R$ {dashboardData.balance}</p>
        </div>

        <div className={styles.card}>
          <h2>Total Income</h2>
          <p className={styles.income}>R$ {dashboardData.totalIncome}</p>
        </div>

        <div className={styles.card}>
          <h2>Total Spending</h2>
          <p className={styles.spending}>R$ {dashboardData.totalSpends}</p>
        </div>
      </section>

      {/* Income vs Spending Chart */}
      <section className={styles.chartSection}>
        <h2>Spending vs Income Overview</h2>
        <DynamicChart
          type="SimpleLineChart"
          title="Comparison Between Spending and Income"
          dataKey="value"
          nameKey="name"
          dataLine={dataLine}
        />
      </section>

      {/* Spending by Category */}
      <section className={styles.spendingBreakdown}>
        <h2>Spending by Category</h2>
        <ul className={styles.spendingList}>
          {dashboardData?.bar?.length > 0 ? (
            dashboardData.bar.map((item, i) => (
              <li key={i} className={styles.spendingItem}>
                <span className={styles.category}>{item.category}</span>
                <span className={styles.amount}>R$ {item.amount}</span>
              </li>
            ))
          ) : (
            <p>No bar data</p>
          )}
        </ul>

        {/* <Transactions transactions={dashboardData.transactions} /> */}

      </section>
    </div>
  </main>

  <Footer />
</>
  );
};

export default Dashboard;

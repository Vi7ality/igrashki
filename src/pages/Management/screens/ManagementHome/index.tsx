import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import styles from "./ManagementHome.module.scss";
import { Link } from "react-router-dom";
const clientsData = [
  { month: "Jan", amount: 400 },
  { month: "Feb", amount: 300 },
  { month: "Mar", amount: 200 },
  { month: "Apr", amount: 278 },
  { month: "May", amount: 189 },
  { month: "Jun", amount: 239 },
  { month: "Jul", amount: 349 },
  { month: "Aug", amount: 200 },
  { month: "Sep", amount: 278 },
  { month: "Oct", amount: 189 },
  { month: "Nov", amount: 239 },
  { month: "Dec", amount: 349 },
];

const toysData = [
  { month: "Jan", amount: 400 },
  { month: "Feb", amount: 300 },
  { month: "Mar", amount: 200 },
  { month: "Apr", amount: 278 },
  { month: "May", amount: 189 },
  { month: "Jun", amount: 239 },
  { month: "Jul", amount: 349 },
  { month: "Aug", amount: 200 },
  { month: "Sep", amount: 278 },
  { month: "Oct", amount: 189 },
  { month: "Nov", amount: 239 },
  { month: "Dec", amount: 349 },
];

const ManagementHome = () => {
  return (
    <main className={styles.home}>
      <h1>Керування контентом</h1>

      <div className={styles.charts}>
        <div className={styles.chart}>
          <h2>Клієнти</h2>
          <BarChart width={600} height={400} data={clientsData}>
            <Bar dataKey="amount" fill="#8884d8" />
            <XAxis dataKey="month" />
            <Tooltip />
            <YAxis />
          </BarChart>
          <Link to='/management/clients'>Переглянути всіх клієнтів</Link>
        </div>
        <div className={styles.chart}>
          <h2>Іграшки</h2>
          <BarChart width={600} height={400} data={toysData}>
            <Bar dataKey="amount" stroke="#8884d8" />
            <Tooltip />
            <XAxis dataKey="month" />
            <YAxis />
          </BarChart>
          <Link to='/management/toys'>Переглянути всі іграшки</Link>
        </div>
      </div>
    </main>
  );
};

export default ManagementHome;

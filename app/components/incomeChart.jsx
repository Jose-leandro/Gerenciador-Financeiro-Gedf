'use client';

import {
  LineChart, Line,
  BarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend 
} from 'recharts';
import styles from './../../src/Sass/IncomeChart.module.scss';

const defaultColors = ['#1b3b49', '#2e2a25', '#1f2a30', '#221c1e', '#7c8285'];

const dataLine = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function DynamicChart({
  type,
  data,
  dataKey,
  nameKey = 'name',
  xKey = 'category',
  title = '',
  colors = defaultColors
}) {
  return (
    <div className={styles.chartWrapper}>
      {title && <h2>{title}</h2>}

    <div  className={styles.separator} ></div>

      <ResponsiveContainer width="100%" height={300}>
      {type === 'bar' && (
        <BarChart data={data}>
           <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors[0]} stopOpacity={0.8} />
              <stop offset="95%" stopColor={colors[0]} stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey={xKey}
            tick={{ fill: [colors[4]], fontWeight: 600 }}
            axisLine={{ stroke:  [colors[4]] }}
          />
          <YAxis
            tick={{ fill:  [colors[4]], fontWeight: 600 }}
            axisLine={{ stroke:  [colors[4]] }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#333', borderRadius: 8, border: 'none' }}
            itemStyle={{ color: '#fff' }}
            labelStyle={{ color: '#aaa' }}
          />
          <Legend verticalAlign="top" height={36} />
          
          <Bar
            dataKey={dataKey}
            fill="url(#barGradient)"
            radius={[8, 8, 0, 0]} // top-left and top-right corners rounded
            barSize={40}
          />
        </BarChart>
      )}

  {type === 'SimpleLineChart' && ( 
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={dataLine}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  ) }

        {type === 'line' && (
          <LineChart data={data}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey={xKey} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} stroke={colors[0]} strokeWidth={2} />
          </LineChart>
        )}

        {type === 'pie' && (
          <PieChart>
  <Pie
    data={data}
    dataKey={dataKey}
    nameKey={nameKey}
    cx="50%"
    cy="50%"
    outerRadius={100}
  >
    {data.map((_, index) => (
      <Cell key={index} fill={colors[index % colors.length]} />
    ))}
  </Pie>
  <Tooltip />
          </PieChart>

        )}
      </ResponsiveContainer>
    </div>
  );
}



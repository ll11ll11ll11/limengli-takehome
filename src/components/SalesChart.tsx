import React from 'react';
import './SalesChart.css'; 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const SalesChart: React.FC = () => {
    const rows = useSelector((state: RootState) => state.table.productData.sales);
  return (
    <div className="chart-container">
    <h2>Retail Sales</h2>
    <ResponsiveContainer className="container">
      <LineChart data={rows}
        margin={{ top: 0, right: 20, left: 10, bottom: 60 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weekEnding" />
        <YAxis />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#A9A9A9" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="retailSales" stroke="#6082B6" activeDot={{ r: 8 }}/>
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;

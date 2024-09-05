import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';


const BarChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales for 2023 (M)',
        data: [3, 2, 2, 1, 5, 4],
        backgroundColor: ['rgba(75,192,192,1)', 'rgba(75,192,192,0.8)', 'rgba(75,192,192,0.6)', 'rgba(75,192,192,0.4)', 'rgba(75,192,192,0.2)', 'rgba(75,192,192,0.1)'],
      },
    ],
  };

  return <Bar ref={chartRef} data={data} />;
};

export default BarChart;

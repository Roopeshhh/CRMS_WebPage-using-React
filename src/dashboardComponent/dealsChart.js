import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ThemeContext } from '../theme/themeContext';
import '../theme/theme.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DealsChart = () => {
  const {theme}=useContext(ThemeContext);
  const data = {
    labels: ['In Pipeline', 'Follow Up', 'Schedule', 'Conversation', 'Won', 'Lost'],
    datasets: [
      {
        label: 'Deals by Stage',
        data: [400, 130, 248, 470, 470, 180],
        backgroundColor: '#17a2b8',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div className={`card ${theme==="dark"?"dashboard-custom-dark":"dashboard-custom-light"}`}>
      <Bar data={data} options={options} />
    </div>
  )
};

export default DealsChart;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WonDeals = ({ wonDealsData }) => {
  const data = {
    labels: wonDealsData?.labels || ['Inpipeline', 'Follow Up', 'Conversation'],
    datasets: [
      {
        data: wonDealsData?.data || [250, 150, 400],
        backgroundColor: '#4ade80',
        borderRadius: 4,
        barThickness: 20
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          stepSize: 100
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Won Deals Stage</h3>
        <div className="card-filters">
          <select className="filter-select">
            <option>Marketing Pipeline</option>
            <option>Sales Pipeline</option>
          </select>
          <select className="filter-select">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
          </select>
        </div>
      </div>
      <div className="chart-container">
        <Bar options={options} data={data} height={200} />
      </div>
    </div>
  );
};

export default WonDeals;

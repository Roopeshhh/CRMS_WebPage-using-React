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

const LostLeadsStage = ({ lostLeadsData }) => {
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
        max: 500
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };

  const data = {
    labels: ['Inpipeline', 'Follow Up', 'Conversation'],
    datasets: [
      {
        data: [400, 200, 350],
        backgroundColor: '#ef4444',
        borderRadius: 4,
        barThickness: 20
      }
    ]
  };

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Lost Leads Stage</h3>
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

export default LostLeadsStage;

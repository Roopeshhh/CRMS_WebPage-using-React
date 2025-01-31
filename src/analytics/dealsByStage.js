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
import './analytics.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DealsByStage = ({ dealsData }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'white',
        titleColor: '#111827',
        bodyColor: '#111827',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return context.parsed.y;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100
        }
      }
    }
  };

  const data = {
    labels: dealsData.labels,
    datasets: [
      {
        data: dealsData.data,
        backgroundColor: '#14b8a6',
        borderRadius: 4,
        barThickness: 40
      }
    ]
  };

  return (
    <div className="deals-by-stage">
      <div className="header">
        <h3>Deals By Stage</h3>
        <div className="filters">
          <select defaultValue="Sales Pipeline">
            <option>Sales Pipeline</option>
            <option>Marketing Pipeline</option>
          </select>
          <select defaultValue="Last 30 Days">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </div>
      <div className="chart-container">
        <Bar options={options} data={data} height={300} />
      </div>
    </div>
  );
};

export default DealsByStage;

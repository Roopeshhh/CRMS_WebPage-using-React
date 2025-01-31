import React from 'react';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import projectStats from './projectStats.json';
import './ProjectChart.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const ProjectsByYear = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => value + 'K'
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      }
    }
  };

  const data = {
    labels: projectStats.yearlyData.labels,
    datasets: [
      {
        label: 'project',
        data: projectStats.yearlyData.data,
        borderColor: '#E91E63',
        backgroundColor: '#E91E63',
      }
    ]
  };

  return (
    <div>
      <div className="chart-header">
        <h2>Projects by Year</h2>
        <span className="date-range">12/07/2024 - 12/13/2024</span>
      </div>
      <div className="chart-wrapper">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export const ProjectsByStage = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 20
        }
      }
    },
    cutout: '70%'
  };

  const data = {
    labels: projectStats.stageData.labels.map(
      (label, index) => `${label} - ${projectStats.stageData.data[index]}`
    ),
    datasets: [
      {
        data: projectStats.stageData.data,
        backgroundColor: projectStats.stageData.colors,
        borderWidth: 0
      }
    ]
  };

  return (
    <div>
      <div className="chart-header">
        <h2>Projects by Stage</h2>
        <span className="date-range">12/07/2024 - 12/13/2024</span>
      </div>
      <div className="chart-wrapper">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
};

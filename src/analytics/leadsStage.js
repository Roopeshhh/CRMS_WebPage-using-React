import React from 'react';
import { Bar } from 'react-chartjs-2';

const LeadsByStage = ({ leadsData }) => {
  const options = {
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
    labels: ['Inpipeline', 'Follow Up', 'Schedule', 'Conversation', 'Won', 'Lost'],
    datasets: [
      {
        data: [400, 130, 248, 470, 470, 180],
        backgroundColor: '#14b8a6',
        borderRadius: 4,
        barThickness: 40
      }
    ]
  };

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>Leads By Stage</h3>
        <div className="card-filters">
          <select className="filter-select">
            <option>Sales Pipeline</option>
            <option>Marketing Pipeline</option>
          </select>
          <select className="filter-select">
            <option>Last 30 Days</option>
            <option>Last 60 Days</option>
          </select>
        </div>
      </div>
      <div className="chart-container">
        <Bar options={options} data={data} height={300} />
      </div>
    </div>
  );
};

export default LeadsByStage;

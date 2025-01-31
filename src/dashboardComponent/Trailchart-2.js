import React, { useContext } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "../theme/themeContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const LeadsByStageCharts = () => {
  const {theme}=useContext(ThemeContext);
  const data = {
    labels: ["Conversation", "Follow Up", "InPipeline"],
    datasets: [
      {
        label: "Leads",
        data: [300, 200, 500], // Example data
        backgroundColor: "#00FF00", // Red color
        borderRadius: 5,
        barThickness: 25, // Adjusted for wider chart
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal bar chart
    responsive: true,
    maintainAspectRatio: false, // Allow fixed height customization
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Hide gridlines
        },
        ticks: {
          font: {
            size: 12, // Adjusted for better readability
          },
        },
      },
      y: {
        grid: {
          display: false, // Hide gridlines
        },
        ticks: {
          font: {
            size: 12, // Adjusted for better readability
          },
        },
      },
    },
  };

  return (
    <div
      className={`card shadow-sm p-3 ${theme==="dark"?"dashboard-custom-dark ":"dashboard-custom-light"}`}>
      <div className="d-flex justify-content-end align-items-center mb-4">
        <div>
          <select className="form-select form-select-sm d-inline-block w-auto  me-1">
            <option>Marketing Pipeline</option>
            <option>Sales Pipeline</option>
          </select>
          <select className="form-select form-select-sm d-inline-block w-auto">
            <option>Last 3 months</option>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
      </div>
      <div>
        {" "}
        {/* Remaining space for the chart */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default LeadsByStageCharts;

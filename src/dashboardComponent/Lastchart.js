import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ThemeContext } from "../theme/themeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DealsChartCard = () => {
  const { theme } = useContext(ThemeContext);
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Deals by Year",
        data: [10, 20, 30, 20, 50, 60, 40, 60, 50, 40, 30, 80],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        tension: 0, // Smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures chart stretches to fit the card
    plugins: {
      legend: {
        display: false, // Hides the legend for a cleaner design
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // No vertical gridlines
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            return value + "K"; // Format Y-axis values as '10K', '20K', etc.
          },
        },
        grid: {
          color: "#e9ecef", // Subtle gridline color
        },
      },
    },
  };

  return (
    <div
      className={`card shadow-sm border-0 ${
        theme === "dark" ? "dashboard-custom-dark " : "dashboard-custom-light "
      }`}
    >
      
        <div className="d-flex justify-content-between align-items-center p-3">
          <h6>Deals By Year</h6>
          <div>
          <div className="btn-group me-2">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sales Pipeline
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item">Option 1</button>
              </li>
              <li>
                <button className="dropdown-item">Option 2</button>
              </li>
            </ul>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Last 3 months
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item">Option 1</button>
              </li>
              <li>
                <button className="dropdown-item">Option 2</button>
              </li>
            </ul>
          </div>
          </div>
        </div>
      <div className="card-body p-0">
        {/* Chart fills remaining space */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DealsChartCard;

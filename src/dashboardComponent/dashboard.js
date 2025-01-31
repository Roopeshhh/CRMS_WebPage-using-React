import React, { useContext } from "react";
import DealsTable from "./dealsTable";
import DealsChart from "./dealsChart";
import LeadsByStageChart from "./Trailchart";
import LeadsByStageCharts from "./Trailchart-2";
import DealsChartCard from "./Lastchart";
import './dashboard.css';
import { ThemeContext } from "../theme/themeContext";
import "../theme/theme.css";

const Dashboard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`dashboard ${
        theme === "dark" ? "dashboard-custom-dark" : "dashboard-custom-light"
      }`}
    >
      <h5 className="fw-bold fs-5 mb-4">Deals Dashboard</h5>
      <div className="dashboard-content-1 mb-5">
        {/* Recently Created Deals */}
        <div className="section">
          <h6 className="fw-bolder fs-6">Recently Created Deals</h6>
          <DealsTable />
        </div>

        {/* Deals By Stage */}
        <div className="section">
          <h6 className="fw-bolder fs-6">Deals By Stage</h6>
          <DealsChart />
        </div>

        <div className="section ">
        <h6 className="fw-bolder fs-6">Leads By Stage</h6>
          <LeadsByStageChart />
        </div>

        <div className="section">
        <h6 className="fw-bolder fs-6">Won Deals Stage</h6>
          <LeadsByStageCharts />
        </div>
      </div>
      <div className="section">
          <DealsChartCard />
        </div>
    </div>
  );
};

export default Dashboard;

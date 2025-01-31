import React, { useState } from "react";
import { BsStar } from "react-icons/bs";
import dealsData from "./Deals.json";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { BiSearch } from "react-icons/bi";
import { BsArrowsFullscreen, BsArrowRepeat } from "react-icons/bs";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const DealReport = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showManageColumns, setShowManageColumns] = useState(false);
  const [expandedSections, setExpandedSections] = useState({ owner: false });
  const [selectedOwners, setSelectedOwners] = useState(["Hendry Milner"]);
  const [selectedDeals, setSelectedDeals] = useState(["Collins"]);

  const [columns, setColumns] = useState([
    { name: "Deal Name", enabled: true },
    { name: "Stage", enabled: true },
    { name: "Deal Value", enabled: true },
    { name: "Tags", enabled: true },
    { name: "Expected Closed Date", enabled: true },
    { name: "Rating", enabled: true },
    { name: "Owner", enabled: true },
    { name: "Probability", enabled: true },
    { name: "Status", enabled: true },
    { name: "Source", enabled: true },
  ]);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const barData = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    datasets: [
      {
        label: "Won Deals",
        data: [105, 82, 98, 88, 83, 105, 88, 110, 95],
        backgroundColor: "#198754", // Green color for Won Deals
        barThickness: 20,
      },
      {
        label: "Lost Deals",
        data: [42, 52, 48, 52, 38, 58, 52, 58, 65],
        backgroundColor: "#dc3545", // Red color for Lost Deals
        barThickness: 20,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      title: {
        display: true,
        text: "Deals by Year",
        align: "start",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 120,
        ticks: {
          stepSize: 20,
        },
        grid: {
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const doughnutData = {
    labels: [
      "Campaigns - 44",
      "Google - 55",
      "Referrals - 41",
      "Paid Social - 17",
    ],
    datasets: [
      {
        data: [44, 55, 41, 17],
        backgroundColor: [
          "#0d6efd", // Blue for Campaigns
          "#6610f2", // Purple for Google
          "#dc3545", // Red for Referrals
          "#ffc107", // Yellow for Paid Social
        ],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: "Deals by Source",
        align: "start",
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  };

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-0">
            Deals Report <span className="badge bg-primary">140</span>
          </h4>
        </div>
        <div>
          <button className="btn btn-outline-secondary">
            <BsArrowsFullscreen />
          </button>
          <button className="btn btn-outline-secondary ms-2">
            <BsArrowRepeat />
          </button>
        </div>
      </div>

      {/* Charts Row */}
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Deals by Month</h5>
                <div className="date-picker">12/05/2024 - 12/11/2024</div>
              </div>
              <div style={{ height: "250px" }}>
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Deals by Stage</h5>
                <div className="date-picker">12/05/2024 - 12/11/2024</div>
              </div>
              <div style={{ height: "250px" }}>
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* table */}
      <div className="row mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                  <select className="form-select" style={{ width: "auto" }}>
                    <option value="">Sort</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                    <option value="recently-viewed">Recently Viewed</option>
                    <option value="recently-added">Recently Added</option>
                  </select>

                  <div className="date-picker">12/07/2024 - 12/13/2024</div>
                </div>
                <div className="d-flex gap-2">
                  <button className="btn btn-light">
                    <i className="bi bi-columns"></i> Manage Columns
                  </button>
                  <button
                    className="btn btn-light"
                    onClick={() => setShowFilter(true)}
                  >
                    <i className="bi bi-funnel"></i> Filter
                  </button>
                </div>
              </div>

              <div
                className="table-responsive"
                style={{ border: "1px solid #e0e0e0", borderRadius: "10px" }}
              >
                <table className="table">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" className="form-check-input" />
                      </th>
                      <th></th>
                      <th>
                        Deal Name <i className="bi bi-arrow-down"></i>
                      </th>
                      <th>
                        Stage <i className="bi bi-arrow-down"></i>
                      </th>
                      <th>
                        Deal Value <i className="bi bi-arrow-down"></i>
                      </th>
                      <th>
                        Expected Close Date <i className="bi bi-arrow-down"></i>
                      </th>
                      <th>
                        Owner <i className="bi bi-arrow-down"></i>
                      </th>
                      <th>
                        Probability <i className="bi bi-arrow-down"></i>
                      </th>
                      <th>
                        Status <i className="bi bi-arrow-down"></i>
                      </th>
                      <th>
                        Source <i className="bi bi-arrow-down"></i>
                      </th>
                      <th>
                        Created Date <i className="bi bi-arrow-down"></i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dealsData.deals.map((deal) => (
                      <tr key={deal.id}>
                        <td>
                          <input type="checkbox" className="form-check-input" />
                        </td>
                        <td>
                          <i
                            className="bi bi-star"
                            style={{ color: "#6c757d" }}
                          ></i>
                        </td>
                        <td>{deal.name}</td>
                        <td>Qualify To Buy</td>
                        <td>${(Math.random() * 100000).toFixed(2)}</td>
                        <td>{deal.expectedCloseDate}</td>
                        <td>{deal.owner}</td>
                        <td>{Math.floor(Math.random() * 100)}%</td>
                        <td>
                          <span
                            className={`badge ${
                              deal.status === "Won"
                                ? "bg-success"
                                : deal.status === "Lost"
                                ? "bg-danger"
                                : "bg-primary"
                            }`}
                          >
                            {deal.status}
                          </span>
                        </td>
                        <td>{deal.tags}</td>
                        <td>{new Date().toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                  Show
                  <select
                    className="form-select d-inline-block mx-2"
                    style={{ width: "auto" }}
                  >
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                  entries
                </div>
                <div className="pagination">
                  <button className="btn btn-outline-secondary me-2">
                    Prev
                  </button>
                  <button className="btn btn-primary me-2">1</button>
                  <button className="btn btn-outline-secondary">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filter Modal */}
      {showFilter && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-funnel me-2"></i>
                  Filter
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowFilter(false)}
                ></button>
              </div>
              <div className="modal-body">
                {/* Deals Name Section */}
                <div className="mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <i className="bi bi-chevron-down me-2"></i>
                    <h6 className="mb-0">Deals Name</h6>
                  </div>
                  <div className="px-4">
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-white">
                        <i className="bi bi-search"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search Country"
                      />
                    </div>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={selectedDeals.includes("Collins")}
                        onChange={() => {
                          /* Add checkbox logic */
                        }}
                      />
                      <label className="form-check-label">Collins</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Konopelski</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Adams</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Gutkowski</label>
                    </div>
                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">Walter</label>
                    </div>
                  </div>
                </div>

                {/* Owner Section */}
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-chevron-right me-2"></i>
                    <h6 className="mb-0">Owner</h6>
                  </div>
                </div>

                {/* Status Section */}
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-chevron-right me-2"></i>
                    <h6 className="mb-0">Status</h6>
                  </div>
                </div>

                {/* Rating Section */}
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-chevron-right me-2"></i>
                    <h6 className="mb-0">Rating</h6>
                  </div>
                </div>

                {/* Tags Section */}
                <div className="mb-3">
                  <div className="d-flex align-items-center">
                    <i className="bi bi-chevron-right me-2"></i>
                    <h6 className="mb-0">Tags</h6>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-between">
                <button type="button" className="btn btn-light">
                  Reset
                </button>
                <button type="button" className="btn btn-danger">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manage Columns Modal */}
      {showManageColumns && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Want to manage datatables?</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowManageColumns(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p className="text-muted">
                  Please drag and drop your column to reorder your table and
                  enable see option as you want.
                </p>
                <div className="list-group">
                  {columns.map((column, index) => (
                    <div
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center p-3"
                    >
                      <div className="d-flex align-items-center">
                        <i className="bi bi-grip-vertical me-3 text-muted"></i>
                        <span>{column.name}</span>
                      </div>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={column.enabled}
                          onChange={() => {
                            const newColumns = [...columns];
                            newColumns[index].enabled =
                              !newColumns[index].enabled;
                            setColumns(newColumns);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowManageColumns(false)}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealReport;

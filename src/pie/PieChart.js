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

const PieChart = () => {
  const [showModal, setShowModal] = useState(false);

  const barData = {
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
        data: [400, 130, 240, 450, 250, 180, 300, 240, 300, 150, 250, 500],
        backgroundColor: "#20c997",
        barThickness: 20,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
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
        backgroundColor: ["#007bff", "#6f42c1", "#dc3545", "#ffc107"],
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
            size: 11,
          },
        },
      },
    },
  };

  const DownloadModal = () => (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Download Report</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                File Type <span className="text-danger">*</span>
              </label>
              <select className="form-select">
                <option>Download as PDF</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Filters</label>
              <div className="mb-3">
                <label className="form-label">
                  File Type <span className="text-danger">*</span>
                </label>
                <select className="form-select">
                  <option>All Fields</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Position <span className="text-danger">*</span>
                </label>
                <select className="form-select">
                  <option>All Position</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Source <span className="text-danger">*</span>
                </label>
                <select className="form-select">
                  <option>All Source</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Select Year <span className="text-danger">*</span>
                </label>
                <select className="form-select">
                  <option>2023</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button type="button" className="btn btn-danger">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-0">
            Leads Report <span className="badge bg-primary">123</span>
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

      <div className="row mb-4">
        <div className="col-12">
          <div className="input-group" style={{ width: "50%" }}>
            <span className="input-group-text bg-white border-end-0">
              <BiSearch />
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search Leads"
            />
            <span style={{ marginRight: "-10%", marginLeft: "10%" }}>
              <button
                className="btn btn-danger"
                onClick={() => setShowModal(true)}
              >
                Download Report
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* chart 1 */}
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Leads by Year</h5>
                <div className="date-picker">12/05/2024 - 12/11/2024</div>
              </div>
              <div style={{ height: "250px" }}>
                <Bar data={barData} options={barOptions} />
              </div>
            </div>
          </div>
        </div>
        {/* chart 2 */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="card-title mb-0">Leads by Source</h5>
                <div className="date-picker">12/05/2024 - 12/11/2024</div>
              </div>
              <div style={{ height: "250px" }}>
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div
          style={{
            border: "1px solid #dee2e6",
            borderRadius: "8px",
            overflow: "hidden",
            marginTop: "20px",
            width: "98%",
            marginLeft: "12px",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: 0,
              marginBottom: 0,
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  <input type="checkbox" className="form-check-input" />
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                ></th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Lead Name
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Company Name
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Phone
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Lead Status
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Lead Owner
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Source
                </th>
                <th
                  style={{
                    backgroundColor: "#f8f9fa",
                    fontWeight: 500,
                    padding: "12px 16px",
                    borderBottom: "1px solid #dee2e6",
                  }}
                >
                  Created Date
                </th>
              </tr>
            </thead>
            <tbody>
              {dealsData.deals.map((deal) => (
                <tr key={deal.id}>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >
                    <BsStar style={{ color: "#6c757d" }} />
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >
                    {deal.name}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >
                    <div>{deal.company?.name || "NovaWave LLC"}</div>
                    <small style={{ color: "#6c757d" }}>
                      {deal.company?.location || "Newyork, USA"}
                    </small>
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >
                    +1 875455453
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >{`${deal.name.toLowerCase()}@example.com`}</td>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >
                    <span
                      style={{
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontWeight: "normal",
                        backgroundColor:
                          deal.status === "Won"
                            ? "#198754"
                            : deal.status === "Lost"
                            ? "#dc3545"
                            : "#ffc107",
                        color: "white",
                      }}
                    >
                      {deal.status}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >
                    {deal.owner}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >
                    {deal.tags}
                  </td>
                  <td
                    style={{
                      padding: "12px 16px",
                      verticalAlign: "middle",
                      borderBottom: "1px solid #dee2e6",
                    }}
                  >
                    {deal.expectedCloseDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="pagination" style={{ margin: "20px" }}>
            <div className="entries">
              Show
              <select className="form-select" style={{ width: "60px" }}>
                <option>10</option>
              </select>
              entries
            </div>
            <div className="page-controls">
              <button className="page-btn">Prev</button>
              <button className="page-btn active">1</button>
              <button className="page-btn">Next</button>
            </div>
          </div>
        </div>
      </div>

      {showModal && <DownloadModal />}
    </div>
  );
};

export default PieChart;

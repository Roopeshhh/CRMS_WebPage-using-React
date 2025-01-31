import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

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

const ContactReport = () => {
  const initialTableData = [
    {
      name: "Darlee Robertson",
      phone: "1234567890",
      email: "robertson@example.com",
      company: "NovaWave LLC",
      industry: "Retail Industry",
      type: "Customer",
      source: "Paid Social",
      createdDate: "25 Sep 2023, 01:22 pm",
    },
    {
      name: "Sofia Martinez",
      phone: "9876543210",
      email: "sofia.martinez@example.com",
      company: "GreenTech Innovations",
      industry: "Technology",
      type: "Lead",
      source: "Email Campaign",
      createdDate: "14 Aug 2023, 10:15 am",
    },
    {
      name: "Liam Johnson",
      phone: "4567891230",
      email: "liam.johnson@example.com",
      company: "Prime Solutions Ltd.",
      industry: "Consulting",
      type: "Partner",
      source: "Referral",
      createdDate: "10 Oct 2023, 02:30 pm",
    },
    {
      name: "Emma Watson",
      phone: "3216549870",
      email: "emma.watson@example.com",
      company: "Creative Minds Inc.",
      industry: "Marketing",
      type: "Customer",
      source: "Organic Search",
      createdDate: "30 Nov 2023, 09:45 am",
    },
    {
      name: "Noah Brown",
      phone: "6543210987",
      email: "noah.brown@example.com",
      company: "Bright Horizons",
      industry: "Education",
      type: "Customer",
      source: "Event",
      createdDate: "05 Dec 2023, 11:20 am",
    },
    {
      name: "Olivia Wilson",
      phone: "7890123456",
      email: "olivia.wilson@example.com",
      company: "HealthFirst Ltd.",
      industry: "Healthcare",
      type: "Lead",
      source: "Direct Traffic",
      createdDate: "22 Nov 2023, 03:00 pm",
    },
    {
      name: "James Davis",
      phone: "8901234567",
      email: "james.davis@example.com",
      company: "Elite Designs",
      industry: "Fashion",
      type: "Customer",
      source: "Paid Search",
      createdDate: "15 Oct 2023, 08:10 am",
    },
    {
      name: "Mia Thompson",
      phone: "1230987654",
      email: "mia.thompson@example.com",
      company: "EcoWorld Enterprises",
      industry: "Sustainability",
      type: "Lead",
      source: "Content Marketing",
      createdDate: "01 Sep 2023, 06:50 pm",
    },
    {
      name: "William Anderson",
      phone: "5678901234",
      email: "william.anderson@example.com",
      company: "Urban Solutions",
      industry: "Real Estate",
      type: "Customer",
      source: "Social Media",
      createdDate: "18 Jul 2023, 12:35 pm",
    },
    {
      name: "Isabella Garcia",
      phone: "2345678901",
      email: "isabella.garcia@example.com",
      company: "Global Horizons",
      industry: "Travel",
      type: "Partner",
      source: "Affiliate Program",
      createdDate: "09 Dec 2023, 04:00 pm",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Custom");
  const [tableData, setTableData] = useState(initialTableData);
  const [filterOptions, setFilterOptions] = useState({});

  const handleDownloadClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
  };

  const handleFilterChange = (key, value) => {
    setFilterOptions((prev) => ({ ...prev, [key]: value }));
    // Apply filters on tableData
    const filteredData = initialTableData.filter((item) => {
      return Object.keys(filterOptions).every((filterKey) =>
        item[filterKey]
          ?.toLowerCase()
          .includes(filterOptions[filterKey]?.toLowerCase() || "")
      );
    });
    setTableData(filteredData);
  };

  const lineChartData = {
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
        label: "Contacts by Year",
        data: [
          40000, 30000, 20000, 25000, 30000, 35000, 40000, 45000, 20000, 30000,
          15000, 20000,
        ],
        fill: true,
        backgroundColor: "rgba(128, 0, 255, 0.2)",
        borderColor: "rgba(128, 0, 255, 1)",
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Campaigns", "Google", "Referrals", "Paid Social"],
    datasets: [
      {
        data: [44, 55, 41, 17],
        backgroundColor: ["#8000ff", "#ffa500", "#007bff", "#ff0000"],
      },
    ],
  };

  const dropdownOptions = [
    "Today",
    "Yesterday",
    "This Week",
    "Last Week",
    "Custom",
  ];

  return (
    <div
      className="container mt-4"
      style={{
        maxWidth: "100%", // Reduces total width by 240px (120px left + 120px right)
        margin: "0 auto", // Centers the container horizontally
      }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Contact Report</h4>
        <Button
          variant="danger"
          className="btn-sm"
          onClick={handleDownloadClick}>
          Download Report
        </Button>
      </div>

      <Form.Control
        type="text"
        placeholder="Search..."
        className="mb-4"
        onChange={(e) => handleFilterChange("search", e.target.value)}
      />

      <div className="d-flex justify-content-between align-items-center">
        <div  className="col-md-6 me-5" >
          <div
            className="card shadow-sm"
            style={{ height: "100%", border: "none" }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center ">
                <h6>Contacts by Year</h6>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {dropdownValue}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1">
                    {dropdownOptions.map((option, index) => (
                      <li key={index}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDropdownChange(option)}>
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Line data={lineChartData} />
            </div>
          </div>
        </div>

        <div className="col-md-6" style={{height:"500px"}}>
          <div
            className="card shadow-sm"
            style={{
              height: "100%",
              width: "70%",
              border: "none",
            }}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h6>Contacts by Source</h6>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    {dropdownValue}
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton2">
                    {dropdownOptions.map((option, index) => (
                      <li key={index}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDropdownChange(option)}>
                          {option}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Doughnut data={doughnutChartData} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <Dropdown className="me-2">
              <Dropdown.Toggle variant="light" id="sort-dropdown">
                Sort
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => handleFilterChange("sort", "Name")}>
                  Name
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleFilterChange("sort", "Date")}>
                  Date
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleFilterChange("sort", "Type")}>
                  Type
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => handleFilterChange("sort", "Source")}>
                  Source
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control
              type="text"
              placeholder="Filter"
              onChange={(e) => handleFilterChange("filter", e.target.value)}
            />
          </div>
          <Button variant="light" className="shadow-sm">
            Manage Columns
          </Button>
        </div>

        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Star</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Industry</th>
              <th>Type</th>
              <th>Source</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <button
                    className="btn btn-sm"
                    style={{ color: "gray" }}
                    onClick={(e) => {
                      e.target.style.color =
                        e.target.style.color === "yellow" ? "gray" : "yellow";
                    }}>
                    ★
                  </button>
                </td>
                <td>{row.name}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>{row.company}</td>
                <td>{row.industry}</td>
                <td>{row.type}</td>
                <td>{row.source}</td>
                <td>{row.createdDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Download Report</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Report Name</Form.Label>
              <Form.Control type="text" placeholder="Enter report name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date Range</Form.Label>
              <Form.Control type="text" placeholder="Enter date range" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Format</Form.Label>
              <Form.Select>
                <option>PDF</option>
                <option>Excel</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalClose}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactReport;

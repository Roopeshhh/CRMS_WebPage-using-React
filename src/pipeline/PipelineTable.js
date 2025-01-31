import React, { useState } from "react";
import {
  FiSearch,
  FiChevronDown,
  FiDownload,
  FiMoreVertical,
  FiSettings,
  FiFilter,
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Dropdown } from "react-bootstrap";
import "./PipelineTable.css";

const pipelineData = [
  {
    id: 1,
    name: "Sales",
    totalValue: "$4,50,664",
    deals: 315,
    stage: "Win",
    createdDate: "25 Sep 2023",
    status: "Active",
  },
  {
    id: 2,
    name: "Marketing",
    totalValue: "$3,12,893",
    deals: 447,
    stage: "Win",
    createdDate: "29 Sep 2023",
    status: "Active",
  },
  {
    id: 3,
    name: "Email",
    totalValue: "$2,89,274",
    deals: 654,
    stage: "In Pipeline",
    createdDate: "15 Oct 2023",
    status: "Active",
  },
  {
    id: 4,
    name: "Chats",
    totalValue: "$1,59,326",
    deals: 768,
    stage: "Win",
    createdDate: "29 Oct 2023",
    status: "Active",
  },
  {
    id: 5,
    name: "Operational",
    totalValue: "$2,90,173",
    deals: 142,
    stage: "Win",
    createdDate: "03 Nov 2023",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Collaborative",
    totalValue: "$4,51,417",
    deals: 315,
    stage: "Conversation",
    createdDate: "17 Nov 2023",
    status: "Active",
  },
  {
    id: 7,
    name: "Differentiate",
    totalValue: "$3,17,589",
    deals: 478,
    stage: "Lost",
    createdDate: "23 Nov 2023",
    status: "Active",
  },
  {
    id: 8,
    name: "Interact",
    totalValue: "$1,69,146",
    deals: 664,
    stage: "Lost",
    createdDate: "09 Dec 2023",
    status: "Active",
  },
];

export default function PipelineTable() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const getStageColor = (stage) => {
    switch (stage) {
      case "Win":
        return "bg-success";
      case "Lost":
        return "bg-danger";
      case "In Pipeline":
        return "bg-primary";
      case "Conversation":
        return "bg-info";
      default:
        return "bg-secondary";
    }
  };

  const handleExport = (format) => {
    console.log(`Exporting to ${format}`);
    // Implement export logic here
  };

  const handleSort = (type) => {
    console.log(`Sorting by ${type}`);
    // Implement sorting logic here
  };

  const toggleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };
  //   <div style={{ width: "100%" }}></div>;
  return (
    <div style={{ width: "100%" }} className="pipeline-container p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">
          Pipeline{" "}
          <span className="badge bg-primary rounded-pill ms-2">123</span>
        </h4>
        <div>
          <button className="btn btn-light btn-sm me-2">
            <FiSettings />
          </button>
          <button className="btn btn-light btn-sm">
            <FiChevronDown />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="position-relative mb-4">
        <FiSearch className="position-absolute search-icon" />
        <input
          type="text"
          className="form-control form-control-lg ps-5"
          placeholder="Search Pipeline"
        />
      </div>

      {/* Action Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-2">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="sort-dropdown">
              <FiChevronDown className="me-2" />
              Sort
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleSort("ascending")}>
                Ascending
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("descending")}>
                Descending
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("recently-viewed")}>
                Recently Viewed
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleSort("recently-added")}>
                Recently Added
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="export-dropdown">
              <FiDownload className="me-2" />
              Export
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleExport("pdf")}>
                Export to PDF
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleExport("excel")}>
                Export to Excel
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-light">
            <FiSettings className="me-2" />
            Manage Columns
          </button>
          <button className="btn btn-light">
            <FiFilter className="me-2" />
            Filter
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setShowDrawer(true)}>
            <FiPlus className="me-2" />
            Add Pipeline
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={() => {
                    /* Implement select all */
                  }}
                  className="form-check-input"
                />
              </th>
              <th>
                Pipeline Name <FiChevronDown className="ms-2" />
              </th>
              <th>
                Total Deal Value <FiChevronDown className="ms-2" />
              </th>
              <th>
                No of Deals <FiChevronDown className="ms-2" />
              </th>
              <th>
                Stages <FiChevronDown className="ms-2" />
              </th>
              <th>
                Created Date <FiChevronDown className="ms-2" />
              </th>
              <th>
                Status <FiChevronDown className="ms-2" />
              </th>
              <th>
                Action <FiChevronDown className="ms-2" />
              </th>
            </tr>
          </thead>
          <tbody>
            {pipelineData.map((pipeline) => (
              <tr key={pipeline.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(pipeline.id)}
                    onChange={() => toggleRowSelection(pipeline.id)}
                    className="form-check-input"
                  />
                </td>
                <td>{pipeline.name}</td>
                <td>{pipeline.totalValue}</td>
                <td>{pipeline.deals}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <div
                      className={`stage-indicator ${getStageColor(
                        pipeline.stage
                      )}`}></div>
                    {pipeline.stage}
                  </div>
                </td>
                <td>{pipeline.createdDate}</td>
                <td>
                  <span
                    className={`badge ${
                      pipeline.status === "Active" ? "bg-success" : "bg-danger"
                    }`}>
                    {pipeline.status}
                  </span>
                </td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" size="sm">
                      <FiMoreVertical />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Delete</Dropdown.Item>
                      <Dropdown.Item>View Details</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex align-items-center">
          <span className="me-2">Show</span>
          <select
            className="form-select form-select-sm w-auto"
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <span className="ms-2">entries</span>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-light btn-sm me-2">
            <FiChevronLeft /> Prev
          </button>
          <button className="btn btn-primary btn-sm me-2">1</button>
          <button className="btn btn-light btn-sm">
            Next <FiChevronRight />
          </button>
        </div>
      </div>

      {/* Slide-out Drawer */}
      <div className={`drawer ${showDrawer ? "show" : ""}`}>
        <div className="drawer-header">
          <h5>Add New Pipeline</h5>
          <button
            className="btn-close"
            onClick={() => setShowDrawer(false)}></button>
        </div>
        <div className="drawer-body">
          {/* Add Pipeline Form will go here */}
          <form>
            <div className="mb-3">
              <label className="form-label">Pipeline Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Create Pipeline
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

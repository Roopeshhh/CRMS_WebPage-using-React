import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaFileExcel,
  FaFilePdf,
  FaSort,
  FaCalendarAlt,
  FaColumns,
  FaFilter,
  FaChevronLeft,
  FaChevronRight,
  FaEllipsisV,
} from "react-icons/fa";
import projectsData from "./Contracts.json";
import "./Contracts.css";

const Contracts = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  const getPriorityClass = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return "";
    }
  };

  const getStatusClass = (status) => {
    return status.toLowerCase() === "active"
      ? "status-active"
      : "status-inactive";
  };
  // Add this modal component inside your Projects component
  const AddProjectModal = () => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Add New Project</h2>
            <button
              className="close-btn"
              onClick={() => setShowAddModal(false)}
            >
              ×
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>
                    Name <span className="required">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    Project ID <span className="required">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label>
                    Project Type <span className="required">*</span>
                  </label>
                  <select className="form-control">
                    <option value="">Choose</option>
                    <option>Web App</option>
                    <option>Mobile App</option>
                    <option>Design</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    Client <span className="required">*</span>
                  </label>
                  <select className="form-control">
                    <option value="">Select</option>
                    <option>NovaWave LLC</option>
                    <option>BlueSky Industries</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    Category <span className="required">*</span>
                  </label>
                  <select className="form-control">
                    <option value="">Select</option>
                    <option>Development</option>
                    <option>Design</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    Project Timing <span className="required">*</span>
                  </label>
                  <select className="form-control">
                    <option value="">Select</option>
                    <option>Fixed</option>
                    <option>Hourly</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>
                    Price <span className="required">*</span>
                  </label>
                  <input type="number" className="form-control" />
                </div>
                <div className="form-group">
                  <label>
                    Amount <span className="required">*</span>
                  </label>
                  <input type="number" className="form-control" />
                </div>
                <div className="form-group">
                  <label>
                    Total <span className="required">*</span>
                  </label>
                  <input type="number" className="form-control" readOnly />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    Responsible Persons <span className="required">*</span>
                  </label>
                  <div className="selected-person">
                    <span className="person-tag">
                      <img src="path-to-avatar" alt="" />
                      Darlee Robertson
                      <button type="button" className="remove-btn">
                        ×
                      </button>
                    </span>
                  </div>
                </div>
                <div className="form-group">
                  <label>
                    Team Leader <span className="required">*</span>
                  </label>
                  <div className="selected-person">
                    <span className="person-tag">
                      <img src="path-to-avatar" alt="" />
                      Sharon Roy
                      <button type="button" className="remove-btn">
                        ×
                      </button>
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    Start Date <span className="required">*</span>
                  </label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label>
                    Due Date <span className="required">*</span>
                  </label>
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Priority</label>
                  <select className="form-control">
                    <option value="">Select</option>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select className="form-control">
                    <option value="">Select</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>
                  Description <span className="required">*</span>
                </label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn-cancel"
              onClick={() => setShowAddModal(false)}
            >
              Cancel
            </button>
            <button className="btn-submit">Submit</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-wrapper">
      <div className="projects-header">
        <h2>
          Contracts <span className="badge">123</span>
        </h2>
      </div>

      {/* Search and Export Row */}
      <div className="search-export-container">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="action-buttons">
          <div className="dropdown">
            <button className="btn-export">
              Export <span className="caret"></span>
            </button>
            <div className="dropdown-content">
              <a href="#">
                <FaFilePdf /> Export as PDF
              </a>
              <a href="#">
                <FaFileExcel /> Export as Excel
              </a>
            </div>
          </div>
          <button className="btn-add" onClick={() => setShowAddModal(true)}>
            Add New Project
          </button>
        </div>
      </div>

      {/* Controls Row */}
      <div className="controls-container">
        <div className="left-controls">
          <div className="dropdown">
            <button className="control-btn">
              <FaSort /> Sort
            </button>
            <div className="dropdown-content">
              <a href="#">Ascending</a>
              <a href="#">Descending</a>
              <a href="#">Recently Viewed</a>
              <a href="#">Recently Added</a>
            </div>
          </div>
          <button className="control-btn">
            <FaCalendarAlt /> 12/06/2024 - 12/12/2024
          </button>
          <button className="control-btn">
            <FaColumns /> Manage Columns
          </button>
          <button className="control-btn">
            <FaFilter /> Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th></th>
              <th>Name</th>
              <th>Client</th>
              <th>Priority</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Type</th>
              <th>Pipeline Stage</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <span className="star">☆</span>
                </td>
                <td>{project.name}</td>
                <td>{project.client}</td>
                <td>
                  <span
                    className={`priority ${getPriorityClass(project.priority)}`}
                  >
                    {project.priority}
                  </span>
                </td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.type}</td>
                <td>
                  <div className="pipeline-stage">
                    <span className="stage-indicator"></span>
                    {project.pipelineStage}
                  </div>
                </td>
                <td>
                  <span className={`status ${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                </td>
                <td>
                  <FaEllipsisV className="action-icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-container">
        <div className="entries-selector">
          Show
          <select
            value={entriesPerPage}
            onChange={(e) => setEntriesPerPage(Number(e.target.value))}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
          entries
        </div>
        <div className="pagination-controls">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span className="page-number active">{currentPage}</span>
          <button
            className="page-btn"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
      {showAddModal && <AddProjectModal />}
    </div>
  );
};

export default Contracts;

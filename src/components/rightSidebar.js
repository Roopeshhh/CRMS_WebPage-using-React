import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./rightSidebar.css"; // Import updated CSS

const SidebarNew = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Gear Icon Button */}
      <div className="gear-icon">
        <button
          className="btn btn-warning"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <i className="bi bi-gear"></i>
        </button>
      </div>

      {/* Sidebar */}
      <div className={`new-sidebar ${isSidebarOpen ? "show" : ""}`}>
        <div className="sidebar-header">
          <h5 className="text-dark">Add New Activity</h5>
          <button
            className="btn-close btn-close-dark"
            onClick={toggleSidebar}
            aria-label="Close Sidebar"
          ></button>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-dark">
              Title *
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title"
            />
          </div>

          {/* Activity Type */}
          <div className="mb-3">
            <label htmlFor="activityType" className="form-label text-dark">
              Activity Type *
            </label>
            <div className="btn-group">
              <button className="btn btn-outline-primary">Calls</button>
              <button className="btn btn-outline-primary">Email</button>
              <button className="btn btn-outline-primary">Task</button>
              <button className="btn btn-outline-primary">Meeting</button>
            </div>
          </div>

          {/* Due Date */}
          <div className="mb-3">
            <label htmlFor="dueDate" className="form-label text-dark">
              Due Date *
            </label>
            <input
              type="date"
              className="form-control"
              id="dueDate"
            />
          </div>

          {/* Reminder */}
          <div className="mb-3">
            <label htmlFor="reminder" className="form-label text-dark">
              Reminder *
            </label>
            <input
              type="time"
              className="form-control"
              id="reminder"
            />
          </div>

          {/* Owner */}
          <div className="mb-3">
            <label htmlFor="owner" className="form-label text-dark">
              Owner *
            </label>
            <select className="form-select" id="owner">
              <option>Select owner</option>
              <option value="1">Owner 1</option>
              <option value="2">Owner 2</option>
            </select>
          </div>

          {/* Guests */}
          <div className="mb-3">
            <label htmlFor="guests" className="form-label text-dark">
              Guests *
            </label>
            <input
              type="text"
              className="form-control"
              id="guests"
              placeholder="Add guests"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label text-dark">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              placeholder="Add description"
            ></textarea>
          </div>

          {/* Deals, Contacts, and Company Dropdowns */}
          <div className="mb-3">
            <label htmlFor="deals" className="form-label text-dark">
              Deals
            </label>
            <select className="form-select" id="deals">
              <option>Select deal</option>
              <option value="deal1">Deal 1</option>
              <option value="deal2">Deal 2</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="contacts" className="form-label text-dark">
              Contacts
            </label>
            <select className="form-select" id="contacts">
              <option>Select contact</option>
              <option value="contact1">Contact 1</option>
              <option value="contact2">Contact 2</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="company" className="form-label text-dark">
              Company
            </label>
            <select className="form-select" id="company">
              <option>Select company</option>
              <option value="company1">Company 1</option>
              <option value="company2">Company 2</option>
            </select>
          </div>

          {/* Priority */}
          <div className="mb-3">
            <label htmlFor="priority" className="form-label text-dark">
              Priority
            </label>
            <select className="form-select" id="priority">
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-success">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={toggleSidebar}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SidebarNew;

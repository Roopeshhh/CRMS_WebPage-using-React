import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaCalendarAlt,
  FaFilter,
  FaSort,
  FaEllipsisV,
  FaStar,
  FaCheck,
} from "react-icons/fa";
import tasksData from "./Task.json";
import "./Task.css";

const Tasks = () => {
  const [tasks, setTasks] = useState({ recent: [], yesterday: [] });
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.tasks);
  }, []);

  const FilterModal = () => {
    return (
      <div
        className="filter-modal"
        onClick={(e) => {
          if (e.target.className === "filter-modal") {
            setShowFilterModal(false);
          }
        }}
      >
        <div className="filter-content">
          <h3>
            <FaFilter /> Filter
          </h3>

          {/* Task Name Section */}
          <div className="filter-section">
            <div className="section-header">
              <span>Task Name</span>
              <FaChevronDown />
            </div>
            <div className="section-content">
              <div className="search-box">
                <FaSearch />
                <input type="text" placeholder="Search Task" />
              </div>
              <div className="task-list">
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>Add a form to Update Task</span>
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>Add a form to Update Task</span>
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>Update orginal content</span>
                </label>
                <label className="checkbox-item">
                  <input type="checkbox" />
                  <span>Use only component colours</span>
                </label>
              </div>
            </div>
          </div>

          {/* Task Type Section */}
          <div className="filter-section">
            <div className="section-header collapsed">
              <span>Task Type</span>
              <FaChevronDown />
            </div>
          </div>

          {/* Tags Section */}
          <div className="filter-section">
            <div className="section-header collapsed">
              <span>Tags</span>
              <FaChevronDown />
            </div>
          </div>

          {/* Created By Section */}
          <div className="filter-section">
            <div className="section-header collapsed">
              <span>Created By</span>
              <FaChevronDown />
            </div>
          </div>

          {/* Created Date Section */}
          <div className="filter-section">
            <div className="section-header collapsed">
              <span>Created Date</span>
              <FaChevronDown />
            </div>
          </div>

          {/* Filter Actions */}
          <div className="filter-actions">
            <button className="btn-reset">Reset</button>
            <button className="btn-filter">Filter</button>
          </div>
        </div>
      </div>
    );
  };

  const getTagClass = (tag) => {
    switch (tag.toLowerCase()) {
      case "promotion":
        return "tag-promotion";
      case "collab":
        return "tag-collab";
      case "rejected":
        return "tag-rejected";
      case "rated":
        return "tag-rated";
      default:
        return "";
    }
  };

  const getTypeClass = (type) => {
    switch (type.toLowerCase()) {
      case "calls":
        return "type-calls";
      case "email":
        return "type-email";
      case "task":
        return "type-task";
      default:
        return "";
    }
  };
  const AddTaskModal = () => {
    return (
      <div
        className="modal-overlay"
        onClick={(e) => {
          if (e.target.className === "modal-overlay") {
            setShowAddTaskModal(false);
          }
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Add New Task</h2>
            <button
              className="close-btn"
              onClick={() => setShowAddTaskModal(false)}
            >
              ×
            </button>
          </div>

          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>
                  Title <span className="required">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select className="form-control">
                  <option>Choose</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  Responsible Persons <span className="required">*</span>
                </label>
                <div className="selected-person">
                  <span className="person-tag">
                    Darlee Robertson
                    <button type="button" className="remove-btn">
                      ×
                    </button>
                  </span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>
                    Start Date <span className="required">*</span>
                  </label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group half">
                  <label>
                    Due Date <span className="required">*</span>
                  </label>
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="form-group">
                <label>
                  Tags <span className="required">*</span>
                </label>
                <div className="tags-container">
                  <span className="tag">
                    Promotion{" "}
                    <button type="button" className="remove-btn">
                      ×
                    </button>
                  </span>
                  <span className="tag">
                    Collab{" "}
                    <button type="button" className="remove-btn">
                      ×
                    </button>
                  </span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group half">
                  <label>Priority</label>
                  <select className="form-control">
                    <option>Select</option>
                  </select>
                </div>
                <div className="form-group half">
                  <label>Status</label>
                  <select className="form-control">
                    <option>Active</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>
                  Description <span className="required">*</span>
                </label>
                <div className="rich-text-toolbar">
                  <select className="font-size">
                    <option>14</option>
                  </select>
                  <button type="button">B</button>
                  <button type="button">I</button>
                  <button type="button">U</button>
                  <button type="button">S</button>
                  <button type="button">A</button>
                  <button type="button">≡</button>
                  <button type="button">≡</button>
                </div>
                <textarea className="form-control" rows="6"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="tasks-wrapper">
      <div className="tasks-header">
        <h2>
          Tasks <span className="badge">123</span>
        </h2>
      </div>

      <div className="tasks-controls">
        <div className="left-controls">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search Task" />
          </div>

          <button
            className="btn-add-task"
            onClick={() => setShowAddTaskModal(true)}
          >
            Add New Tasks
          </button>
          <div className="dropdown">
            <button className="control-btn">
              All Tasks <FaChevronDown />
            </button>
          </div>

          <div className="mark-read">
            <input type="checkbox" id="markAll" />
            <label htmlFor="markAll">Mark all as read</label>
          </div>

          <button className="control-btn">
            <FaSort /> Sort
          </button>

          <button className="control-btn date-btn">
            <FaCalendarAlt /> 12/06/2024 - 12/12/2024
          </button>

          <button
            className="control-btn"
            onClick={() => setShowFilterModal(true)}
          >
            <FaFilter /> Filter
          </button>
        </div>
      </div>

      <div className="tasks-list">
        <div className="section">
          <div className="section-header">
            <h3>
              Recent <span className="count">24</span>
            </h3>
          </div>

          {tasks.recent.map((task) => (
            <div key={task.id} className="task-item">
              <div className="task-drag">⋮⋮</div>
              <input type="checkbox" />
              <FaStar className="star-icon" />
              <div className="task-content">
                <div className="task-title">{task.title}</div>
                <div className="task-tags">
                  <span className={`tag ${task.type.toLowerCase()}`}>
                    {task.type}
                  </span>
                  <span className={`tag ${task.status.toLowerCase()}`}>
                    {task.status}
                  </span>
                  {task.tags.map((tag, index) => (
                    <span key={index} className={`tag ${tag.toLowerCase()}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="task-date">25 Oct 2023</div>
            </div>
          ))}
        </div>

        <div className="section">
          <div className="section-header">
            <h3>Yesterday</h3>
          </div>
          {/* Yesterday's tasks */}
          <div className="section">
            <div className="section-header">
              <h3>
                Recent <span className="count">24</span>
              </h3>
            </div>

            {tasks.recent.map((task) => (
              <div key={task.id} className="task-item">
                <div className="task-drag">⋮⋮</div>
                <input type="checkbox" />
                <FaStar className="star-icon" />
                <div className="task-content">
                  <div className="task-title">{task.title}</div>
                  <div className="task-tags">
                    <span className={`tag ${task.type.toLowerCase()}`}>
                      {task.type}
                    </span>
                    <span className={`tag ${task.status.toLowerCase()}`}>
                      {task.status}
                    </span>
                    {task.tags.map((tag, index) => (
                      <span key={index} className={`tag ${tag.toLowerCase()}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="task-date">25 Oct 2023</div>
              </div>
            ))}
          </div>
        </div>
        {showAddTaskModal && <AddTaskModal />}
        {showFilterModal && <FilterModal />}
      </div>
    </div>
  );
};

export default Tasks;

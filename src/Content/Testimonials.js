import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsSearch,
  BsFilter,
  BsThreeDotsVertical,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import { BiExport, BiColumns } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

// Initial 10 testimonials data
const initialTestimonials = [
  {
    id: 1,
    userName: "Darlee Robertson",
    position: "Facility Manager",
    rating: 5,
    content: "Project was received ontime without any mistake",
    createdAt: "25 Sep 2023, 01:22pm",
    status: "Inactive",
    starred: true,
    avatar: "DR",
  },
  {
    id: 2,
    userName: "Sharon Roy",
    position: "Installer",
    rating: 5,
    content: "It help us to manage, track & do more business",
    createdAt: "29 Sep 2023, 08:12 am",
    status: "Inactive",
    starred: false,
    avatar: "SR",
  },
  {
    id: 3,
    userName: "Vaughan Lewis",
    position: "Senior Manager",
    rating: 5,
    content: "Brilliant tool to manage leads & projects",
    createdAt: "02 Oct 2023, 10:15 am",
    status: "Active",
    starred: true,
    avatar: "VL",
  },
  {
    id: 4,
    userName: "Jessica Louise",
    position: "Test Engineer",
    rating: 5,
    content: "Very responsive and accurate with suggestions",
    createdAt: "11 Oct 2023, 02:32 pm",
    status: "Active",
    starred: true,
    avatar: "JL",
  },
  {
    id: 5,
    userName: "Carol Thomas",
    position: "UI/UX Designer",
    rating: 5,
    content: "Happy with measurable on lead management",
    createdAt: "4 Nov 2023, 04:22 pm",
    status: "Inactive",
    starred: true,
    avatar: "CT",
  },
  {
    id: 6,
    userName: "Dawn Mercha",
    position: "Technician",
    rating: 5,
    content: "Pipeline are great for tracking process",
    createdAt: "16 Nov 2023, 10:51 pm",
    status: "Active",
    starred: false,
    avatar: "DM",
  },
  {
    id: 7,
    userName: "Rachel Hampton",
    position: "Software Developer",
    rating: 5,
    content: "It have complete visibility of clients & interactions",
    createdAt: "25 Nov 2023, 03:43 pm",
    status: "Active",
    starred: false,
    avatar: "RH",
  },
  {
    id: 8,
    userName: "Jonelle Curtiss",
    position: "Supervisor",
    rating: 5,
    content: "Give customer best possible service & support",
    createdAt: "07 Dec 2023, 11:22 am",
    status: "Active",
    starred: false,
    avatar: "JC",
  },
  {
    id: 9,
    userName: "Jonathan Smith",
    position: "Team Lead Dev",
    rating: 5,
    content: "It give accurate and real time information",
    createdAt: "15 Dec 2023, 08:17 am",
    status: "Active",
    starred: false,
    avatar: "JS",
  },
  {
    id: 10,
    userName: "Eric Adams",
    position: "HR Manager",
    rating: 5,
    content: "Most efficient process, accurate & consistent data",
    createdAt: "29 Dec 2023, 01:22 pm",
    status: "Active",
    starred: false,
    avatar: "EA",
  },
];

const TestimonialsComponent = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Filter function
  const getFilteredData = () => {
    return testimonials.filter((testimonial) => {
      const matchesSearch =
        testimonial.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.content.toLowerCase().includes(searchTerm.toLowerCase());

      switch (filterType) {
        case "active":
          return matchesSearch && testimonial.status === "Active";
        case "inactive":
          return matchesSearch && testimonial.status === "Inactive";
        case "starred":
          return matchesSearch && testimonial.starred;
        default:
          return matchesSearch;
      }
    });
  };

  // Star toggle function
  const handleStarToggle = (id) => {
    setTestimonials(
      testimonials.map((item) =>
        item.id === id ? { ...item, starred: !item.starred } : item
      )
    );
  };

  // Render stars
  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <span key={index} className="text-warning">
        ★
      </span>
    ));
  };

  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">Testimonials</h5>
      </div>

      {/* Search and Actions Bar */}
      <div className="card mb-4">
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <BsSearch className="text-secondary" />
                </span>
                <input
                  type="text"
                  className="form-control border-start-0"
                  placeholder="Search Testimonial"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end gap-2">
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown">
                  <BiExport className="me-1" /> Export
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">CSV</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Excel</button>
                  </li>
                  <li>
                    <button className="dropdown-item">PDF</button>
                  </li>
                </ul>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => setShowAddModal(true)}>
                <AiOutlinePlus className="me-1" /> Add Testimonial
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  data-bs-toggle="dropdown">
                  Sort
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item">Name (A-Z)</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Name (Z-A)</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Date (Newest)</button>
                  </li>
                  <li>
                    <button className="dropdown-item">Date (Oldest)</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-end gap-2">
              <button
                className="btn btn-outline-primary"
                onClick={() => setShowColumnModal(true)}>
                <BiColumns className="me-1" /> Manage Columns
              </button>
              <div className="dropdown">
                <button
                  className="btn btn-outline-primary dropdown-toggle"
                  data-bs-toggle="dropdown">
                  <BsFilter className="me-1" /> Filter
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setFilterType("all")}>
                      All
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setFilterType("active")}>
                      Active
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setFilterType("inactive")}>
                      Inactive
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => setFilterType("starred")}>
                      Starred
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th></th>
              <th>User Name</th>
              <th>Rating</th>
              <th>Content</th>
              <th>Created at</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredData().map((testimonial) => (
              <tr key={testimonial.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => handleStarToggle(testimonial.id)}>
                    {testimonial.starred ? (
                      <BsStarFill className="text-warning" />
                    ) : (
                      <BsStar />
                    )}
                  </button>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-2">
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white"
                      style={{ width: "40px", height: "40px" }}>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div>{testimonial.userName}</div>
                      <small className="text-muted">
                        {testimonial.position}
                      </small>
                    </div>
                  </div>
                </td>
                <td>{renderStars(testimonial.rating)}</td>
                <td>{testimonial.content}</td>
                <td>{testimonial.createdAt}</td>
                <td>
                  <span
                    className={`badge ${
                      testimonial.status === "Active"
                        ? "bg-success"
                        : "bg-danger"
                    }`}>
                    {testimonial.status}
                  </span>
                </td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-link p-0"
                      data-bs-toggle="dropdown">
                      <BsThreeDotsVertical />
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item">Edit</button>
                      </li>
                      <li>
                        <button className="dropdown-item text-danger">
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Testimonial Modal */}
      {showAddModal && (
        <>
          <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New Testimonial</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowAddModal(false)}></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">User Name</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Position</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Rating</label>
                      <select className="form-select">
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Content</label>
                      <textarea
                        className="form-control"
                        rows="3"
                        required></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select className="form-select">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowAddModal(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop show"></div>
        </>
      )}
    </div>
  );
};

export default TestimonialsComponent;

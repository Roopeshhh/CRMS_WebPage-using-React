import React, { useState } from "react";
import industryData from "./Industry.json";

function Industry() {
  const [industries, setIndustries] = useState(industryData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingIndustry, setEditingIndustry] = useState(null);
  const [newIndustry, setNewIndustry] = useState({
    title: "",
    status: "Active",
    description: "",
    category: "",
    marketSize: "",
    growthRate: "",
    keyPlayers: [],
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [actionStatus, setActionStatus] = useState({ type: "", message: "" });

  // Filter industries based on search
  const filteredIndustries = industries.filter((industry) =>
    industry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredIndustries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredIndustries.length / itemsPerPage);

  // Form validation
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.title.trim()) {
      newErrors.title = "Title is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add new industry
  const handleAddIndustry = async (e) => {
    e.preventDefault();
    if (validateForm(newIndustry)) {
      setIsLoading(true);
      try {
        const newId =
          industries.length > 0
            ? Math.max(...industries.map((i) => i.id)) + 1
            : 1;
        const currentDate = new Date()
          .toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })
          .replace(/,/g, "");

        const newIndustryEntry = {
          id: newId,
          ...newIndustry,
          createdAt: currentDate,
        };

        setIndustries([...industries, newIndustryEntry]);
        setActionStatus({
          type: "success",
          message: "Industry added successfully!",
        });

        setTimeout(() => {
          setShowAddModal(false);
          setNewIndustry({
            title: "",
            status: "Active",
            description: "",
            category: "",
            marketSize: "",
            growthRate: "",
            keyPlayers: [],
          });
          setActionStatus({ type: "", message: "" });
        }, 1500);
      } catch (error) {
        setActionStatus({
          type: "error",
          message: "Error adding industry",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Edit industry
  const handleEdit = (industry) => {
    setEditingIndustry({ ...industry });
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(editingIndustry)) {
      setIsLoading(true);
      try {
        const updatedIndustries = industries.map((industry) =>
          industry.id === editingIndustry.id
            ? {
                ...editingIndustry,
                lastModified: new Date().toLocaleString(),
              }
            : industry
        );

        setIndustries(updatedIndustries);
        setActionStatus({
          type: "success",
          message: "Industry updated successfully!",
        });

        setTimeout(() => {
          setShowEditModal(false);
          setEditingIndustry(null);
          setActionStatus({ type: "", message: "" });
        }, 1500);
      } catch (error) {
        setActionStatus({
          type: "error",
          message: "Error updating industry",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Delete industry
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this industry?")) {
      setIsLoading(true);
      try {
        const updatedIndustries = industries.filter(
          (industry) => industry.id !== id
        );
        setIndustries(updatedIndustries);
        setActionStatus({
          type: "success",
          message: "Industry deleted successfully!",
        });

        setTimeout(() => {
          setActionStatus({ type: "", message: "" });
        }, 1500);
      } catch (error) {
        setActionStatus({
          type: "error",
          message: "Error deleting industry",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div
      className="container-fluid px-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">
          Industry <span className="text-primary">123</span>
        </h4>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary">
            <i className="bi bi-arrow-clockwise"></i>
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-arrows-angle-expand"></i>
          </button>
        </div>
      </div>

      {/* Search and Add */}
      <div className="row mb-4">
        <div className="col">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search Industry"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-auto">
          <button
            className="btn btn-danger"
            onClick={() => setShowAddModal(true)}
          >
            <i className="bi bi-plus-lg me-2"></i>
            Add New Industry
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table
          className="table"
          style={{ border: "0.1px solid lightgrey", borderRadius: "15px" }}
        >
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="form-check-input" />
              </th>
              <th>
                Title <i className="bi bi-arrow-down-up"></i>
              </th>
              <th>
                Created at <i className="bi bi-arrow-down-up"></i>
              </th>
              <th>
                Status <i className="bi bi-arrow-down-up"></i>
              </th>
              <th>
                Action <i className="bi bi-arrow-down-up"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((industry) => (
              <tr key={industry.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>{industry.title}</td>
                <td>{industry.createdAt}</td>
                <td>
                  <span
                    className={`badge ${
                      industry.status === "Active" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {industry.status}
                  </span>
                </td>
                <td>
                  <div className="dropdown">
                    <button className="btn btn-link" data-bs-toggle="dropdown">
                      <i className="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleEdit(industry)}
                        >
                          <i className="bi bi-pencil me-2"></i>Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleDelete(industry.id)}
                        >
                          <i className="bi bi-trash me-2"></i>Delete
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

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex align-items-center">
          <span className="me-2">Show</span>
          <select
            className="form-select form-select-sm me-2"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span>entries</span>
        </div>

        <nav>
          <ul className="pagination mb-0">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                Prev
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Industry</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAddModal(false)}
                ></button>
              </div>
              <form onSubmit={handleAddIndustry}>
                <div className="modal-body">
                  {actionStatus.message && (
                    <div
                      className={`alert alert-${
                        actionStatus.type === "success" ? "success" : "danger"
                      }`}
                    >
                      {actionStatus.message}
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label">Title*</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.title ? "is-invalid" : ""
                      }`}
                      value={newIndustry.title}
                      onChange={(e) =>
                        setNewIndustry({
                          ...newIndustry,
                          title: e.target.value,
                        })
                      }
                    />
                    {errors.title && (
                      <div className="invalid-feedback">{errors.title}</div>
                    )}
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Status</label>
                        <select
                          className="form-select"
                          value={newIndustry.status}
                          onChange={(e) =>
                            setNewIndustry({
                              ...newIndustry,
                              status: e.target.value,
                            })
                          }
                        >
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input
                          type="text"
                          className="form-control"
                          value={newIndustry.category}
                          onChange={(e) =>
                            setNewIndustry({
                              ...newIndustry,
                              category: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={newIndustry.description}
                      onChange={(e) =>
                        setNewIndustry({
                          ...newIndustry,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Market Size</label>
                        <input
                          type="text"
                          className="form-control"
                          value={newIndustry.marketSize}
                          onChange={(e) =>
                            setNewIndustry({
                              ...newIndustry,
                              marketSize: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Growth Rate (%)</label>
                        <input
                          type="number"
                          className="form-control"
                          value={newIndustry.growthRate}
                          onChange={(e) =>
                            setNewIndustry({
                              ...newIndustry,
                              growthRate: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowAddModal(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Adding...
                      </>
                    ) : (
                      "Add Industry"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Industry</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingIndustry(null);
                  }}
                ></button>
              </div>
              <form onSubmit={handleEditSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingIndustry?.title || ""}
                      onChange={(e) =>
                        setEditingIndustry({
                          ...editingIndustry,
                          title: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      value={editingIndustry?.status || "Active"}
                      onChange={(e) =>
                        setEditingIndustry({
                          ...editingIndustry,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingIndustry(null);
                    }}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Saving...
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Industry;

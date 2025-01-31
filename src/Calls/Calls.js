import React, { useState } from "react";
import callReasonData from "./Calls.json";

function CallReason() {
  const [reasons, setReasons] = useState(callReasonData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingReason, setEditingReason] = useState(null);
  const [newReason, setNewReason] = useState({
    title: "",
    status: "Active",
    description: "",
    priority: "Medium",
    category: "",
    followUpRequired: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [actionStatus, setActionStatus] = useState({ type: "", message: "" });

  // Filter reasons based on search
  const filteredReasons = reasons.filter((reason) =>
    reason.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredReasons.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredReasons.length / itemsPerPage);

  // Form validation
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.title.trim()) {
      newErrors.title = "Title is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add new reason
  const handleAddReason = async (e) => {
    e.preventDefault();
    if (validateForm(newReason)) {
      setIsLoading(true);
      try {
        const newId =
          reasons.length > 0 ? Math.max(...reasons.map((r) => r.id)) + 1 : 1;
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

        const newReasonEntry = {
          id: newId,
          ...newReason,
          createdAt: currentDate,
        };

        setReasons([...reasons, newReasonEntry]);
        setActionStatus({
          type: "success",
          message: "Call reason added successfully!",
        });

        setTimeout(() => {
          setShowAddModal(false);
          setNewReason({
            title: "",
            status: "Active",
            description: "",
            priority: "Medium",
            category: "",
            followUpRequired: false,
          });
          setActionStatus({ type: "", message: "" });
        }, 1500);
      } catch (error) {
        setActionStatus({
          type: "error",
          message: "Error adding call reason",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Edit reason
  const handleEdit = (reason) => {
    setEditingReason({ ...reason });
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(editingReason)) {
      setIsLoading(true);
      try {
        const updatedReasons = reasons.map((reason) =>
          reason.id === editingReason.id
            ? {
                ...editingReason,
                lastModified: new Date().toLocaleString(),
              }
            : reason
        );

        setReasons(updatedReasons);
        setActionStatus({
          type: "success",
          message: "Call reason updated successfully!",
        });

        setTimeout(() => {
          setShowEditModal(false);
          setEditingReason(null);
          setActionStatus({ type: "", message: "" });
        }, 1500);
      } catch (error) {
        setActionStatus({
          type: "error",
          message: "Error updating call reason",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Delete reason
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this call reason?")) {
      setIsLoading(true);
      try {
        const updatedReasons = reasons.filter((reason) => reason.id !== id);
        setReasons(updatedReasons);
        setActionStatus({
          type: "success",
          message: "Call reason deleted successfully!",
        });

        setTimeout(() => {
          setActionStatus({ type: "", message: "" });
        }, 1500);
      } catch (error) {
        setActionStatus({
          type: "error",
          message: "Error deleting call reason",
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
          Calls Reason <span className="text-primary">123</span>
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
              placeholder="Search Call Reason"
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
            Add New Call Reason
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table
          className="table"
          style={{ border: "0.1px solid lightgrey", borderRadius: "5px" }}
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
            {currentItems.map((reason) => (
              <tr key={reason.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>{reason.title}</td>
                <td>{reason.createdAt}</td>
                <td>
                  <span
                    className={`badge ${
                      reason.status === "Active" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {reason.status}
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
                          onClick={() => handleEdit(reason)}
                        >
                          <i className="bi bi-pencil me-2"></i>Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleDelete(reason.id)}
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
        <div className="d-flex align-items-center gap-2">
          <span>Show</span>
          <select
            className="form-select form-select-sm w-auto"
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
                <h5 className="modal-title">Add New Call Reason</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAddModal(false)}
                ></button>
              </div>
              <form onSubmit={handleAddReason}>
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
                      value={newReason.title}
                      onChange={(e) =>
                        setNewReason({ ...newReason, title: e.target.value })
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
                          value={newReason.status}
                          onChange={(e) =>
                            setNewReason({
                              ...newReason,
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
                        <label className="form-label">Priority</label>
                        <select
                          className="form-select"
                          value={newReason.priority}
                          onChange={(e) =>
                            setNewReason({
                              ...newReason,
                              priority: e.target.value,
                            })
                          }
                        >
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={newReason.description}
                      onChange={(e) =>
                        setNewReason({
                          ...newReason,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="followUpRequired"
                        checked={newReason.followUpRequired}
                        onChange={(e) =>
                          setNewReason({
                            ...newReason,
                            followUpRequired: e.target.checked,
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="followUpRequired"
                      >
                        Follow-up Required
                      </label>
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
                      "Add Call Reason"
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
                <h5 className="modal-title">Edit Call Reason</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingReason(null);
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
                      value={editingReason?.title || ""}
                      onChange={(e) =>
                        setEditingReason({
                          ...editingReason,
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
                      value={editingReason?.status || "Active"}
                      onChange={(e) =>
                        setEditingReason({
                          ...editingReason,
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
                      setEditingReason(null);
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

export default CallReason;

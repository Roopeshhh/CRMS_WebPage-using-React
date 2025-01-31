import React, { useState } from "react";
import stagesData from "./ContactStage.json";

function ContactStages() {
  const [stages, setStages] = useState(stagesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingStage, setEditingStage] = useState(null);
  const [newStage, setNewStage] = useState({
    title: "",
    status: "Active",
    description: "",
    priority: "Medium",
    color: "#000000",
    order: 0,
    notifications: {
      email: false,
      push: false,
    },
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [actionStatus, setActionStatus] = useState({ type: "", message: "" });

  // Filter stages based on search
  const filteredStages = stages.filter((stage) =>
    stage.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStages.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStages.length / itemsPerPage);

  // Validation
  const validateForm = (data) => {
    const newErrors = {};
    if (!data.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (data.order < 0) {
      newErrors.order = "Order must be a positive number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add new stage
  const handleAddStage = async (e) => {
    e.preventDefault();
    if (validateForm(newStage)) {
      setIsLoading(true);
      try {
        const newId =
          stages.length > 0 ? Math.max(...stages.map((s) => s.id)) + 1 : 1;
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

        const newStageEntry = {
          id: newId,
          ...newStage,
          createdAt: currentDate,
        };

        setStages([...stages, newStageEntry]);
        setActionStatus({
          type: "success",
          message: "Stage added successfully!",
        });

        setTimeout(() => {
          setShowAddModal(false);
          setNewStage({
            title: "",
            status: "Active",
            description: "",
            priority: "Medium",
            color: "#000000",
            order: 0,
            notifications: {
              email: false,
              push: false,
            },
          });
          setActionStatus({ type: "", message: "" });
        }, 1500);
      } catch (error) {
        setActionStatus({
          type: "error",
          message: "Error adding stage",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Edit stage
  const handleEdit = (stage) => {
    setEditingStage({ ...stage });
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(editingStage)) {
      setIsLoading(true);
      try {
        const updatedStages = stages.map((stage) =>
          stage.id === editingStage.id
            ? {
                ...editingStage,
                lastModified: new Date().toLocaleString(),
              }
            : stage
        );

        setStages(updatedStages);
        setActionStatus({
          type: "success",
          message: "Stage updated successfully!",
        });

        setTimeout(() => {
          setShowEditModal(false);
          setEditingStage(null);
          setActionStatus({ type: "", message: "" });
        }, 1500);
      } catch (error) {
        setActionStatus({
          type: "error",
          message: "Error updating stage",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Delete stage
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this stage?")) {
      setIsLoading(true);
      try {
        const updatedStages = stages.filter((stage) => stage.id !== id);
        setStages(updatedStages);
        setActionStatus({
          type: "success",
          message: "Stage deleted successfully!",
        });

        setTimeout(() => {
          setActionStatus({ type: "", message: "" });
        }, 1500);
      } catch (error) {
        setActionStatus({
          type: "error",
          message: "Error deleting stage",
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
          Contact Stages <span className="text-primary">123</span>
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
              placeholder="Search Contact Stages"
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
            Add New Stages
          </button>
        </div>
      </div>

      {/* Status Messages */}
      {actionStatus.message && (
        <div
          className={`alert alert-${
            actionStatus.type === "success" ? "success" : "danger"
          } mb-4`}
        >
          {actionStatus.message}
        </div>
      )}

      {/* Table */}
      <div className="table-responsive">
        <table
          className="table "
          style={{ border: "0.1px solid lightgrey", borderRadius: "10px" }}
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
            {currentItems.map((stage) => (
              <tr key={stage.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>{stage.title}</td>
                <td>{stage.createdAt}</td>
                <td>
                  <span
                    className={`badge ${
                      stage.status === "Active" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {stage.status}
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
                          onClick={() => handleEdit(stage)}
                        >
                          <i className="bi bi-pencil me-2"></i>Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleDelete(stage.id)}
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
            className="form-select form-select-sm"
            style={{ width: "auto" }}
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <span className="ms-2">entries</span>
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
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>
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
                <h5 className="modal-title">Add New Stage</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowAddModal(false)}
                ></button>
              </div>
              <form onSubmit={handleAddStage}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Title*</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.title ? "is-invalid" : ""
                        }`}
                        value={newStage.title}
                        onChange={(e) =>
                          setNewStage({ ...newStage, title: e.target.value })
                        }
                      />
                      {errors.title && (
                        <div className="invalid-feedback">{errors.title}</div>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        value={newStage.status}
                        onChange={(e) =>
                          setNewStage({ ...newStage, status: e.target.value })
                        }
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Priority</label>
                      <select
                        className="form-select"
                        value={newStage.priority}
                        onChange={(e) =>
                          setNewStage({ ...newStage, priority: e.target.value })
                        }
                      >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Order</label>
                      <input
                        type="number"
                        className={`form-control ${
                          errors.order ? "is-invalid" : ""
                        }`}
                        value={newStage.order}
                        onChange={(e) =>
                          setNewStage({
                            ...newStage,
                            order: parseInt(e.target.value),
                          })
                        }
                      />
                      {errors.order && (
                        <div className="invalid-feedback">{errors.order}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={newStage.description}
                      onChange={(e) =>
                        setNewStage({
                          ...newStage,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Color</label>
                    <input
                      type="color"
                      className="form-control form-control-color"
                      value={newStage.color}
                      onChange={(e) =>
                        setNewStage({ ...newStage, color: e.target.value })
                      }
                      title="Choose stage color"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label d-block">Notifications</label>
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="emailNotification"
                        checked={newStage.notifications.email}
                        onChange={(e) =>
                          setNewStage({
                            ...newStage,
                            notifications: {
                              ...newStage.notifications,
                              email: e.target.checked,
                            },
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="emailNotification"
                      >
                        Email
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="pushNotification"
                        checked={newStage.notifications.push}
                        onChange={(e) =>
                          setNewStage({
                            ...newStage,
                            notifications: {
                              ...newStage.notifications,
                              push: e.target.checked,
                            },
                          })
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor="pushNotification"
                      >
                        Push
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
                      "Add Stage"
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
                <h5 className="modal-title">Edit Stage</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingStage(null);
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
                      value={editingStage?.title || ""}
                      onChange={(e) =>
                        setEditingStage({
                          ...editingStage,
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
                      value={editingStage?.status || "Active"}
                      onChange={(e) =>
                        setEditingStage({
                          ...editingStage,
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
                      setEditingStage(null);
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

export default ContactStages;

import React, { useState } from "react";
import reasonsData from "./LostReason.json";

function LostReason() {
  const [reasons, setReasons] = useState(reasonsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingReason, setEditingReason] = useState(null);
  const [newReason, setNewReason] = useState({
    title: "",
    status: "Active",
  });

  const [errors, setErrors] = useState({});
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reasonToDelete, setReasonToDelete] = useState(null);
  const [editHistory, setEditHistory] = useState([]);
  const [showEditHistory, setShowEditHistory] = useState(false);
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

  const handleDelete = (id) => {
    const reasonToDelete = reasons.find((reason) => reason.id === id);
    setReasonToDelete(reasonToDelete);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    setIsLoading(true);

    try {
      // Archive the reason instead of permanent deletion
      const archivedReason = {
        ...reasonToDelete,
        deletedAt: new Date().toLocaleString(),
        deletedBy: "Current User", // Replace with actual user info
        status: "Deleted",
      };

      // Remove from active reasons
      const updatedReasons = reasons.filter(
        (reason) => reason.id !== reasonToDelete.id
      );

      // Store in localStorage for recovery if needed
      const archivedReasons = JSON.parse(
        localStorage.getItem("archivedReasons") || "[]"
      );
      localStorage.setItem(
        "archivedReasons",
        JSON.stringify([...archivedReasons, archivedReason])
      );

      // Update state
      setReasons(updatedReasons);
      setActionStatus({
        type: "success",
        message: "Reason deleted successfully!",
      });

      // Close modal after short delay
      setTimeout(() => {
        setShowDeleteModal(false);
        setReasonToDelete(null);
        setActionStatus({ type: "", message: "" });
      }, 1500);
    } catch (error) {
      setActionStatus({
        type: "error",
        message: "Error deleting reason",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (reason) => {
    setEditingReason({
      ...reason,
      lastEditedAt: new Date().toLocaleString(),
      previousValues: { ...reason },
    });
    setShowEditModal(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate required fields
      if (!editingReason.title.trim()) {
        throw new Error("Title is required");
      }

      // Create edit history record
      const historyRecord = {
        id: Date.now(),
        reasonId: editingReason.id,
        previousValues: editingReason.previousValues,
        newValues: { ...editingReason },
        editedAt: new Date().toLocaleString(),
        editedBy: "Current User", // You can replace with actual user info
      };

      // Update the reason
      const updatedReasons = reasons.map((reason) =>
        reason.id === editingReason.id
          ? {
              ...editingReason,
              lastModified: new Date().toLocaleString(),
            }
          : reason
      );

      // Update states
      setReasons(updatedReasons);
      setEditHistory([...editHistory, historyRecord]);
      setActionStatus({
        type: "success",
        message: "Reason updated successfully!",
      });

      // Close modal after short delay
      setTimeout(() => {
        setShowEditModal(false);
        setEditingReason(null);
        setActionStatus({ type: "", message: "" });
      }, 1500);
    } catch (error) {
      setActionStatus({
        type: "error",
        message: error.message || "Error updating reason",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!newReason.title.trim()) {
      newErrors.title = "Title is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddReason = (e) => {
    e.preventDefault();
    if (validateForm()) {
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
        title: newReason.title,
        status: newReason.status,
        createdAt: currentDate,
      };

      setReasons([...reasons, newReasonEntry]);
      setShowAddModal(false);
      setNewReason({
        title: "",
        status: "Active",
      });
      setErrors({});
    }
  };

  return (
    <div
      className="container-fluid px-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">
          Lost Reason <span className="text-primary">123</span>
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

      <div className="row mb-4">
        <div className="col">
          <div className="input-group">
            <span className="input-group-text bg-white">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Search Lost Reason"
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
            Add New Reason
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table
          className="table"
          style={{ border: "0.1px solid lightGrey", borderRadius: "10px" }}
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
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Reason</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowAddModal(false);
                    setErrors({});
                  }}
                ></button>
              </div>
              <form onSubmit={handleAddReason}>
                <div className="modal-body">
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
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-plus-lg me-2"></i>
                    Add Reason
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowAddModal(false);
                      setErrors({});
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-danger">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this reason?</p>
                <div className="alert alert-warning">
                  <strong>Title:</strong> {reasonToDelete?.title}
                  <br />
                  <strong>Created At:</strong> {reasonToDelete?.createdAt}
                  <br />
                  <strong>Status:</strong> {reasonToDelete?.status}
                </div>
                <p className="text-muted small">
                  This action can be undone from the archived reasons section.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteModal(false)}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDelete}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Deleting...
                    </>
                  ) : (
                    "Delete Reason"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Edit Modal */}
      {showEditModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Reason</h5>
                <div>
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => setShowEditHistory(!showEditHistory)}
                  >
                    <i className="bi bi-clock-history"></i> History
                  </button>
                  <button
                    type="button"
                    className="btn-close ms-2"
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingReason(null);
                      setShowEditHistory(false);
                    }}
                  ></button>
                </div>
              </div>
              <form onSubmit={handleEditSubmit}>
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

                  {showEditHistory && (
                    <div className="mb-3">
                      <h6>Edit History</h6>
                      <div className="table-responsive">
                        <table className="table table-sm">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Previous Title</th>
                              <th>New Title</th>
                              <th>Edited By</th>
                            </tr>
                          </thead>
                          <tbody>
                            {editHistory
                              .filter(
                                (history) =>
                                  history.reasonId === editingReason.id
                              )
                              .map((history) => (
                                <tr key={history.id}>
                                  <td>{history.editedAt}</td>
                                  <td>{history.previousValues.title}</td>
                                  <td>{history.newValues.title}</td>
                                  <td>{history.editedBy}</td>
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label">Title*</label>
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

                  <div className="row">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Priority</label>
                        <select
                          className="form-select"
                          value={editingReason?.priority || "Medium"}
                          onChange={(e) =>
                            setEditingReason({
                              ...editingReason,
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
                      value={editingReason?.description || ""}
                      onChange={(e) =>
                        setEditingReason({
                          ...editingReason,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingReason(null);
                      setShowEditHistory(false);
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

export default LostReason;

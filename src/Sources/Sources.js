import React, { useState } from "react";

// Update the source data to match your image
const sourcesData = [
  {
    id: 1,
    title: "Phone Calls",
    createdAt: "25 Sep 2023, 01:22 pm",
    status: "Active",
  },
  {
    id: 2,
    title: "Social Media",
    createdAt: "29 Sep 2023, 04:15 pm",
    status: "Active",
  },
  {
    id: 3,
    title: "Referral Sites",
    createdAt: "04 Oct 2023, 10:18 am",
    status: "Active",
  },
  {
    id: 4,
    title: "Web Analytics",
    createdAt: "17 Oct 2023, 03:31 pm",
    status: "Inactive",
  },
  {
    id: 5,
    title: "Previous Purchases",
    createdAt: "24 Oct 2023, 09:14 pm",
    status: "Active",
  },
  {
    id: 6,
    title: "Lead & Opportunity",
    createdAt: "08 Nov 2023, 09:56 am",
    status: "Active",
  },
  {
    id: 7,
    title: "Image-based Features",
    createdAt: "14 Nov 2023, 04:19 pm",
    status: "Active",
  },
  {
    id: 8,
    title: "Bots",
    createdAt: "23 Nov 2023, 11:14 pm",
    status: "Active",
  },
];

function Sources() {
  const [sources, setSources] = useState(sourcesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;
  const [editingSource, setEditingSource] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSource, setNewSource] = useState({
    title: "",
    type: "Website",
    status: "Active",
    description: "",
    category: "",
    priority: "Medium",
    tags: [],
    notificationEnabled: false,
  });
  const [errors, setErrors] = useState({});

  // Filter sources based on search
  const filteredSources = sources.filter((source) =>
    source.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredSources.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredSources.length / itemsPerPage);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this source?")) {
      setSources(sources.filter((source) => source.id !== id));
    }
  };
  const handleEditSubmit = (e) => {
    e.preventDefault();
    setSources(
      sources.map((source) =>
        source.id === editingSource.id ? editingSource : source
      )
    );
    setShowEditModal(false);
    setEditingSource(null);
  };
  const handleEdit = (source) => {
    setEditingSource({ ...source });
    setShowEditModal(true);
  };
  const validateForm = () => {
    const newErrors = {};
    if (!newSource.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!newSource.type) {
      newErrors.type = "Type is required";
    }
    if (!newSource.category) {
      newErrors.category = "Category is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddSource = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newId =
        sources.length > 0 ? Math.max(...sources.map((s) => s.id)) + 1 : 1;
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

      const newSourceEntry = {
        id: newId,
        title: newSource.title,
        type: newSource.type,
        status: newSource.status,
        createdAt: currentDate,
        description: newSource.description,
        category: newSource.category,
        priority: newSource.priority,
        tags: newSource.tags,
        notificationEnabled: newSource.notificationEnabled,
      };

      setSources([...sources, newSourceEntry]);
      setShowAddModal(false);
      setNewSource({
        title: "",
        type: "Website",
        status: "Active",
        description: "",
        category: "",
        priority: "Medium",
        tags: [],
        notificationEnabled: false,
      });
      setErrors({});
    }
  };

  return (
    <div
      className="container-fluid px-4"
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">
          Sources <span className="text-primary">123</span>
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
              placeholder="Search Source"
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
            Add New Sources
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table
          className="table "
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
            {currentItems.map((source) => (
              <tr key={source.id}>
                <td>
                  <input type="checkbox" className="form-check-input" />
                </td>
                <td>{source.title}</td>
                <td>{source.createdAt}</td>
                <td>
                  <span
                    className={`badge ${
                      source.status === "Active" ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {source.status}
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
                          onClick={() => handleEdit(source)}
                        >
                          <i className="bi bi-pencil me-2"></i>Edit
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item text-danger"
                          onClick={() => handleDelete(source.id)}
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

      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              Previous
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
      {showEditModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Source</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingSource(null);
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
                      value={editingSource?.title || ""}
                      onChange={(e) =>
                        setEditingSource({
                          ...editingSource,
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
                      value={editingSource?.status || "Active"}
                      onChange={(e) =>
                        setEditingSource({
                          ...editingSource,
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
                      setEditingSource(null);
                    }}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {showAddModal && (
        <div
          className="modal show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Source</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowAddModal(false);
                    setErrors({});
                  }}
                ></button>
              </div>
              <form onSubmit={handleAddSource}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Title*</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.title ? "is-invalid" : ""
                        }`}
                        value={newSource.title}
                        onChange={(e) =>
                          setNewSource({ ...newSource, title: e.target.value })
                        }
                      />
                      {errors.title && (
                        <div className="invalid-feedback">{errors.title}</div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Type*</label>
                      <select
                        className={`form-select ${
                          errors.type ? "is-invalid" : ""
                        }`}
                        value={newSource.type}
                        onChange={(e) =>
                          setNewSource({ ...newSource, type: e.target.value })
                        }
                      >
                        <option value="Website">Website</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                        <option value="Referral">Referral</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.type && (
                        <div className="invalid-feedback">{errors.type}</div>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Category*</label>
                      <select
                        className={`form-select ${
                          errors.category ? "is-invalid" : ""
                        }`}
                        value={newSource.category}
                        onChange={(e) =>
                          setNewSource({
                            ...newSource,
                            category: e.target.value,
                          })
                        }
                      >
                        <option value="">Select Category</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Sales">Sales</option>
                        <option value="Support">Support</option>
                        <option value="Development">Development</option>
                      </select>
                      {errors.category && (
                        <div className="invalid-feedback">
                          {errors.category}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">Priority</label>
                      <select
                        className="form-select"
                        value={newSource.priority}
                        onChange={(e) =>
                          setNewSource({
                            ...newSource,
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

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      rows="3"
                      value={newSource.description}
                      onChange={(e) =>
                        setNewSource({
                          ...newSource,
                          description: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Status</label>
                      <select
                        className="form-select"
                        value={newSource.status}
                        onChange={(e) =>
                          setNewSource({ ...newSource, status: e.target.value })
                        }
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>

                    <div className="col-md-6 mb-3">
                      <div className="form-check mt-4">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="notificationEnabled"
                          checked={newSource.notificationEnabled}
                          onChange={(e) =>
                            setNewSource({
                              ...newSource,
                              notificationEnabled: e.target.checked,
                            })
                          }
                        />
                        <label
                          className="form-check-label"
                          htmlFor="notificationEnabled"
                        >
                          Enable Notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer">
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
                  <button type="submit" className="btn btn-primary">
                    Add Source
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

export default Sources;
